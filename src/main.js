import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import flash from './directives/flash'
createApp(App).use(router)
.directive('flash',flash)
.mount('#app')