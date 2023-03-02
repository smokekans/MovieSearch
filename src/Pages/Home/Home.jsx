import { getTrending } from 'Services/ApiMovies';
import { useState, useEffect } from 'react';
import { Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [trandingMovies, setTrandingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getTrending();
        setTrandingMovies(response.results);
      } catch (error) {
        return alert('Sorry, please try again!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {trandingMovies && <MoviesList trandingMovies={trandingMovies} />}
    </>
  );
}
