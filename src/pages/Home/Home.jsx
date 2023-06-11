import { useState, useEffect } from 'react';
import { Title } from './Home.styled';
import { getTrending } from '../../services/apiService';
import { Loader } from 'components/Loader/Loader';
import MovieList from '../MovieList/MovieList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <Title>Top Movies for today</Title>
      <MovieList trendMovies={trendMovies} />

      {isLoading && <Loader />}
    </main>
  );
};
export default Home;
