import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Certificate from './components/Certificate/Certificate'
import About from './components/About/About'
import Project from './components/Project/Project'
import Skillicon from './components/Skills/Skillicon'
import End from './components/End/End'
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skillicon/>
      <Project/>
      <Certificate/>
      <End/>
    </div>
  );
}

export default App;
