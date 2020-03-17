import TrackService from "../../js/TrackService.js";
import * as Util from "../../js/utils.js"
import {store} from "../../js/Store";
import {mapState} from "vuex";

let realStore = store.state;

export default {
    data() {
        return {
            error: ''
        }
    },
    store,
    computed: mapState({
        trackList: state => state.trackList
    }),
    methods: {
        chosenTrack: function (track) {
            realStore.album = track.album;
            realStore.title = track.title;
            realStore.$audio.src = track.src;
            Util.pausePlay(realStore);
        }
    },
    async created() {
        try {
            realStore.trackList = await TrackService.getTracks();
        } catch (e) {
            this.error = e.message
        }
    }
}
