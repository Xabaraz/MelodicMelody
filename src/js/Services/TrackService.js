import axios from 'axios';

const url = 'http://localhost:8081/api/tracks';

class TrackService {
    static getTracks() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(track => ({
                        ...track
                    }))
                )
            } catch (e) {
                reject(e)
            }
        });
    }

    static setTrack(src, title, album) {
        return axios.post(url, {
            src,
            title,
            album,
        });
    }

    static deleteTrack(id) {
        return axios.delete(`${url}/${id}`);
    }
}

export default TrackService;
