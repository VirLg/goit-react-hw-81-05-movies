import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/moviesPage/MoviesPage';
// import MovieDetails from '../pages/movieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import NotFound from 'pages/notFound/NotFound';
import Layout from './layout/Layout';
const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/moviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
