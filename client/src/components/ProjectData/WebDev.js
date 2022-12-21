import lash from "../../assets/projects/lash.jpg";
import lash2 from "../../assets/projects/lash2.jpg";
import movie from "../../assets/projects/movie2.jpg";
import movie2 from "../../assets/projects/movie.jpg";
import coffee from "../../assets/projects/coffee.jpg";
import coffee2 from "../../assets/projects/coffee2.png";


export const PrjData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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