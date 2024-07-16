import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n from './helpers/i18n';
import Particles from "vue3-particles";

loadFonts()


createApp(App)
  .use(Particles)
  .use(i18n)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
