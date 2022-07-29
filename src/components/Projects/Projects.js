import React from "react";
import profile_pic from "../../Assets/profile_pic.jpeg"
import { project_data, portfolio_data } from "../../data/data";

function Projects() {
  const Detailed = ({item}) => {
    return(
      <div className="project-card-container">
        <div className="portfolio-card" >
          <div className="portfolio-text-container">
            <h2 onClick={() => window.open(item.link)} className="portfolio-title">{item.title}</h2>
            <text className="portfolio-description">{item.description}</text>
            {item.github_link? "github" : ""}
          </div>
          <div className="portfolio-img-container">
            <img src={item.img} className="portfolio-img" onClick={() => window.open(item.link)}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio">
      {
        portfolio_data.map((item, i) => (
          <Detailed item={portfolio_data[i]} />
        ))
      }
    </div>
  );
}

export default Projects;
