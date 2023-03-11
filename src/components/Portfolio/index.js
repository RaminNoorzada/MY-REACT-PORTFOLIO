import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: 'pexels-black',
            description: 'HTML,CSS/JavaScript',
            link: "https://github.com/RaminNoorzada",
            repo: "https://github.com/RaminNoorzada/Time-Quiz-Challenge"
        },
        {
            name: 'Work-Day-Sch',
            description: 'HTML/CSS/JavaScript',
            link: "https://github.com/RaminNoorzada",
            repo: "https://github.com/RaminNoorzada/Work-day-Scheduler"
        },
        {
            name: 'Note-Taker',
            description: 'NODE.js/Express.js',
            link: "https://github.com/RaminNoorzada",
            repo: "https://github.com/RaminNoorzada/Note-Taker"
        },
        {
            name: 'Team-Profile-Gen',
            description: 'MERN Stack',
            link: "https://github.com/RaminNoorzada",
            repo: "https://github.com/RaminNoorzada/Team-Profile-Genrator"
        },
    ]);
    return (
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      );
    };
    
    export default Portfolio;
