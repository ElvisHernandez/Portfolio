import { airAware, softSearch } from "../assets";

// SoftSearch data
const ssImage = softSearch;
const ssDescription = `Soft Search is a career search web 
application specifically created for Software Development.`;
const ssProjectLink = "https://s0ft-search.herokuapp.com/";
const ssCodeLink = "https://github.com/ElvisHernandez/SoftSearch";
const ssTechnologies = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Ruby on Rails",
  "PostgreSQL",
  "Bootstrap",
];

// AirAware data
const aaImage = airAware;
const aaDescription = `AirAware is an air pollution tracker created
so that users can be informed on local and national air quality.`;
const aaProjectLink = "https://air-aware.herokuapp.com/";
const aaCodeLink = "https://github.com/ElvisHernandez/AirAware";
const aaTechnologies = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node",
  "Express",
  "Material UI",
];

export const projectsJSON = [
  {
    image: ssImage,
    description: ssDescription,
    projectLink: ssProjectLink,
    codeLink: ssCodeLink,
    technologies: ssTechnologies,
  },
  {
    image: aaImage,
    description: aaDescription,
    projectLink: aaProjectLink,
    codeLink: aaCodeLink,
    technologies: aaTechnologies,
  },
];
