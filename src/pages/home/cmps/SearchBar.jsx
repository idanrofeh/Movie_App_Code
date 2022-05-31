export function SearchBar({ search, setSearch, searchMovies }) {
  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  return (
    <section className="search-bar">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        name="search"
        placeholder="🔎Search movies.."
      />
      <button onClick={() => searchMovies(search)}>Search</button>
    </section>
  );
}
