import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { EventBus } from '@/utils/EventBus'

createApp(App)
  .use(createPinia())
  .use(router)
  .provide('emitter', EventBus)
  .mount('#app')
