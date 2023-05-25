/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import VueApexCharts from "vue3-apexcharts";

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

registerPlugins(app)

app.use(VueApexCharts).use(VueGoogleMaps, {
  load: {
      key: 'AIzaSyAiRRnFBxdVlLkvx7b1RqPRxWkRD6zx0Wg',
       language: 'en',
  },
}).mount('#app')
