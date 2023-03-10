import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function HomePageRecomendationcard(props) {
  return (    
        <Col>
          <Card>
            <Card.Img variant="bottom" src={props.thumbnail} />
            <Card.Body>
            <a href={props.location} className="stretched-link" style={{color: "black", textDecoration: "none"}}><Card.Title>{props.title}</Card.Title></a>
              <Card.Text>
                <b>Duration</b>: {props.duration} <br></br>
                <b>Views</b>: {props.views} <br></br>
                <b>Likes</b>: {props.likes}   <b>Dislike</b>: {props.dislikes}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>    
  );
}

export default HomePageRecomendationcard;