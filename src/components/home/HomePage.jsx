import TopPanel from './TopPanel';
import LeftPanel from './LeftPanel';
import MainPanel from './MainPanel';

 
function HomePage() {
  return (
      <div className="HomePage">   
         <TopPanel />

         <div style={{ display: 'flex' }}>
          <LeftPanel />
          <MainPanel />
        </div>
      </div>
  );
}

export default HomePage;