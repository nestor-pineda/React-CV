import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";
import More from "./components/More/More.jsx";
import About from "./components/About/About.jsx";
import { DATA } from "./data/data";

const { hero, education, experience, languages, habilities, volunteer } = DATA;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />

      <button className="custom-btn btn-4" onClick={() => setShowEducation(true)}>
        Education
      </button>

      <button className="custom-btn btn-4" onClick={() => setShowEducation(false)}>
        Experience
      </button>

      <div>{showEducation ? <Education education={education} /> : <Experience experience={experience} />}</div>
      <More languages={languages} habilities={habilities} volunteer={volunteer} />
    </div>
  );
};

export default App;
