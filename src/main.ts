import Vue from 'vue';
import './plugins/axios';
import Vuetify from 'vuetify';
import App from './App.vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import i18n from './i18n';
import router from './router';

const vuetify = new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#007BFF',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
        },
    },
});
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    i18n,
    router,
    render: (h) => h(App),
}).$mount('#app');
