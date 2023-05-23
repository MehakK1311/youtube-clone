// import axios from "axios";

// export const fetchVideos = ()=> {
//     axios
//     .get(URL)
//     .then(function (response) {
//       console.log(response.data.data.posts);
//     })
//     .catch((e) => console.log(e));
// }

import axios from "axios";

const BASE_URL = "https://internship-service.onrender.com/videos";

export const fetchDataFromApi = async () => {
    const { data } = await axios.get(`${BASE_URL}`, "");
    return data;
};