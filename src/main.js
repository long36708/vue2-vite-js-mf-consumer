import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'


const vue = new Vue({
    // @ts-expect-error
    render: h => h(App),
});

// Run!
vue.$mount('#app');
