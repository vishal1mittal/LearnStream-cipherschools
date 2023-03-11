import 'bootstrap/dist/css/bootstrap.min.css';
import TopPanel from '../../components/home/TopPanel'
import LeftPanel from '../../components/home/LeftPanel'
import StreamPanel from './StreamPanel'
import RightPanel from './RightPanel'

import {useLocation} from 'react-router-dom';

function StreamingPage() {
  const location = useLocation();
  return (
    
    <div className="StreamingPage">
      <TopPanel />
      <div className='panel-over' style={{ display: 'flex', height: "288.3em" }}>
        <LeftPanel />
        <StreamPanel state= {location.state}/>
        <RightPanel currentVideoId = {location.state.id || location.state._id.$oid} />
      </div>
    </div>
  );
}

export default StreamingPage;
