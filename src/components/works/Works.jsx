import { useState } from "react";
import "./works.scss";
import React from 'react'
import { arrow , mobile, writing, globe, react_icon, figma_icon, mysql_icon, nodejs_icon, oracle_icon, postgresql_icon} from "../../assets";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: `${globe}`,
      title: "Web developer",
      desc:
        "Develop the web using JavaScript frameworks such as React js, Node js, Express js, and several libraries such as Material ui, Reactstrap and Reactbootsrap, and use Mysql, Oracle and Postgresql for the database.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: `${mobile}`,
      title: "Mobile Developer",
      desc:
        "Develop Mobile Application using React Native.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: `${writing}`,
      title: "UI UX",
      desc:
        "Design Web Application, Mobile Application with Figma.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.title}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                 
                </div>
              </div>
              <div className="right">
               
                <img
                 src={react_icon}
                 />
                  <img
                 src={figma_icon}
                 />
                  <img
                 src={mysql_icon}
                 />
                  <img
                 src={nodejs_icon}
                 />
                  <img
                 src={oracle_icon}
                 />
                  <img
                 src={postgresql_icon}
                 />
                 
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Works;
