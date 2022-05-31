import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import { AppHeader } from "./pages/shared/AppHeader.jsx";

import routes from "./routes.js";

export function RootCmp() {
  return (
    <section className="root-cmp">
      <Router>
        <AppHeader />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              element={<route.component />}
              path={route.path}
            />
          ))}
        </Routes>
      </Router>
    </section>
  );
}
