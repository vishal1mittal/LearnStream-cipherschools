import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import TopPanel from './components/home/TopPanel'
import LeftPanel from './components/home/LeftPanel'
import HomePage from './components/home/HomePage'

function App() {
  return (
    <div className="App">
      <TopPanel />
      <div style={{ display: 'flex' }}>
      <LeftPanel />
      <HomePage />
      </div>
    </div>
  );
}

export default App;
