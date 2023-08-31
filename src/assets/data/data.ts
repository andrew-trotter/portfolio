import { Project } from '../../../public/models/project'
import { Experience } from '../../../public/models/experience'

export const projects: Project[] = [
  {
    id: 1,
    display: true,
    name: 'Pinky Promise - Dev Academy Final Project',
    desc: `A web app to help keep yourself and friends accountable! A mobile-first app made for my final group project at Dev Academy. This was the first time I was exposed to an environment with user to user interaction. The challenge here was accommodating for users to have a relationship and see each other's promises regardless of who made it. I would like to improve the robustness around those interaction and style it more acceptably for desktop view.`,
    url: 'https://github.com/kahikatea-2023/pinky-promise',
    image: '../../images/pinky-promise.png',
    techs: [
      { name: 'React' },
      { name: 'react-query' },
      { name: 'tailwind.css' },
      { name: 'TypeScript' },
      { name: 'Knex' },
      { name: 'SQLite3' },
    ],
  },
  {
    id: 95,
    display: true,
    name: 'FrankenCademy',
    desc: `A fun, interactive fighter builder inspired by Mortal Kombat. We took pictures of team members and staff, seperated the body parts and allowed users to mix and match. A very fun project with lots of learning as I implemented the music and fire animations. As the `,
    url: 'https://github.com/kahikatea-2023/Frankencademy',
    image: '../../images/website-template-editor.png',
    techs: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Express' },
      { name: 'sqlite3' },
      { name: 'Knex' },
    ],
  },
  {
    id: 96,
    display: true,
    name: 'Website Template Editor by Da Dawgs',
    desc: `As a learning group project, we made this to have a go at a basic website builder, focussing on allowing the user to change colours of elements in the sandbox. I was the Front End Lead responsible for the core colour changing feature and partway through this project I discovered my planned implementation of the colour changing wouldn't work. So, with 3 hours before the deadline, I researched and discovered a different approach using JavaScript to target the HTML attributes and cahnge the styling. I was proud of this project for demonstrating my resourcefulness and ability to address sudden change and pivot during a stressful, time-sensitive moment.`,
    url: 'https://github.com/kahikatea-2023/Da-Dawgs/tree/main',
    image: '../../images/website-template-editor.png',
    techs: [
      { name: 'HTML' },
      { name: 'Express' },
      { name: 'Handlebars' },
      { name: 'sqlite3' },
      { name: 'Knex' },
    ],
  },
  {
    id: 97,
    display: false,
    name: 'Cutz G Barbershop',
    desc: `My first group project with Dev Academy. I was the Product Owner and this project was a fun envisionment to help the hair stylist and client's comunication to achieve the desired haircut. We had fun with AI image generation for the images. We did have a setback where each team member took a view, and I described two views without enough distinction as they were similar. This resulted in two members working on essentialy the same view. The takeaway was to be careful with similar features to minimise overlap.`,
    url: 'https://github.com/kahikatea-2023/Cutz-G-Barbershop',
    image: '../../images/portfolio.jpeg',
    techs: [
      { name: 'Handlebars' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Express' },
      { name: 'JavaScript' },
    ],
  },
  {
    id: 98,
    display: true,
    name: 'Portfolio Website',
    desc: `I made this website to present myself and the projects I want to showcase. I took this opportunity to improve my front-end styling and adding cool little effects. I'm especially proud of the sticky panel and nav functionality.`,
    url: '/',
    image: '../../images/portfolio.jpeg',
    techs: [
      { name: 'React' },
      { name: 'tailwind.css' },
      { name: 'TypeScript' },
      { name: 'Vite' },
    ],
  },
  {
    id: 99,
    display: true,
    name: 'Foundations Blog',
    desc: 'My humble beginnings with a basic blog detailing my journey through the Foundations content of Dev Academy. Made with only HTML and CSS and a cute picture of Fritz my childhood friend.',
    url: 'https://andrew-trotter.github.io/',
    image: '../../images/foundations-blog.jpeg',
    techs: [{ name: 'HTML' }, { name: 'CSS' }],
  },
]

export const experiences: Experience[] = [
  {
    id: 1,
    name: 'Full Stack Developer Student at Dev Academy Aotearoa',
    dateStart: 'March',
    dateEnd: 'July 2023',
    desc: 'An indescribable 800 hours in 15 weeks of constant learning and growth to acquire the technical and human skills required for full stack web development in a modern framework. I learnt to learn incredibly fast with a focus on collaboration, self-awareness and giving/receiving feedback.',
    techs: [
      { name: 'React' },
      { name: 'react-query' },
      { name: 'tailwind.css' },
      { name: 'TypeScript' },
      { name: 'Knex' },
      { name: 'SQLite3' },
    ],
  },
]
