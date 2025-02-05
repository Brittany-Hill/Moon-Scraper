<script setup lang="ts">

</script>

<template>
  <div class="scraper-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="hero-title">Welcome to Moon Scraper</h1>
      <p class="hero-description">
        The best tool to scrape data from websites with ease. Get started in minutes.
      </p>
      <RouterLink to="/scraper" class="cta-btn">Start Scraping</RouterLink>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2 class="section-title">Features</h2>
      <div class="features-list">
        <div class="feature">
          <h3>Fast and Reliable</h3>
          <p>Scrape data at lightning speed with our powerful engine.</p>
        </div>
        <div class="feature">
          <h3>Easy to Use</h3>
          <p>Simple interface with minimal setup. Just click and go.</p>
        </div>
        <div class="feature">
          <h3>Customizable</h3>
          <p>Configure the scraper to target specific data with ease.</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works">
      <h2 class="section-title">How It Works</h2>
      <ol class="steps">
        <li>Step 1: Enter the URL you want to scrape.</li>
        <li>Step 2: Choose the data fields you want to scrape.</li>
        <li>Step 3: Start the scraping process and download the results.</li>
      </ol>
    </section>

    <!-- Call to Action Section -->
    <section class="cta">
      <h2 class="cta-title">Ready to start scraping?</h2>
      <RouterLink to="/scraper" class="cta-btn">Get Started</RouterLink>
    </section>

    <!-- Footer (Optional) -->
    <footer class="footer">
      <p>&copy; 2025 Moon Scraper. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.scraper-page {
  font-family: Arial, sans-serif;
  margin: 0;
  padding-top: 0;
  box-sizing: border-box;
  color: black; /* Ensure all text is black */
  max-width: 100%; /* Prevents content from stretching beyond the screen */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  display: flex; /* Flexbox for alignment */
  flex-direction: column; /* Stack sections vertically */
  align-items: center; /* Center horizontally */
  justify-content: flex-start; /* Align items from the top */
}

/* Hero Section */
.hero {
  background-color: white;
  color: black; /* Black text for readability */
  text-align: center;
  padding: 80px 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px; /* Ensure it doesn't stretch too wide */
}

.hero-title {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.cta-btn {
  background-color: #1e82e8;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 1.1em;
  border-radius: 5px;
}

.cta-btn:hover {
  background-color: #155a8a;
}

/* Features Section */
.features {
  background-color: #f7f7f7;
  padding: 50px 20px;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px; /* Prevent it from stretching too wide */
}

.features .section-title {
  font-size: 2em;
  margin-bottom: 30px;
}

.features-list {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap; /* Allow wrapping of feature items */
  max-width: 1200px;
  margin: 0 auto; /* Center the content */
}

.feature {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;
  text-align: center;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.feature h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.feature p {
  font-size: 1em;
  color: #555;
}

/* How It Works Section */
.how-it-works {
  background-color: #fff;
  padding: 50px 20px;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px; /* Ensure it doesn't stretch too wide */
}

.steps {
  list-style: none;
  padding: 0;
}

.steps li {
  font-size: 1.2em;
  margin-bottom: 20px;
}

/* CTA Section */
.cta {
  background-color: #1e82e8;
  color: white;
  text-align: center;
  padding: 50px 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px; /* Prevent it from stretching too wide */
}

.cta-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.cta-btn {
  padding: 12px 25px; /* Adjust button size for mobile */
}

/* Footer */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 50px;
  width: 100%;
  max-width: 1200px; /* Ensure it doesn't stretch too wide */
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  .hero {
    padding: 250px 20px;
  }

  .hero-title {
    font-size: 2em; /* Adjust font size for small screens */
  }

  .hero-description {
    font-size: 1.1em;
  }

  .features-list {
    flex-direction: column; /* Stack features vertically on mobile */
    gap: 30px;
  }

  .feature {
    width: 90%; /* Increase feature size for mobile */
    margin: 0 auto;
  }

  .steps li {
    font-size: 1.1em;
  }

  .cta-btn {
    padding: 12px 25px; /* Adjust button padding on smaller screens */
  }

  .cta-title {
    font-size: 1.8em;
  }

  .footer {
    font-size: 0.9em;
  }
}

/* For larger screens */
@media (min-width: 769px) {
  .hero {
    padding: 80px 20px;
  }
}
</style>
