import Event from "../../assets/Event-Fan-Follow.webp";
import NoteTaker from "../../assets/Note-Taker.webp";
import Resume from "../../assets/Resume-Creator.webp";
import ToDoList from "../../assets/To-Do-List-App.webp";
import ToddPort from "../../assets/Todd-Garner-Portfolio.webp";


function Portfolio() {
    return (
        <div className="portfolio">
        <h1>My Portfolio</h1>
        <div className="container">
            <div className="card">
                <img src={Event} alt="Event Fan Follow"></img>
                <h2>
                    <strong>Event Fan Follow</strong>
                </h2>
                <div className="buttons">
                    <button className="code">
                        <a
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://github.com/AASports89/Event-Fan-Follow"
                        >
                            Code
                        </a>
                    </button>
                    <button className="site">
                        <a
                        target className="_blank"
                        rel="noopener noreferrer"
                        href="https://aasports89.github.io/Event-Fan-Follow"
                        >
                            Site
                        </a>
                    </button>
                </div>
            </div>
             <div className="card">
                <img src={NoteTaker} alt="Note Taker"></img>
                <h2>
                    <strong>Note Taker</strong>
                </h2>
                <div className="buttons">
                    <button className="code">
                        <a
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://github.com/toddrgarner/note-taker"
                        >
                            Code
                        </a>
                    </button>
                    <button className="site">
                        <a
                        target className="_blank"
                        rel="noopener noreferrer"
                        href="https://safe-beach-36562.herokuapp.com/"
                        >
                            Site
                        </a>
                    </button>
                </div>
            </div>
            <div className="card">
                <img src={Resume} alt="Resume Creator"></img>
                <h2>
                    <strong>Resume Creator</strong>
                </h2>
                <div className="buttons">
                    <button className="code">
                        <a
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://github.com/cindyung56/resume-creator"
                        >
                            Code
                        </a>
                    </button>
                    <button className="site">
                        <a
                        target className="_blank"
                        rel="noopener noreferrer"
                        href="https://fierce-ravine-29010.herokuapp.com"
                        >
                            Site
                        </a>
                    </button>
                </div>
            </div>
            <div className="card">
                <img src={ToDoList} alt="To Do Lis App"></img>
                <h2>
                    <strong>To Do List App</strong>
                </h2>
                <div className="buttons">
                    <button className="code">
                        <a
                        target="blank"
                        rel="noopener noreferrer"
                        href=""
                        >
                            Code
                        </a>
                    </button>
                    <button className="site">
                        <a
                        target className="_blank"
                        rel="noopener noreferrer"
                        href="https://serene-falls-35131.herokuapp.com/"
                        >
                            Site
                        </a>
                    </button>
                </div>
            </div>
            <div className="card">
                <img src={ToddPort} alt="Todd Garner Portfolio"></img>
                <h2>
                    <strong>Todd Garner Portfolio</strong>
                </h2>
                <div className="buttons">
                    <button className="code">
                        <a
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://github.com/toddrgarner/todd-garner-portfolio"
                        >
                            Code
                        </a>
                    </button>
                    <button className="site">
                        <a
                        target className="_blank"
                        rel="noopener noreferrer"
                        href="https://toddrgarner.github.io/todd-garner-portfolio"
                        >
                            Site
                        </a>
                    </button>
                </div>
            </div>
            

           
            

         </div>
    
            

         </div>
      
      
    )
}

export default Portfolio;