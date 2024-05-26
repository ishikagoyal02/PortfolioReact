import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/AboutUs/about";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <NavBar/>
    
    <Router>
    <Routes>
      <Route path ="/" element={<Intro/>} />
      <Route path ="/home" element={<Intro/>} />
      <Route path ="/about" element={<About/>} />

      </Routes>
      <About/>
    </Router>
    
    </div>
  );
}

export default App;
