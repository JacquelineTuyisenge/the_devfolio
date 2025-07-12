// src/data/projects.js

import foodImage from "../assets/Food.jpg";
import carImage from "../assets/car.jpg";
import portpicImage from "../assets/Portpic.jpg";
import shopImage from "../assets/shop.jpg";
import notesImage from "../assets/notes.jpg";
import jobImage from "../assets/job.jpg";

export const projects = [
    {
      name: "Eatsome",
      description: "Food delivery app for local restaurants",
      image: foodImage,
      live: "https://eatsome.vercel.app",
      github: "https://github.com/jacqueline/eatsome",
    },
    {
      name: "CarRent",
      description: "Car rental platform with filters and booking",
      image: carImage,
      live: "",
      github: "https://github.com/jacqueline/car-rent",
    },
    {
      name: "DevLink",
      description: "Portfolio link directory for developers",
      image: portpicImage,
      live: "https://devlink.vercel.app",
      github: "https://github.com/jacqueline/devlink",
    },
    {
      name: "Shopify Clone",
      description: "E-commerce frontend clone built with React",
      image: shopImage,
      live: "",
      github: "https://github.com/jacqueline/shopify-clone",
    },
    {
      name: "NoteKeep",
      description: "Simple fullstack note-taking app with MongoDB",
      image: notesImage,
      live: "https://notekeep.vercel.app",
      github: "https://github.com/jacqueline/notekeep",
    },
    {
      name: "JobTrackr",
      description: "Job application tracker with filter & status",
      image: jobImage,
      live: "",
      github: "https://github.com/jacqueline/jobtrackr",
    },
    // More projects for full project page...
  ];
  