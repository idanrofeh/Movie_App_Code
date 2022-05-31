import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <section className="app-header">
      <NavLink to="/Movie_App" className="logo">
        <span className="logo-txt">MyMovies</span>
        <img
          alt=""
          src="https://www.pngmart.com/files/3/Popcorn-Transparent-PNG.png"
        />
      </NavLink>
    </section>
  );
}
