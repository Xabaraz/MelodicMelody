import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        pauseEl: '',
        playEl: '',
        trackList: [],
        trackIndex: 0,
        title: '',
        album: '',
        $audio: '',
    },

});
