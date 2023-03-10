import 'bootstrap/dist/css/bootstrap.min.css';
import TopPanel from '../../components/home/TopPanel'
import LeftPanel from '../../components/home/LeftPanel'
import StreamPanel from './StreamPanel'
import RightPanel from './RightPanel'

import {useLocation} from 'react-router-dom';

function StreamingPage() {
  const location = useLocation();
  console.log(location.state)
  return (
    
    <div className="StreamingPage">
      <TopPanel />
      <div style={{ display: 'flex' }}>
      <LeftPanel />
      <StreamPanel state= {location.state}/>
      <RightPanel />
      </div>
    </div>
  );
}

export default StreamingPage;
