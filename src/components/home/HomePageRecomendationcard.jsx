import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function HomePageRecomendationcard(props) {
  return (    
        <Col>
          <Card>
            <Card.Img variant="bottom" src={props.thumbnail} />
            <Card.Body>
            <Link className="stretched-link" style={{color: "black", textDecoration: "none"}} to={'/StreamingPage'} state={props}><Card.Title>{props.title}</Card.Title></Link>
            {/* <a href="/StreamingPage" className="stretched-link" style={{color: "black", textDecoration: "none"}}><Card.Title>{props.title}</Card.Title></a> */}
              <Card.Text>
                <b>Duration</b>: {props.duration} <br></br>
                <b>Views</b>: {props.views} <br></br>
                <b>Likes</b>: {props.like}   <b>Dislike</b>: {props.dislike}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>    
  );
}

export default HomePageRecomendationcard;