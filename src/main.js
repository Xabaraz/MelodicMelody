import Vue from 'vue';
import App from './App.vue';
import Player from './components/player/player.vue';
import NavBar from './components/navBar/navBar.vue';
import Content from './components/content/content.vue';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial);

Vue.component('player', Player);
Vue.component('navBar', NavBar);
Vue.component('contentContainer', Content);


new Vue({
    render: h => h(App)
}).$mount('#app');
