import { useNavigate } from "react-router-dom";

export function MoviePreview({ movie }) {
  let navigate = useNavigate();

  const { Poster, Title, Year, imdbID } = movie;
  return (
    <section
      onClick={() => navigate(`/Movie_App/${imdbID}`)}
      className="movie-preview hover "
    >
      <img alt="" src={Poster} />
      <div className="summary">
        <div className="movie-title">{Title}</div>
        <div className="movie-year">{Year}</div>
      </div>
    </section>
  );
}
