import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} >
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" />
      </Route>
    </Routes>
  );
};
