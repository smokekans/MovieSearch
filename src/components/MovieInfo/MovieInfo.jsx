import { Link, useLocation } from 'react-router-dom';
import {
  AdditionalWrapper,
  Image,
  InfoWrapper,
  ListMovies,
  ItemMovies,
  LinkMovies,
  MovieWrapper,
  Subtitle,
  Text,
  Title,
} from './MovieInfo.styled';

export default function MovieInfo({ movieData }) {
  const { poster_path, original_title, vote_average, overview, genres } =
    movieData;
  const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
  const genresList = genres.map(genre => genre.name).join(', ');
  const location = useLocation();

  return (
    <>
      <MovieWrapper>
        <Image src={posterUrl} alt={original_title} />
        <InfoWrapper>
          <Title>{original_title}</Title>
          <Text>User Score: {Math.round(vote_average * 10)}%</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres</Subtitle>
          <Text>{genresList}</Text>
        </InfoWrapper>
        <AdditionalWrapper>
          <Title>Additional information</Title>
          <ListMovies>
            <ItemMovies>
              <LinkMovies to="cast" state={location.state}>
                Cast
              </LinkMovies>
            </ItemMovies>
            <ItemMovies>
              <LinkMovies to="reviews" state={location.state}>
                Reviews
              </LinkMovies>
            </ItemMovies>
          </ListMovies>
        </AdditionalWrapper>
      </MovieWrapper>
    </>
  );
}
