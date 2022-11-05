// import pfp from "../../assets/ToddGarner";
// import resume from "";

function Header() {
  return (
    <div className="container header">
      <div className="profilePic">
        <img alt="picture of Todd Garner" src={pfp}></img>
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