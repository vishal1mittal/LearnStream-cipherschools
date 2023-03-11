import { useParams } from 'react-router-dom';
import contacts from '../../Videos.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopPanel from '../../components/home/TopPanel'
import LeftPanel from '../../components/home/LeftPanel'
import StreamPanel from './StreamPanel'
import RightPanel from './RightPanel'


function ShareStream(){
    const { vidId } = useParams();
    var thisVideo = contacts.filter(obj => obj._id.$oid === vidId)[0];
    return(<div className="StreamingPage">
    <TopPanel />
    <div className='panel-over' style={{ display: 'flex', height: "288.3em" }}>
      <LeftPanel />
      <StreamPanel state= {thisVideo}/>
      <RightPanel currentVideoId = {thisVideo._id.$oid} />
    </div>
  </div>);
}

export default ShareStream;