import wine from '../../assets/projects/wine.png'
import band from '../../assets/projects/band.jpg'
import brain from  '../../assets/projects/brain.jpg'

export const BrainStnData = [
  {
    id: 1,
    name: "Che Vino",
    tags: [{ name: "Capstone Project", color: "lightgrey" }],
    github: "https://github.com/bella77-69/Che-Vino",
    desc: "My Capstone project at BrainStation.  I thought it would be great to create a website to assist users in selecting a bottle of wine.",
    mobileGif: wine,
    features: [
      "Wine Generator",
      "10,000+ bottles of wine",
      "Flexbox",
      "SASS",
      "Axios for API HTTP requests",
    ],
    techs: [
      "React.js",
      "Node.js",
      "Express",
      "MySQL",
      "SASS",
      "Axios",
      "API",
      "React-Router",
    ],
  },
  {
    id: 2,
    name: "BrainFlix",
    github: "https://github.com/bella77-69/brainflix",
    desc: "A mock SPA (single page application) site for streaming videos. Demonstrating proficiency in React, React-Router, Node, Express, API's as well as other front-end essentials. This project was completed in three weeks. Each sprint in this folder is the culmination of a weeks worth of work, sprint-three folder has the final version of the project",
    mobileGif: brain,
    features: [
      "YouTube clone",
      "Flexbox",
      "SASS",
      "Axios for API HTTP requests",
      "JavaScript",
    ],
    techs: [
      "React.js",
      "React-Router",
      "Node",
      "Express",
      "Axios",
      "Body-parser",
    ],
  },
  {
    id: 3,
    name: "BandSite",
    github: "https://github.com/bella77-69/chantelle-mckenzie-bandsite-sprint1",
    desc: "I was tasked to create a responsive, multi-page site that connects to an API over the course of three weeks. We were handed three mockups depicting what the end result should resemble if seen in a mobile, tablet, and desktop format. I was expected to recreate these mock-ups using the skills garnered through the course so far",
    mobileGif: band,
    features: [
      "HTML",
      "Used the principles of BEM",
      "Flexbox",
      "SASS",
      "Axios for API HTTP requests",
      "JavaScript",
    ],
    techs: ["HTML", "JavaScript", "Object-Oriented Design", "Axios"],
  },
];
