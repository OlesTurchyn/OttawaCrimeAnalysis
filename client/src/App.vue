<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HeaderComponent.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="Ottawa Geographic Crime Analysis" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/arson">Arson</RouterLink>
        <RouterLink to="/Assault">Assault</RouterLink>
        <RouterLink to="/break-and-enter">Break and Enter</RouterLink>
        <RouterLink to="/hit-and-run">Hit and Run</RouterLink>
        <RouterLink to="/motor-theft">Vehicle Theft</RouterLink>
        <RouterLink to="/possession">Drug Possession</RouterLink>
        <RouterLink to="/sexual-violations">Sexual Violations</RouterLink>
        <RouterLink to="/shootings">Shootings</RouterLink>
        <RouterLink to="/theft-over-5000">Theft Over $5000</RouterLink>
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

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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
