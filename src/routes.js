import { Home } from "./pages/home/Home.jsx";
import { MovieDetails } from "./pages/movie-details/MovieDetails.jsx";


export default [
    {
        path: "/Movie_App",
        component: Home,
    },
    {
        path: "/Movie_App/:id",
        component: MovieDetails,
    }
]