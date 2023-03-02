import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieCredits } from 'Services/ApiMovies';
import {
  ImageCast,
  ItemCast,
  ListCast,
  TextCast,
  Wrapper,
} from './Cast.styled';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const response = await getMovieCredits(movieId);
        setActors(response);
      } catch (error) {
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);
  const actorPhoto = `https://image.tmdb.org/t/p/w200`;

  return (
    <>
      <Wrapper>
        {isLoading && <Loader />}
        {actors ? (
          <ListCast>
            {actors.map(({ profile_path, id, name, character }) => {
              return (
                <ItemCast key={id}>
                  <ImageCast
                    src={
                      profile_path
                        ? `${actorPhoto}${profile_path}`
                        : 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
                    }
                    alt={name}
                  />
                  <TextCast>{name}</TextCast>
                  <TextCast>Character: {character}</TextCast>
                </ItemCast>
              );
            })}
          </ListCast>
        ) : (
          <TextCast>We don't have any cast fot this movie.</TextCast>
        )}
      </Wrapper>
    </>
  );
}
