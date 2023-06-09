import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

// import { lazy } from 'react';
// import Home from 'pages/Home/home';
// import { NavLink, Route, Routes } from 'react-router-dom';

// export const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/movies">Movies</NavLink>
//         </li>
//       </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<div>Movies</div>} />
//         <Route path="/movies/:moviesId" element={<div>елемент</div>} />
//       </Routes>

//       {/* <Routes></Routes> */}
//     </div>
//   );
// };
