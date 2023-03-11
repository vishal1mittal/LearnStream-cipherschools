import { Routes, Route } from "react-router-dom";
import StreamingPage from "./components/pages/StreamingPage.jsx";
import ShareStream from "./components/pages/ShareStream.jsx";
import { BrowserRouter } from "react-router-dom";
import HomePage from './components/home/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/StreamingPage" element={<StreamingPage />} />
          <Route path="/Share/:vidId" element={<ShareStream />} />
          <Route path="/" element={<HomePage />} />
        </Routes>    

      </div>
    </BrowserRouter>
  );
}

export default App;
