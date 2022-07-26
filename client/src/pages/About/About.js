import React from "react";
import aboutImg from "../../assets/images/me.jpg";
import Title from "../../components/Title/Title";
import "./about.scss";

function About() {
  return (
    <div className="aboutus-section">
      <div className="container">
        <div className="row h-100 py-5 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="aboutus">
                <Title title='About Me' />
              <p className="aboutus-text">
                Building state-of-the-art, easy to use, user-friendly websites
                and applications is truly a passion of mine. This industry
                appeals to me because it's some of the most rewarding and
                challenging work I've ever done! I love bringing concepts to
                life through code. I am seeking projects as a web developer to
                maximize the value I can bring to end-users in today’s digital
                world. I look forward to being continuously challenged and
                learning new things every day.
              </p>
              <p className="aboutus-text">
                Apart from coding all day and night, I enjoy reading, watching
                Hockey, movies, and I also enjoy plants. I am currently running
                out of window ledges!
              </p>
             
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="aboutus-banner">
              <img
               src={aboutImg}
                alt="avatar"
                className="rounded img-fluid shadow-2-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
