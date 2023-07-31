import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/homePage/HomePage';
import MoviesPage from './pages/moviesPage/MoviesPage';
import MovieDetails from './pages/movieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
