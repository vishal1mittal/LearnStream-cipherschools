import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/HomePage.css';
import HomePageRecomendationcard from './HomePageRecomendationcard';
import contacts from '../../Videos.js'
import Row from 'react-bootstrap/Row';

function CreateRecomendationCard(video) {
  return (
    <HomePageRecomendationcard 
    key={video._id.$oid}
    thumbnail={video.thumbnail} 
    location={video.location} 
    title={video.title} 
    duration={video.duration} 
    views={video.views} 
    likes={video.like} 
    dislikes={video.dislike}/>
  );
}


function HomePage() {
  return (
    <div className="HomePage">
      <Row xs={1} sm={3} md={3} lg={5} className="g-4">
        {contacts.map(CreateRecomendationCard)}
      </Row>

    </div>
  );
}

export default HomePage;
