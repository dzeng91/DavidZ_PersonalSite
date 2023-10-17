import './App.css';
import Projects from './Components/Projects';
// import Experience from './Components/Experience';
// import Hobbies from './Components/Hobbies';
// import Contact from './Components/Contact';
// import Technologies from './Components/Technologies';
import Bio from './Components/Bio';
import Footer from './Components/Footer';
import nyylogo from './logos/nyylogo.png';

function App() {
  return (
    <div className="App">
      <div className = "nav-bar">
        <header className = "header-container">
          <img src={nyylogo} alt="nyylogo" className="nyylogo" />
          <a className = "email" href="dzeng91@gmail.com">Email: dzeng91@gmail.com </a>
          <a className = "github" href="https://github.com/dzeng91"> Github: github.com/dzeng91 </a>
        </header>
      </div>
      <div className = "intro-container">
        <div className = "bio-pic">
        <Bio className = "bio-container"/>
        {/* <div className = "technologies-main">
            <Technologies className = "technologies-container"/>
          </div> */}
        </div>
        </div>
        <div className = "my-container">
          {/* <div className = "profile-pic"/> */}
          {/* <div className = "bodyContact-container">
          </div> */}
        </div>
      <div className = "info-container">
        <div className = "body-container">
        </div>
        <div className = "stuff-container">
          <Projects className = "projects-container"/>
            {/* <Experience className = "experience-container"/>
            <Hobbies className = "hobbies-container"/> */}
        </div>
        </div>
      <Footer className = "footer-container"/>
    </div>
  );
}

export default App;
