import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { movieService } from "../../services/movie.service";

export function MovieDetails() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    loadMovie();
  }, [id]);

  const loadMovie = async () => {
    const res = await movieService.getById(id);
    console.log(res);
    setMovie(res);
  };

  if (!movie) return <span>No such movie, sorry!</span>;
  const { Actors, Director, Genre, Plot, Poster, imdbRating } = movie;
  return (
    <section className="movie-details page">
      <div className="details-cmp">
        <img alt="" src={Poster} />
        <div className="summary">
          <div className="text-center">
            <span className="bold underline">Actors:</span> {Actors}
          </div>
          <div className="text-center">
            <span className="bold underline">Rating:</span> {imdbRating} ⭐
          </div>
          <div className="text-center">
            <span className="bold underline">Director:</span> {Director}
          </div>
          <div className="text-center">
            <span className="bold underline">Genre:</span> {Genre}
          </div>
          <div className="bold text-center"> {Plot}</div>
        </div>
      </div>
      <button onClick={() => navigate("/Movie_App/")} className="nav-btn">
        ⬅ Back to movies
      </button>
    </section>
  );
}
