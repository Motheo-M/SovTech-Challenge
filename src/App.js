import './App.css';
import Menu from './Components/Nav';
import Intro from './Components/Introduction';
import AccordiansAboutMe from './Components/AccordiansAboutMe';
import AccordiansSovtech from './Components/AccordiansSovtech';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className="App">

      {/* Navigation bar function */}
      <Menu />

      {/* About Me section link section link */}
      <div id="divMe"></div>

      {/* Introduction function */}
      <Intro />

      <div class="container text-center">
        <h2 class="about-me">About me</h2>
      </div>

      {/* SovTech section link */}
      <div id="divTech"></div>

      {/* Accordian About Me function */}
    
      <AccordiansAboutMe />

      <div class="container text-center">
        <h2 class="tech">Why SovTech</h2>
      </div>

      {/* Accordian SovTech function */}
      <AccordiansSovtech />

      {/* Footer function */}
      <Footer />


    </div>
    </>
  );
}

/* Returns App function to index.js */
export default App;
