import Vue from 'vue';
import App from './App.vue';
import Player from './components/player';
import NavBar from './components/navBar';
import Content from './components/content';

Vue.component('player', Player);
Vue.component('navBar', NavBar);
Vue.component('mainPic', Content);

new Vue({
    render: h => h(App)
}).$mount('#app');
