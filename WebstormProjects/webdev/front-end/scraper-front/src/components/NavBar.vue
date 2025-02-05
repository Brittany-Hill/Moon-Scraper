<script setup lang="ts">

</script>

<template>
  <header>
    <div class="logo-title-container">
      <RouterLink to="/">
        <img alt="Crescent" class="logo" src="@/assets/cresent.svg" />
      </RouterLink>
      <h1 class="title">Moon Scraper</h1>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/features">Features</RouterLink>
        <RouterLink to="/Help">Help</RouterLink>
        <RouterLink to="/Scraper">Scrape</RouterLink>
      </nav>
    </div>
  </header>
</template>
/*
<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333; /* Dark background for header */
  color: white;
  display: flex;
  justify-content: space-between; /* Spreads items between left and right */
  align-items: center;
  padding: 10px 20px;
  z-index: 1000; /* Ensure header stays above other content */
}

.logo-title-container {
  display: flex;
  align-items: center;
  gap: 15px; /* Space between the logo and the title */
}

.logo {
  width: 50px; /* Adjust the logo size */
  height: auto;
  cursor: pointer; /* Indicates the logo is clickable */
}

.title {
  font-size: 1.5em;
  margin: 0;
}

nav {
  display: flex;
  gap: 20px; /* Space between nav items */
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1em;
}

nav a:hover {
  text-decoration: underline;
}

body {
  padding-top: 80px; /* Adds top space for content to not hide under the fixed header */
}

/* Mobile-specific styles */
@media (max-width: 768px) {
  header {
    padding: 10px 15px; /* Reduced padding for mobile */
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start; /* Align items to the left */
  }

  .logo-title-container {
    gap: 10px; /* Reduced gap between logo and title */
    margin-bottom: 10px; /* Space between logo-title and nav */
  }

  .logo {
    width: 40px; /* Smaller logo size on mobile */
  }

  .title {
    font-size: 1.2em; /* Smaller title size on mobile */
  }

  nav {
    width: 100%; /* Full width for navigation */
    display: block; /* Stack nav items vertically */
  }

  nav a {
    display: block;
    margin: 10px 0; /* Space out the navigation links vertically */
    text-align: left; /* Align text to the left */
  }
}

/* Tablet and smaller desktop (responsive in-between size) */
@media (max-width: 1024px) {
  .logo-title-container {
    gap: 15px; /* Slightly larger gap for tablet */
  }

  nav {
    gap: 15px;
  }

  nav a {
    font-size: 1em;
  }
}

</style>

