import Vue from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld';
import Player from './components/player';

Vue.component('world', HelloWorld);
Vue.component('app-player', Player);

new Vue({
    render: function (h) {
        return h(App)
    },
}).$mount('#app');
