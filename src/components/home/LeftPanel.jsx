import React from 'react';
import '../../styles/LeftPanel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function LeftPanel() {
  return (
    <div className="sidebar">
      <ul>
        <li title="Home">
          <a href="/">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li title="Create">
          <a href="#create">
            <i className="fa-regular fa-square-plus"></i>
          </a>
        </li>
        <li title="Short Video">
          <a href="#shorts">
            <i className="fa-solid fa-clapperboard"></i>
          </a>
        </li>
        <li title="Settings">
          <a href="#settings">
          <i className="fa-solid fa-gear"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftPanel;
