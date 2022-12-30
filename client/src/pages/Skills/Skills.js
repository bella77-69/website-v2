import Title from "../../components/Title/Title";
import "./skills.scss";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="container">
        <Title title="Skills" />
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">Front End</h2>
            <div className="row text-center card-row">
              <div className="col s4 m2">
                <img
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  alt="html"
                />
                <div className="container-sills">
                  <h4 className="skills-text">HTML</h4>
                </div>
              </div>
              <div className="col s4 m2">
                <img
                  src="https://img.icons8.com/color/48/000000/css3.png"
                  alt="css"
                />
                <div className="container-sills">
                  <h4 className="skills-text">CSS</h4>
                </div>
              </div>
              <div className="col s4 m2">
                <img
                  src="https://img.icons8.com/color/48/000000/sass.png"
                  alt="sass"
                />
                <div className="container-sills">
                  <h4 className="skills-text">Sass</h4>
                </div>
              </div>
              <div className="col s4 m2">
                <img
                  src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                  alt="javascript"
                />
                <div className="container-sills">
                  <h4 className="skills-text">JavaScript</h4>
                </div>
              </div>
              <div className="col s4 m2">
                <img
                  src="https://img.icons8.com/color/48/000000/react-native.png"
                  alt="react"
                />
                <div className="container-sills">
                  <h4 className="skills-text">React</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Back End</h2>
              <div className="row text-center card-row">
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/bootstrap.png"
                    alt="bootstrap"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Bootstrap</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/nodejs.png"
                    alt="node"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Node</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/express.png"
                    alt="express"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Express</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/mysql-logo.png"
                    alt="mysql"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">MySQL</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/mongodb.png"
                    alt="mongodb"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">MongoDB</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/firebase.png"
                    alt="firebase"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Firebase</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Other</h2>
              <div className="row text-center card-row">
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/git.png"
                    alt="git"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Git</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/heroku.png"
                    alt="heroku"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Heroku</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/figma--v1.png"
                    alt="figma"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Figma</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/command-line.png"
                    alt="command line"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Command Line</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/adobe-photoshop.png"
                    alt="photoshop"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">PhotoShop</h4>
                  </div>
                </div>
                <div className="col s4 m2">
                  <img
                    src="https://img.icons8.com/color/48/000000/canva.png"
                    alt="canva"
                  />
                  <div className="container-sills">
                    <h4 className="skills-text">Canva</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
