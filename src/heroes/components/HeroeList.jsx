import { getHeroesByPublisher } from '../helpers';

export const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((heroe) => (
        <li key={heroe.id}>{heroe.superhero}</li>
      ))}
    </ul>
  );
};
