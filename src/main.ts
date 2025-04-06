import { createApp } from 'vue'
import App from './App.vue'
import ganttastic from '@infectoone/vue-ganttastic'
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';


import './styles/fonts.css'


createApp(App).use(ganttastic).use(PrimeVue, {
  theme: {
    preset: Aura
  }
}).mount('#app')
