import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  newtonschool,
  kotakmahindra,
  samsung,
  secqai
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Blockchain Development",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
];

const experiences = [
  {
    title: "Research Intern",
    company_name: "Samsung Prism",
    icon: samsung,
    iconBg: "#383E56",
    date: "May 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies for the Project mono audio to stero audio conversion",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Kotak Mahindra Bank",
    icon: kotakmahindra,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Reasearch Intern",
    company_name: "Sequai",
    icon: secqai,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Developed a machine learning model for regulating the temprature of the coolant mechanism for the Photon Reactor  ",
      "The model mimics the PID controller and has been trained over extensive PID data",
      "Implemented the model using the LSTM neural network ",
      "Currently working on training the model using the SNN (Spiked Neural Network).",
    ],
  },
  {
    title: "Frontend Content Developer",
    company_name: "Newton School",
    icon: newtonschool,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Created and reviewed Real-life programming questions and test problems created by other problem setters along with their test cases for frontend technologies (HTML, CSS, JS & React)",
      "Created assessment-based multiple choice questions for learning outcomes for the frontend technologies (HTML, CSS, JS & React).",
      "Implemented and ensured best practices are followed in all technical content also performed testing using cypress.",
      "Worked closely with the team to ensure we help enable students to have the best full-stack talent.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "D-Travel",
    description:
      " A Decentarlized Web-based platform that allows users to search, book, and manage cabs from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextls",
        color: "blue-text-gradient",
      },
      {
        name: "sanity DB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/swarupyeole11/Dtravel",
  },
  {
    name: "V-Share",
    description:
      "A fully Responsive Web application that enables users to upload their short videos from their accounts.It also provides features like and comment. For authentication it uses the latest Google O-Auth",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/swarupyeole11/VideoShare.git",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/swarupyeole11/travelwebsite",
  },
];

export { services, technologies, experiences, testimonials, projects };
