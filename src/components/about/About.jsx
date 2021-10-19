import React, { useContext } from "react";
import "./about.css";
import Aword from "../../img/award.png";
import { ThemeContext } from "../../Context";
const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  
  return (
    <div className="about">
      <div className="about-left">
        <div className="aboutCard bg"> </div>
        <div className="aboutCard">
          <img
            src="https://scontent.fdac135-1.fna.fbcdn.net/v/t1.6435-9/49641321_896421824082367_8108634943287984128_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=6MZSCVcqQQcAX_754o2&_nc_ht=scontent.fdac135-1.fna&oh=ad371491ff257c2385604c1935747fb4&oe=6192AE3B"
            alt=""
            className="aboutimg"
          />
        </div>
      </div>

      <div className="about-right">
        <h2 className="about_me">About me</h2>

        <p className="pra">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora amet
          tempore, aliquid officiis accusamus exercitationem natus et
          recusandae? Exercitationem maxime quisquam debitis repudiandae dolorum
          delectus nemo assumenda pariatur voluptates velit?
        </p>

        <p className="pra">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          sed, fugit aperiam necessitatibus ad ducimus voluptate blanditiis
          suscipit velit, quod labore voluptatum atque nobis! Nihil rem eius
          odit sit eum.
        </p>

        <div className="about_award">
          <img src={Aword} alt="" className="about_aword_img" />
          <div className="about_award_text">
            <h4 className="about_award_title">International Designer</h4>
            <p className="about_aword_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
