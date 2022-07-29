import React from "react";
import profile_pic from "../../Assets/profile_pic.jpeg"
import { magic_imgs, magic_profile } from "../../data/data";

function Magic() {
  const Card = ({ item }) => {
    return(
      <div className="magic-card"> 
        <img src={item.img} className="magic-img"/>
      </div>
    )
  }

  return (
    <section className="home-header" >
      <h1 className="heading-name">Me as  
        <strong className="main-name"> Magician</strong>
      </h1> 
      <div className="home-intro">
        <div className="home-ctn1">
          <p className="home-about-body">
            ◉ 100k+ YouTube views<br/><br/>
            ◉ 2019 Busan International Magic Festival 4th <br/> <br/>
            ◉ 2019 Hsin Tung Yang Magic Festival 3rd<br/><br/>
            ◉ 2018 Busan International Magic Festival Special award <br/><br/>
            ◉ 2018 PJ Special award <br/><br/>
          </p>
          <img
            src={magic_profile}
            alt="home pic"
            className="img-fluid"
          />
        </div>
      </div>
      <div style={{paddingTop:50}} />
      <div className="iframe">
        <iframe
          className="iframe"
          width="560"
          // // max-wi
          height="315" 
          src="https://www.youtube.com/embed/R9oZRiKPQmA" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        >
        </iframe>
      </div>
      {/* <div style={{paddingTop:50}} /> */}


      <div className="project-container">
        {
          magic_imgs.map((item, i) => (
            <Card item={magic_imgs[i]} />
          ))
        }
      </div>
    </section>
  );
}

export default Magic;
