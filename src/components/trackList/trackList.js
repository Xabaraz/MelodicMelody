import Track from "../trackElement/TrackEl";
import Vue from 'vue';
import TrackService from "../../js/TrackService";

Vue.component('trackEl',Track);
export default {
    name: "trackList",
    data: () => {
        return {
            trackList: [],
            error: '',
        }
    },
    async created() {
        try {
            this.trackList = await TrackService.getTracks();
        } catch (e) {
            this.error = e.message
        }
    },
}
