import '../../styles/StreamPanel.css';
import Comment from './Comment.jsx'


function StreamPanel(props) {
  const state = props.state;
  return (
    <div className='StreamPanel'>
        <video controls className='video-stream' src={state.location} type="video/mp4" autoPlay/>
        <div className="video-info">
          <h3 className="video-title">{state.title}</h3>
          <div className="stats">
            <span className="views">{state.views+1} Views</span>
            <span id="likes" className="likes" onClick={() => {document.getElementById("likes").innerHTML = state.like +1 + " Likes";}}>{state.like} Likes</span>
            <span id="dislikes" className="dislikes" onClick={() => {document.getElementById("dislikes").innerHTML = state.dislike +1 + " Dislikes";}}>{state.dislike} Dislikes</span>
            <span className='share' onClick={() => {navigator.clipboard.writeText(window.location.hostname+"/Share/"+(state.id || state._id.$oid));}}><i className="fa-sharp fa-solid fa-share-from-square"></i>Share</span>
          </div>
        </div>

        <Comment id={state.id || state._id.$oid}/>        

      </div>

  );
}


export default StreamPanel;
