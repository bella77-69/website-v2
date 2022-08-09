import React from "react";
import aboutImg from "../../assets/images/me.jpg";
import Title from "../../components/Title/Title";
import "./about.scss";

function About() {
  return (
    // <section className="aboutus-section">
      <div className="container">
        <Title title="About Me" />
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 about-intro">
            <div className="about-inner">
              <div className="about-ct">
                <img
                  src={aboutImg}
                  alt="avatar"
                  className="rounded img img-fluid shadow-2-strong"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-6 about-intro-text">
            <p className="aboutus-text">
              Building state-of-the-art, easy to use, user-friendly websites and
              applications is truly a passion of mine. This industry appeals to
              me because it's some of the most rewarding and challenging work
              I've ever done! I love bringing concepts to life through code. I
              am seeking projects as a web developer to maximize the value I can
              bring to end-users in today’s digital world. I look forward to
              being continuously challenged and learning new things every day.
            </p>
            <p className="aboutus-text">
              Apart from coding all day and night, I enjoy reading, watching
              Hockey, movies, and I also enjoy plants. I am currently running
              out of window ledges!
            </p>
          </div>
        </div>
      </div>
    // </section>
    // <div class="container">
    //   <Title title="About Me" />

    //   <div class="row">
    //     <div className="col-md-3 col-sm-6 col-xs-12">
    //       <img
    //         src={aboutImg}
    //         alt="avatar"
    //         className="rounded img-fluid shadow-2-strong"
    //         class="w-100"
    //       />
    //     </div>

    //     <div class="col-md-6">
    //       <div class="row align-items-center h-100">
    //         <div class="col">
    //           {/* <h1 class="display-3">Vertically Centered Text</h1> */}
    //           <p class="lead aboutus-text">
    //             {" "}
    //             Building state-of-the-art, easy to use, user-friendly websites
    //             and applications is truly a passion of mine. This industry
    //             appeals to me because it's some of the most rewarding and
    //             challenging work I've ever done! I love bringing concepts to
    //             life through code. I am seeking projects as a web developer to
    //             maximize the value I can bring to end-users in today’s digital
    //             world. I look forward to being continuously challenged and
    //             learning new things every day.
    //           </p>
    //           <p className="aboutus-text">
    //             Apart from coding all day and night, I enjoy reading, watching
    //             Hockey, movies, and I also enjoy plants. I am currently running
    //             out of window ledges!
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="aboutus-section">
    //   <div className="container">
    //     <div className="row h-100 align-items-center justify-content-center">
    //       <div className="col-lg-12">
    //       <div className="col-lg-8">
    //         <div className="aboutus">
    //             <Title title='About Me' />
    //           <p className="aboutus-text">
    //             Building state-of-the-art, easy to use, user-friendly websites
    //             and applications is truly a passion of mine. This industry
    //             appeals to me because it's some of the most rewarding and
    //             challenging work I've ever done! I love bringing concepts to
    //             life through code. I am seeking projects as a web developer to
    //             maximize the value I can bring to end-users in today’s digital
    //             world. I look forward to being continuously challenged and
    //             learning new things every day.
    //           </p>
    //           <p className="aboutus-text">
    //             Apart from coding all day and night, I enjoy reading, watching
    //             Hockey, movies, and I also enjoy plants. I am currently running
    //             out of window ledges!
    //           </p>

    //         </div>

    //       <div className="col-md-3 col-sm-6 col-xs-12">
    //         <div className="aboutus-banner">
    //           <img
    //            src={aboutImg}
    //             alt="avatar"
    //             className="rounded img-fluid shadow-2-strong"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    // </div>
  );
}

export default About;
