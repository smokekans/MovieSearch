import { useLocation } from 'react-router';
import {
  ImageMovies,
  ItemMovies,
  ListMovies,
  LinkMovies,
} from './MoviesList.styled';

export default function MoviesList({ trandingMovies }) {
  const location = useLocation();

  return (
    <>
      <ListMovies>
        {trandingMovies.map(
          ({ id, title, name, backdrop_path, poster_path }) => {
            const posterUrl = `https://image.tmdb.org/t/p/w200`;

            return (
              <ItemMovies key={id}>
                <LinkMovies to={`/movies/${id}`} state={{ from: location }}>
                  <ImageMovies
                    src={
                      poster_path
                        ? `${posterUrl}${poster_path || backdrop_path}`
                        : 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
                    }
                    alt={name}
                  />

                  {title || name}
                </LinkMovies>
              </ItemMovies>
            );
          }
        )}
      </ListMovies>
    </>
  );
}
