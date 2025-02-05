<template>
  <form>
    <div>
      <h1>Star Info Form</h1>
      <div>
        <input type="text" v-model="targetUrl"/>
        <p>Target Url</p>
        <input type="text" v-model="starName"/>
        <p>Name as it appears in the link (case sensitive)</p>
        <select v-model="selbut">
          <option disabled value="">Please select one</option>
          <option>Infinite</option>
          <option>Button</option>
        </select>
        <button type="button" @click="sendToApi()">Submit</button>
        <p>Selected: {{ selbut }}</p>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
// import puppeteer from "puppeteer";
// import { Browser, Page} from "puppeteer"


import axios from "axios";
export default {
  name: "sendToApi",
  data(){
    return{
      targetUrl: '',
      starName: '',
      selbut: '',
    }
  },
  methods: {
    async sendToApi() {
      let responded;
      await axios.get('http://localhost:8000/api/scraper', {params:  {targetUrl: this.targetUrl, starName: this.starName, selbut: this.selbut}}).then((response) => {
        responded = response.data},
        (error) => {
        console.log(error)
      });
      console.log("outside the then: " + responded);

      // this.$emit('createPayload', payload)
      // this.clearForm()
    },
    // clearForm(){
    //   this.targetUrl = '';
    //   this.starName = '';
    //   this.selbut = '';
    // }
  }
}


</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
}

div {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input,
select {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

h2 {
  margin-top: 1.5em;
}

p {
  margin: 0.5em 0;
}

</style>
