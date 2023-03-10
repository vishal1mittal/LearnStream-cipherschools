import React from 'react';
import '../../styles/RightPanel.css';

function RightPanel() {
  return (
    <div className="right-panel">
      <div className="video">
        <img src="https://raw.githubusercontent.com/vishal1mittal/LearnStream-cipherschools/main/Thumbnail/1.png" alt="Video thumbnail" />
        <div className="video-details">
          <div className="title">Video Title</div>
          <div className="stats">
            <span className="views">10,000 views</span><br />
            <span className="duration">Duration:- 3:45</span><br />
            <span className="likes">100 likes</span><br />
            <span className="dislikes">10 dislikes</span>
          </div>
        </div>
      </div>

      <div className="video">
        <img src="https://raw.githubusercontent.com/vishal1mittal/LearnStream-cipherschools/main/Thumbnail/2.png" alt="Video thumbnail" />
        <div className="video-details">
          <div className="title">Video Title</div>
          <div className="stats">
            <span className="views">10,000 views</span><br />
            <span className="duration">Duration:- 3:45</span><br />
            <span className="likes">100 likes</span><br />
            <span className="dislikes">10 dislikes</span>
          </div>
        </div>
      </div>

      <div className="video">
        <img src="https://raw.githubusercontent.com/vishal1mittal/LearnStream-cipherschools/main/Thumbnail/3.png" alt="Video thumbnail" />
        <div className="video-details">
          <div className="title">Video Title</div>
          <div className="stats">
            <span className="views">10,000 views</span><br />
            <span className="duration">Duration:- 3:45</span><br />
            <span className="likes">100 likes</span><br />
            <span className="dislikes">10 dislikes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
