import { useEffect, useState } from "react";

import { movieService } from "../../services/movie.service";
import { MoviePreview } from "./cmps/MoviePreview.jsx";
import { SearchBar } from "./cmps/SearchBar.jsx";

export function Home() {
  const [reccos, setReccos] = useState([]);

  const [movies, setMovies] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadReccos();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const loadReccos = async () => {
    const res = await movieService.initialquery();
    setReccos(res);
  };

  const searchMovies = async () => {
    const res = await movieService.query(search);
    setMovies(res);
  };

  return (
    <section className="home page">
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchMovies={searchMovies}
      />
      {movies && (
        <div className="movies">
          <span>Search results:</span>
          <div className="movie-list">
            {movies.map((movie) => (
              <MoviePreview key={movie.title} movie={movie} />
            ))}
          </div>
        </div>
      )}
      {reccos && (
        <div className="reccos">
          <span>Our reccomendations:</span>
          <div className="recco-list">
            {reccos.map((movie) => (
              <MoviePreview key={movie.Title} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
