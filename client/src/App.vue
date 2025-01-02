<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'  // Import useRoute to access current route
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HeaderComponent.vue'

// State to control if the nav is open or not
const isNavOpen = ref(false) 

// State to track if the screen size is mobile
const isMobile = ref(false) 

// State to track the current page title 
const currentPage = ref('')  

// Function to update mobile state based on window width
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600
}

// Add event listeners for window resize
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  updateCurrentPage()  // Initialize current page on mount
})

// Clean up event listener
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

// Watch for route changes to update current page title
const route = useRoute()

// Function to update the page title based on the current route
const updateCurrentPage = () => {
  switch (route.path) {
    case '/':
      currentPage.value = 'Home'
      break
    case '/arson':
      currentPage.value = 'Arson'
      break
    case '/Assault':
      currentPage.value = 'Assault'
      break
    case '/break-and-enter':
      currentPage.value = 'Break and Enter'
      break
    case '/hit-and-run':
      currentPage.value = 'Hit and Run'
      break
    case '/motor-theft':
      currentPage.value = 'Vehicle Theft'
      break
    case '/possession':
      currentPage.value = 'Drug Possession'
      break
    case '/sexual-violations':
      currentPage.value = 'Sexual Violations'
      break
    case '/shootings':
      currentPage.value = 'Shootings'
      break
    case '/theft-over-5000':
      currentPage.value = 'Theft Over $5000'
      break
    default:
      currentPage.value = 'Unknown'
  }
}

// Watch route changes to update page title
watch(() => route.path, updateCurrentPage)
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Ottawa Geographic Crime Analysis" />

      <!-- Mobile menu toggle button and current page -->
      <div class="menu-header">
        <button @click="isNavOpen = !isNavOpen" class="mobile-nav-toggle" v-if="isMobile">
          <span v-if="!isNavOpen">☰</span>
          <span v-else>×</span>
        </button>

        <div v-if="isMobile" class="current-page">
          <h2>{{ currentPage }}</h2>
        </div>
      </div>

      <!-- Mobile menu navigation -->
      <nav :class="{ open: isNavOpen }">
        <RouterLink to="/" @click="isNavOpen = false">Home</RouterLink>
        <RouterLink to="/arson" @click="isNavOpen = false">Arson</RouterLink>
        <RouterLink to="/Assault" @click="isNavOpen = false">Assault</RouterLink>
        <RouterLink to="/break-and-enter" @click="isNavOpen = false">Break and Enter</RouterLink>
        <RouterLink to="/hit-and-run" @click="isNavOpen = false">Hit and Run</RouterLink>
        <RouterLink to="/motor-theft" @click="isNavOpen = false">Vehicle Theft</RouterLink>
        <RouterLink to="/possession" @click="isNavOpen = false">Drug Possession</RouterLink>
        <RouterLink to="/sexual-violations" @click="isNavOpen = false">Sexual Violations</RouterLink>
        <RouterLink to="/shootings" @click="isNavOpen = false">Shootings</RouterLink>
        <RouterLink to="/theft-over-5000" @click="isNavOpen = false">Theft Over $5000</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <p>By Oleksander Turchyn</p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem; 
  border-left: 1px solid var(--color-border);
  transition: background-color 0.3s ease; 
}

nav a:first-of-type {
  border: 0;
}

/* Mobile devices */
@media (max-width: 600px) {
  /* Flex container for mobile header (button + current page) */
  .menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  /* Mobile menu toggle button */
  .mobile-nav-toggle {
    display: block;
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: var(--color-text);
    margin: 1rem;
  }

  nav {
    display: none;
    width: 100%;
    text-align: left;
  }

  nav.open {
    display: block;
  }

  nav a {
    display: block;
    padding: 1rem;
    border-bottom: 1px solid var(--color-border);
    width: 100%;
    text-align: left;
  }

  nav a:last-of-type {
    border-bottom: none;
  }

  /* Current page title beside the menu icon */
  .current-page {
    font-size: 14px;
    color: white;
    margin-left: 1rem;
    display: inline-block;
  }
}

footer {
  display: flex;
  align-items: center; 
  justify-content: center;
  bottom: 0; 
  width: 100%; 
  height: 8rem; 
}
</style>
