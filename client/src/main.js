import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// Import Font Awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


// Add icons to the library
library.add(faSun, faMoon);

const app = createApp(App)

// Register the Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')
