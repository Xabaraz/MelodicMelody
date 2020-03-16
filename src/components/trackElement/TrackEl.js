import TrackService from "../../js/TrackService.js";
import * as $ from "jquery";
import Track from "../../js/Models/Track.js";
import {store} from "../../js/Store";
import {mapState} from "vuex";

export default {
    name: "TrackEl",
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
            console.log(track);
            let $audio = $('audio').get(0);
            $audio.pause();
            const trackR = new Track(track.src, track.title, track.album);
            $audio.src = trackR.src;
            $audio.play();
        }
    },
    async created() {
        try {
            store.state.trackList = await TrackService.getTracks();
        } catch (e) {
            this.error = e.message
        }
    }
}
