import axios from "axios";

export const movieService = {
    query,
    initialquery,
    getById
}

const BASE_API = "https://www.omdbapi.com/?apikey=5d29a90c&"

async function query(title) {
    try {
        const { data } = await axios.get(BASE_API + "s=" + title);
        return data.Search;
    } catch (err) {
        console.log("error in query", err);
    }
}

const initialTitles = [
    "harry potter",
    "terminator",
    "godfather",
    "dark knight",
    "lord of the rings",
    "12 angry men",
    "pulp fiction",
    "fight club"
]

async function initialquery() {
    try {
        const initialMovies = await Promise.all(initialTitles.map(async (title) => {
            const { data } = await axios.get(BASE_API + "s=" + title);
            return data.Search[0];
        }))
        return initialMovies;
    } catch (err) {
        console.log("error in query", err);
    }
}

async function getById(id) {
    try {
        const { data } = await axios.get(BASE_API + "i=" + id)
        return data;
    } catch (err) {
        console.log("error in query", err);
    }
}