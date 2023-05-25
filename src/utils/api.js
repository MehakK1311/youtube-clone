import axios from "axios";

const BASE_URL = "https://internship-service.onrender.com/videos";

export const fetchDataFromApi = async () => {
  const { data } = await axios.get(`${BASE_URL}`, "");
  return data;
};
