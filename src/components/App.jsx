
import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:moviesId" element={<div>елемент</div>} />
      </Routes>

      {/* <Routes></Routes> */}
    </div>
  );
};
