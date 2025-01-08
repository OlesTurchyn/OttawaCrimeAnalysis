<script setup>
import { ref, onMounted,onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

import HelloWorld from './components/HeaderComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isNavOpen = ref(false) 
const isMobile = ref(false) 
const currentPage = ref('')  
const route = useRoute()

// State for the theme (light/dark)
const theme = ref('light')

// Function to toggle the theme
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  applyTheme(theme.value)
}

// Function to apply the theme
const applyTheme = (selectedTheme) => {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(selectedTheme)
  localStorage.setItem('theme', selectedTheme)
}

// Check for the user's preferred color scheme or stored theme
onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    theme.value = storedTheme
  } else {
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = prefersDark ? 'dark' : 'light'
  }
  applyTheme(theme.value)
})

// Mobile detection logic
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  updateCurrentPage()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})

const updateCurrentPage = () => {
  const pathMap = {
    '/': 'Home',
    '/arson': 'Arson',
    '/Assault': 'Assault',
    '/break-and-enter': 'Break and Enter',
    '/hit-and-run': 'Hit and Run',
    '/motor-theft': 'Vehicle Theft',
    '/possession': 'Drug Possession',
    '/sexual-violations': 'Sexual Violations',
    '/shootings': 'Shootings',
    '/theft-over-5000': 'Theft Over $5000',
  }
  currentPage.value = pathMap[route.path] || 'Unknown'
}

watch(() => route.path, updateCurrentPage)
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- Theme Toggle Button -->
      <div @click="toggleTheme" class="theme-toggle">
        <font-awesome-icon :icon="theme === 'light' ? ['fas', 'moon'] : ['fas', 'sun']" />
      </div>
     
      <HelloWorld msg="Ottawa Geographic Crime Analysis" />

      <!-- Mobile menu toggle button -->
      <div class="menu-header">
        <button @click="isNavOpen = !isNavOpen" class="mobile-nav-toggle" v-if="isMobile">
          <span v-if="!isNavOpen">☰</span>
          <span v-else>×</span>
        </button>

        <div v-if="isMobile" class="current-page">
          <h2>{{ currentPage }}</h2>
        </div>
      </div>

      <!-- Navigation -->
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

<style>
:root.light {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-border: #e0e0e0;
  --color-header:#000000;
  --color-subheader: #3c3c3c;
  --color-p: #252525;
  --color-blue:#104eac;
}

:root.dark {
  --color-background: #181818;
  --color-text: #ffffff;
  --color-border: #3e3e3e;
  --color-header:#ffffff;
  --color-subheader: #d0d0d0;
  --color-p: #ccc;
  --color-blue:#82b2f9;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
}

p {
  color: var(--color-p)
}

h1 {
  color: var(--color-header);
}

h2 {
  color: var(--color-subheader);
}

h3 {
  color: var(--color-subheader);
}
</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.theme-toggle {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content:right;
  font-size:1.2rem;

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
    margin-left:-5px;
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
