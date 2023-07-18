import { Project } from "../../models/project";
import { Experience } from "../../models/experience";



export const projects: Project[] = [
  {
    id: 1,
    name: 'Pinky Promise - Dev Academy Final Project',
    desc: `A web app to help keep yourself and friends accountable! A mobile-first app made for my final group project at Dev Academy. This was the first time I was exposed to an environment with user to user interaction. The challenge here was accommodating for users to have a relationship and see each other's promises regardless of who made it. I would like to improve the robustness around those interaction and style it more acceptably for desktop view.`,
    image: '../../images/pinky-promise.png',
    techs: [{name: 'React'}, {name: 'react-query'}, {name: 'tailwind.css'}, {name: 'TypeScript'}, {name: 'Knex'}, {name: 'SQLite3'}, ]
  },{
    id: 2,
    name: 'Foundations Blog',
    desc: 'My humble beginnings with a basic blog detailing my journey through the Foundations content of Dev Academy. Made with only HTML and CSS and a cute picture of Fritz my childhood friend.',
    image: '../../images/personal-blog.png',
    techs: [{name: 'HTML'}, {name: 'CSS'},]
  },
]

export const experiences: Experience[] = [
  {
    id: 1,
    name: "Full Stack Developer Student at Dev Academy Aotearoa",
    dateStart: 'March',
    dateEnd: 'July 2023',
    desc: "An indescribable 800 hours in 15 weeks of constant learning and growth to acquire the technical and human skills required for full stack web development in a modern framework. I learnt to learn incredibly fast with a focus on collaboration, self-awareness and giving/receiving feedback.",
    techs: [{name: 'React'}, {name: 'react-query'}, {name: 'tailwind.css'}, {name: 'TypeScript'}, {name: 'Knex'}, {name: 'SQLite3'}]
  }
]

