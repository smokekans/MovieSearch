import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'Services/ApiMovies';
import { BackLink } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const response = await getMovieDetails(movieId);
        setMovieData(response);
      } catch (error) {
        return alert('Sorry, try again!');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLink}>Go back</BackLink>
      {isLoading && <Loader />}
      {movieData && <MovieInfo movieData={movieData} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
