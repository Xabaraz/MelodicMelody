import Vuex from "vuex";
import Vue from 'vue';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        trackList: [],
        trackIndex: 0
    },
    mutations: {
        setTrackList: (state,trackList) => state.trackList = trackList,
        getTrack: (state) => state.trackList[state.trackIndex],
        setTrackIndex: (state,index ) => state.trackIndex = index
    }
});
