import '../../styles/StreamPanel.css';

function StreamPanel(props) {
  const state = props.state;
  return (
    <div className='StreamPanel'>
        <video controls className='video-stream'>
        <source src={state.location} type="video/mp4" />
        </video>
        <div className="video-info">
          <h3 className="video-title">{state.title}</h3>
          <div className="stats">
            <span className="views">{state.views} Views</span>
            <span className="likes">{state.likes} Likes</span>
            <span className="dislikes">{state.dislikes} Dislikes</span>
          </div>
        </div>
    </div>
  );
}


export default StreamPanel;
