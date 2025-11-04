// src/data/projects.js

import foodImage from "../assets/Food.jpg";
import carImage from "../assets/car.jpg";
import portpicImage from "../assets/Portpic.jpg";
import shopImage from "../assets/shop.jpg";
import budgetImage from "../assets/budget.jpg";
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
      name: "Budget Tracker",
      description: "Spend Responsibly, Track Your Budget",
      image: budgetImage,
      live: "https://budget-j-manager.netlify.app/",
      github: "https://github.com/JacquelineTuyisenge/Budget-Manager",
    },
    {
      name: "JobTracker",
      description: "Job application tracker with filter & status",
      image: jobImage,
      live: "",
      github: "https://github.com/jacqueline/jobtrackr",
    },
    // More projects for full project page...
  ];
  