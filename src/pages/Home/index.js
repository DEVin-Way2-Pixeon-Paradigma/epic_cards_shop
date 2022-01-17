import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import { CategoryItem } from './styles';

const TYPES = [
  "Aqua",
  "Beast-Warrior",
  "Cyberse",
  "Dinosaur",
  "Dragon",
  "Fairy",
  "Fish",
  "Insect",
  "Machine",
  "Plant",
  "Rock",
  "Warrior",
  "Spellcaster"
];

function Home() {
  return (
    <Container>
      {
      TYPES.map((type) =>
        <CategoryItem key={type}>
          <Link to={`/cards/${type}`}>{type}</Link>
        </CategoryItem>
      )
      }
    </Container>
  );
}

export default Home;