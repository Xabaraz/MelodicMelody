import TrackService from "../../js/TrackService";
import * as $ from "jquery";

export default {
    name: "TrackEl",
    data()  {
        return {
            trackList: [],
            error: '',
            // src: '',
            // title: '',
            // albums: ''
        }
    },
    methods:{
        chosenTrack: function (track) {
            console.log(track);
            let $audio = $('audio').get(0);
            $audio.pause();
            $audio.src = require(track.src.replace('@','./src/'));
            $audio.play();
        }
    },
    async created() {
        try {
            this.trackList = await TrackService.getTracks();
        } catch (e) {
            this.error = e.message
        }
    }
}
