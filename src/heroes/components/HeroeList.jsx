import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';

export const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className='row row-cols-3 row-cols-md-3 g-3'>
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
