import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import 'virtual:uno.css';

import './assets/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount('#app');
