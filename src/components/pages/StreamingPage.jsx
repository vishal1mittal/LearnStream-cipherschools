import 'bootstrap/dist/css/bootstrap.min.css';
import TopPanel from '../../components/home/TopPanel'
import LeftPanel from '../../components/home/LeftPanel'

function StreamingPage() {
  return (
    <div className="StreamingPage">
      <TopPanel />
      <div style={{ display: 'flex' }}>
      <LeftPanel />
      </div>
    </div>
  );
}

export default StreamingPage;
