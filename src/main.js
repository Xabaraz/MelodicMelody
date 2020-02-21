import Vue from 'vue';
import App from './App.vue';
import Player from './components/player/player.vue';
import NavBar from './components/navBar/navBar.vue';
import Content from './components/content/content.vue';

Vue.component('player', Player);
Vue.component('navBar', NavBar);
Vue.component('mainPic', Content);

new Vue({
    render: h => h(App)
}).$mount('#app');
