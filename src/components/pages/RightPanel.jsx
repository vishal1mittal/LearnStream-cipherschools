import React from 'react';
import '../../styles/RightPanel.css';
import contacts from '../../Videos.js'
import { Link } from "react-router-dom";

function RecomendationCreator(video){
  return(<Link to={'/StreamingPage'} state={video} style={{color: "#ffffffda", textDecoration: "none"}} key={Math.random()}>
  <div className="video">    
    <img src={video.thumbnail} alt="Video thumbnail" />
    <div className="video-details">
      <div className="title">{video.title}</div>
      <div className="stats">
        <span className="views">{video.views} views</span><br />
        <span className="duration">Duration:- {video.duration}</span><br />
        <span className="likes">{video.like} likes</span><br />
        <span className="dislikes">{video.dislike} dislikes</span>
      </div>
    </div>
  </div>
  </Link>);
}

function RightPanel({currentVideoId}) {
  const filteredContacts = contacts.filter(video => video._id.$oid !== currentVideoId);
  return (
    <div className="right-panel">
      {filteredContacts.map(RecomendationCreator)}
    </div>
  );
}

export default RightPanel;
