import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDdjYjVlOTczYzAzOTljZjM0MmEzMmJjNmU2MDVhOSIsInN1YiI6IjYzZjM5NjY0NGE0YmZjMDA5NjM5MGQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tm-MrlABaqqQDAShtWUr9pcK3fKi22UnFcJ9YA3eQws";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
