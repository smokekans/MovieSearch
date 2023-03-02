import { Button, Form, Input } from './Movies.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'Services/ApiMovies';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      return;
    }

    async function feachOnQuery() {
      try {
        setIsLoading(true);
        const response = await searchMovies(searchQuery);
        setMoviesData(response.results);
      } catch (error) {
        return alert(`Sorry, please try again!`);
      } finally {
        setIsLoading(false);
      }
    }
    feachOnQuery();
  }, [searchQuery]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={query} onChange={handleChange} />
        <Button type="submit">Search movie</Button>
      </Form>
      {isLoading && <Loader />}
      {moviesData && <MoviesList trandingMovies={moviesData} />}
    </>
  );
}
