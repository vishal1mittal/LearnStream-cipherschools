import { Routes, Route } from "react-router-dom";
import StreamingPage from "./components/pages/StreamingPage";
import { BrowserRouter } from "react-router-dom";
import HomePage from './components/home/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/StreamingPage" element={<StreamingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>    

      </div>
    </BrowserRouter>
  );
}

export default App;
