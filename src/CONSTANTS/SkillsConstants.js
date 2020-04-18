import { reactPNG, programmingPNG, nodeJS } from "../assets";

const frontEndDescription = `My favorite part about the 
front-end is being able to start with a blank canvas and 
watching it evolve into the result of your imagination.`;

const frontEndSkills = [
  "HTML5",
  "CSS3",
  "React",
  "JavaScript",
  "Bootstrap4",
  "Material UI",
];

const backEndDescription = `The back-end is my favorite part of the stack because it 
is usually the foundation for a web application's data. Care must be taken so that this data 
is effectively and efficiently transmitted to the front-end of the application.`;

const backEndSkills = ["Node", "Express", "PostgreSQL", "Ruby on Rails"];

const generalDescription = `The thing I enjoy about programming the most is that
you aren't limited to just knowing or learning about one thing. There's a whole mountain of
knowledge out there and I enjoy the climb up.`;

const generalSkills = [
  "Linux",
  "Ruby",
  "Python",
  "Git/Github",
  "Command Line",
  "Agile Methodology",
  "Test Driven Development",
  "Heroku Deployment",
  "Netlify Deployment",
];

export const skillsJSON = [
  {
    URL: reactPNG,
    title: "Front-End Skills",
    description: frontEndDescription,
    skills: frontEndSkills,
  },
  {
    URL: programmingPNG,
    title: "General Skills",
    description: generalDescription,
    skills: generalSkills,
  },
  {
    URL: nodeJS,
    title: "Back-End Skills",
    description: backEndDescription,
    skills: backEndSkills,
  },
];
