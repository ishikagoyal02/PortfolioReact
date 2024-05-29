import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/AboutUs/about";
import Skill from "./components/Skills/skill";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ParticlesComponent from './components/Particles/particles';
import './App.css';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <ParticlesComponent className = "particles"/>
    <Router>
    <Routes>
      <Route path ="/" element={<Intro/>} />
      <Route path ="/home" element={<Intro/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/skill" element={<Skill/>}  />
      </Routes>
      <About/>
      <Skill/>
    </Router>
    
    
    </div>
  );
}

export default App;
