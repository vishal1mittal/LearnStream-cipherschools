import comments from './comments.js'
import '../../styles/Comment.css';

function ReplyCreator(props){
  return(
    <li key={Math.random()}>
      <h4>{props.replyerName}</h4>
      <p>{props.text}</p>
    </li>
  );
}

function CommentCreator(props){
  return(
    <div className="comment" key={Math.random()}>
      <h3>{props.commentorName}</h3>
      <p>{props.text}</p>
      <ul className="replies">
        {props.replies.map(ReplyCreator)}
        
      </ul>
    </div>
  );
}

  
function Comment(props) {
  var thisVideo = comments.filter(obj => obj.video ===  props.id);
  return (
    <div className="comments">
      <h2>Comments:</h2>
      {thisVideo.map(CommentCreator)}      
    </div>
  );
}

export default Comment;
