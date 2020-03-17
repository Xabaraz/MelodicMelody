import Vue from 'vue';
import App from './App.vue';
import Player from './components/player/player.vue';
import NavBar from './components/navBar/navBar.vue';
import Content from './components/content/content.vue';
import trackList from "./components/trackList/trackList.vue";


Vue.component('player', Player);
Vue.component('navBar', NavBar);
Vue.component('mainPic', Content);
Vue.component('trackList', trackList);
new Vue({
    render: h => h(App)
}).$mount('#app');
