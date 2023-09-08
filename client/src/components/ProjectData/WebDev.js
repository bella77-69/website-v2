import home from '../../assets/projects/homePage.png';
import home2 from '../../assets/projects/homePageMobile.png';
import lash from "../../assets/projects/lash.jpg";
import lash2 from "../../assets/projects/lash1.jpg";
import movie from "../../assets/projects/movie.jpg";
import movie2 from "../../assets/projects/movie1.jpg";
import coffee from "../../assets/projects/coffee.jpg";
import coffee2 from "../../assets/projects/coffee1.png";


export const PrjData = [
  {
    id: 1,
    name: "Acknowledging Our Lands",
    github: "https://github.com/Bella77-69/land-acknowledgement",
    website: "",
    desc: "Acknowledging Our Lands is a web application that helps users learn about and perform land acknowledgments. It provides a simple and educational platform for acknowledging the Indigenous territories and traditional lands on which we live and work.",
    desktopGif: home,
    mobileGif: home2,
    features: ["Land Acknowledgement - Easily generate land acknowledgments for various locations.",
    "Learning - Learn about Indigenous territories and the importance of land acknowledgments.",],
    techs: ["React","React-Router","Axios","Bootstrap",],
  },
  {
    id: 2,
    name: "Bella Lashes Inc",
    github: "https://github.com/Bella77-69/lash-app",
    website: "",
    desc: "Full Stack MERN CRUD Website for a business. Users can book appointments for lash services, checkout pricing and get full informaion of the different services provided.",
    desktopGif: lash,
    mobileGif: lash2,
    features: ["Appointment Scheduling","Customer base management","Saving user's contact form","Give feedback of services","Price Grid",],
    techs: ["React","Mongo","Express","Node","Material-ui","React-Router","React-Redux","Axios","Bootstrap","Styled-Components","JsonWebToken","BCryptjs","Mongoose",],
  },
  {
    id: 3,
    name: "Movie App",
    github: "https://github.com/bella77-69/movie-app2",
    website: "",
    desc: "A Netflix Clone App with TMDB movies and series. User can view the Trailer of movie by clicking on the image.",
    desktopGif: movie,
    mobileGif: movie2,
    features: ["NetFlix Clone", "View Trailers"],
    techs: ["React", "React-YouTube", "React-Router", "Sass", "Axios"],
  },
  {
    id: 4,
    name: "Steamy Cup",
    github: "https://github.com/bella77-69/comp-1850-final-project",
    website: "",
    desc: "BCIT final project. Designed and implemented a content rich, well styled, semantic, and responsive multi page website",
    desktopGif: coffee,
    mobileGif: coffee2,
    features: ["Ecommerce", "Small businness"],
    techs: ["HTML", "CSS", "JavaScript"],
  },
];