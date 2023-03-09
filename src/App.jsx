import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import TopPanel from './components/home/TopPanel'
import LeftPanel from './components/home/LeftPanel'

function App() {
  return (
    <div className="App">
      <TopPanel />
      <LeftPanel />
    </div>
  );
}

export default App;
