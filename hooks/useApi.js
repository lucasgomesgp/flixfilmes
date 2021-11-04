import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/movies"
});

async function getMovies() {
    try {
        return await api.get();
    } catch (error) {
        console.log(error);
    }
}

async function getMovieId(id) {
    try {
        return await api.get(`/${id}`);
    } catch (error) {
        console.log(error);
    }
}

async function getNumberTotalMovies() {
    try {
        const { data } = await getMovies();
        return data.length;
    }catch(error){
        console.log(error);
    }
}
export { getMovies, getMovieId, getNumberTotalMovies };