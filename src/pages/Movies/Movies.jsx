import React, { useState, useEffect } from 'react';
import { searchMovies } from './../../services/apiService';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return alert(
          'There are no movies with this request. Please try again.'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = value => {
    setSearchParams({ movieName: value });
  };

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {error && <p>There are no movies with this request. Please try again.</p>}
      <MovieList trendMovies={moviesList} />
      {isLoading && <Loader />}
    </main>
  );
};

export default Movies;
