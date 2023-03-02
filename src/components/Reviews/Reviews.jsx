import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieReviews } from 'Services/ApiMovies';
import {
  ItemReviews,
  ListReviews,
  TitleReviews,
  TextReviews,
  Wrapper,
} from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        setIsLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <Wrapper>
        {isLoading && <Loader />}
        {reviews ? (
          <ListReviews>
            {reviews.map(({ id, author, content }) => {
              return (
                <ItemReviews key={id}>
                  <TitleReviews>{author}</TitleReviews>
                  <TextReviews>{content}</TextReviews>
                </ItemReviews>
              );
            })}
          </ListReviews>
        ) : (
          <TextReviews>We don't have any reviews fot this movie.</TextReviews>
        )}
      </Wrapper>
    </>
  );
}
