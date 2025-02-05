
import puppeteer, {Browser, Page} from 'puppeteer';
import fs from 'fs';

import express, { Request, Response } from 'express';

import cors from 'cors';
const app = express();
const port = 8000;

const corsOptions ={
    origin:'http://localhost:5177',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.get('/api/scraper', async function (req: Request, res: Response): Promise<any> {
console.log(req.query.targetUrl);
console.log(req.query.starName);
console.log(req.query.selbut);
// @ts-ignore
const things = await getPuppet(req.query.targetUrl, req.query.starName, req.query.selbut);
res.send(things);
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export async function getPuppet(targetUrl: string, starName: string,  loadType: string): Promise<string> {
    console.log("entered service")
    const buttonName: string = 'body > div.clearfix.content_wrapper.mobile.content_wrapper_page_celebrity_page > div.main_wrapper > ' +
        'div.content_section_wrapper.js_loader_main_wrapper.content_section_celebrity_media > div.content_section_footer > div > div > span'

    const browser: Browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        protocolTimeout: 1000000000
    })
    const page: Page = await browser.newPage();
    await page.goto(targetUrl, {
        waitUntil: "networkidle0",
    })
    let state: string = '';
    //chooses the type of button load
    if (loadType === 'Button') {
        state = await buttonLoad(page, buttonName, starName);
    } else if (loadType === 'Infinite') {
        state = await infiniteLoad(page,starName);
    }
    await browser.close();
    return state
}
    //loads pages that are advanced via button click
    async function buttonLoad(page:Page, buttonName: string, starName: string) : Promise<string> {

        const visChecker :any = async (page: Page, button: any): Promise<boolean> => {
            let visible: boolean = true;
            await page
                .waitForSelector(button, {visible: true, timeout: 4000})
                .catch((): void => {
                    console.log("Not there");
                    visible = false;
                });
            return visible;
        };
        let loadButtons: boolean = await visChecker(page, buttonName);
        while (loadButtons) {
            //console.log("Loading");
            await page.locator(buttonName)
                .click()
                .catch((): void => {
                })
            await page.waitForNetworkIdle()
            loadButtons = await visChecker(page, buttonName);
        }

        return await getLinks(page, starName)
    }

    async function infiniteLoad(page:Page, starName: String): Promise<string> {
        await page.evaluate(async ():Promise<void> => {

            await new Promise<void>((resolve :(value:void |PromiseLike<void>)=>void) :void => {
                let totalHeight :number = 0;
                const distance = 40;
                const timer  = setInterval(() :void => {
                    const scrollHeight :number = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight - window.innerHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });
        return await getLinks(page, starName)
    }

    async function getLinks(page:Page, starName: String): Promise<string> {
        const links: string = await page.evaluate(async (): Promise<string> => {
            document.querySelector('#media-items-all > div:nth-child(1) > article');
            const linkSelector: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a")

            return [].slice.call(linkSelector).map(function (e: any) :any {
                return e.href;
            }).join('\n');

        })
        if (links.length > 0) {
            let temp: any[] = parser(links.toString(), starName);
            temp.forEach((element: string): void => {
                fs.appendFileSync('test.txt', element + '\n')
            });
            if (temp.length <= 0) {
                return "Incomplete"
            }
            else{return "completed";}
        }else{
           return "Incomplete"
        }

    }

    function parser(string: string,starName: String) {

        let array = string.split('\n');

        let i = array.length;
        //-- Loop through the array in reverse order since we are modifying the array.
        while (i--) {
            // @ts-ignore
            if (array[i].indexOf(starName) <= 0) {
                //-- splice will remove the non-matching element
                array.splice(i, 1);
            }

        }

        return uniq(array);
    }

    function uniq(a: any[]): any[] {
        //sorts and filters array vs the past element to return a serialized array
        return a.sort().filter(function (item: any, pos: number, ary: any[]): boolean {
            return !pos || item !== ary[pos - 1];
        });
    }


