import './HomePage.css';
import Navbar from '../components/Navbar';
import Carousel from "../components/Carousel"
import Movies from '../components/MoviesPosters';
import Events from '../components/EventsPosters';
import Chatbot from '../components/Chatbot';


function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Movies />
      <Events/>
      <Chatbot />
      
      </div>
  );
}

export default HomePage;
