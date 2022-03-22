import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { down, man } from "../../assets";
import PdfResume from "../../assets/Resume.pdf";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End ", "Back-End", "UI/UX"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro-name">
        <h2>Hi There, I'm</h2>
        <h1>Aldo Apdilla Faurian</h1>
        <h3>
          Full-Stack Developer <span ref={textRef}></span>
        </h3>
      </div>
      <div className="intro-button">
        <h3>Get My Resume</h3>
        <a href={PdfResume} download>
          <button> Download</button>
        </a>
      </div>
      <a className="a-portoflio" href="#portfolio">
        <img src={down} alt="" />
      </a>
    </div>
  );
};

export default Intro;
