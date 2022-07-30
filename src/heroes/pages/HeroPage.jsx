import { useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to='/marvel' />;
  }

  return (
    <div>
      <h1>{hero.superhero}</h1>
    </div>
  );
};
