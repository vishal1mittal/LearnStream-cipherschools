import React from 'react';
import '../../styles/LeftPanel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function LeftPanel() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <i className="fas fa-home" title="Home"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-regular fa-square-plus" title="Create"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-clapperboard" title="Short Video"></i>
          </a>
        </li>
        <li>
          <a href="#">
          <i class="fa-solid fa-gear" title="Settings"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftPanel;
