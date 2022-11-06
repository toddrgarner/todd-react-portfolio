import Event from "../../assets/Event-Fan-Follow.webp";
import PP from "PP-Website.webp";
import Resume from "Resume-Creator.webp";
import ToDoList from "To-Do-List-App.webp";
import ToddPort from "Todd-Portfolio.webp";

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
                        href="https://aasports89.github.io/Event-Fan-Follow"
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