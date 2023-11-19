import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import router from './router'
import VueApexCharts from "vue3-apexcharts";

loadFonts()

createApp(App).use(router).use(createPinia())
  .use(vuetify)
  .use(VueApexCharts)
  .mount('#app')
