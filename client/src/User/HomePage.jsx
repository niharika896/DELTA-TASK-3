import './HomePage.css';
import Navbar from '../components/Navbar';
import Carousel from "../components/Carousel"
import Movies from '../components/MoviesPosters';
import Events from '../components/EventsPosters';


function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Movies />
      <Events/>
      </div>
  );
}

export default HomePage;
