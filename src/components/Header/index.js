import pix from "../../assets/Todd-Garner-Pix.webp";
import resume from "../../assets/Todd-Garner-Resume.pdf";

function Header() {
  return (
    <div className="container header">
      <div className="profilePic">
        <img alt="picture of Todd Garner" src={pix}></img>
      </div>
      <div className="intro">
        <h1>
          Hi, I'm <b>Todd Garner</b>. A Fullstack Developer.
        </h1>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <button className="resume">
            <b>My Resume</b>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;