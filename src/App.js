import "./App.css";
import Mockman from "mockman-js";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { LandingPage } from "./routes/LandingPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
