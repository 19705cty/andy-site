import React from "react";
import profile_pic from "../../Assets/profile_pic.jpeg"
import { project_data } from "../../data/data";

function Home() {

  const Card = ({ item }) => {
    return(
      <div className="project-card" onClick={ () => window.open(item.link)}> 
        <div >
          <text className="card-title">{item.title}</text>
        </div>
        <img src={item.img} className="img"/>
        <div >
          <text className="card-title">{item.description}</text>
        </div>
      </div>
    )
  }

  const TextLink = ({link, text}) => {
    return(
      <text> 
        &nbsp; 
        <text className="link-text" onClick={() => window.open(link)}>{text}</text>    
      </text>
    )
  }

  return (
    <section className="home-header" >
      <h1 className="heading-name">Hi. I'm 
        <strong className="main-name"> Te-Yen Chou</strong>
      </h1> 
      <h3>
        <strong>Software engineer</strong>
      </h3>
      <h5>
        <text className="main-white">MBA x Bitotech x Startup</text>
      </h5>
      <div className="home-intro">
        <div className="home-ctn1">
          <p className="home-about-body">
              Studying Master of Business Administration (MBA) @ 
              <TextLink text={"Boston College,"} link={"https://www.bc.edu/"} />
            <br /> 
            <br />
              Studied in Agricultural Chemistry @ 
              <TextLink text={"National Taiwan University."} link={"https://www.ntu.edu.tw/english/"} />
            <br /> 
            <br />
              Built / cofounded 
              <TextLink text={"Linking Book"} link={"https://linkingbook.io"} />
              {/* ,  */}
              {/* <TextLink text={"RemoteNC"} link={"https://www.remotenc.com/"} /> */}
              and 
              <TextLink text={"Quoger"} link={"https://www.linkedin.com/company/quoger/"} />
              ,
            <br /> 
            <br />
              and interned @  
              <TextLink text={"CytoAurora Biotechnologies"} link={"https://www.cytoaurora.com/home"} />
            <br /> 
            <br />
              Now do more software engineering(fun!!!) 
            <br /> 
            <br />
              I also do magic and play basketball!
            <br /> 
          </p>
          <img
            src={profile_pic}
            alt="home pic"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="project-container">
        {
          project_data.map((item, i) => (
            <Card item={project_data[i]} />
          ))
        }
      </div>
    </section>
  );
}

export default Home;
