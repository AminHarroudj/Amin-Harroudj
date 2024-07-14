import "./App.css";
import img1 from "./images/img1.png";
import mawaqitImg from "./images/mawaqit.png";
import dentistImg from "./images/dentiste.png";
import aifaImg from "./images/aifa.png";
import backGround from "./images/bg1.png";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backGround})`,
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      <HomePage />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

function NavBar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="flex justify-around items-center py-6 shadow-md fixed top-0 left-0 right-0 bg-white opacity-90 z-10 max-sm:justify-between max-sm:px-6">
      <h1 className="text-3xl font-bold text-sky-500">Amin</h1>
      <ul
        className={`flex gap-10 text-xl font-medium max-sm:flex-col max-sm:bg-sky-500 max-sm:absolute max-sm:top-20 max-sm:right-0 max-sm:left-20 max-sm:text-center max-sm:py-4 max-sm:pl-10 max-sm:text-white max-sm:rounded-tl-full max-sm:rounded-bl-full ${open ? 'max-sm:flex':'max-sm:hidden'}`}
        id="menu"
      >
        <li className="hover:text-sky-500 hover:duration-200">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-sky-500 hover:duration-200">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-sky-500 hover:duration-200">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-sky-500 hover:duration-200">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={()=>setOpen(!open)} className="text-2xl hidden max-sm:flex cursor-pointer">
        <FaBars id="menu-btn"/>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div
      className="flex justify-center items-center gap-44 pt-44 mb-12 max-sm:flex-col max-sm:gap-10 max-sm:pt-32 max-sm:mb-0"
      id="home"
    >
      <div>
        <img
          src={img1}
          alt=""
          className="w-96 rounded-full shadow-xl max-sm:w-64"
        />
      </div>
      <div className="flex flex-col gap-4 text-4xl font-semibold max-sm:items-center max-sm:justify-center max-sm:text-center">
        <h1 className="text-sky-500">Hello Friends</h1>
        <h1>I'm Mohammed El Amin</h1>
        <p>Web Developper</p>
        <Button title={"Download CV"} />
        <div className="flex gap-4">
          <a
            href="www.linkedin.com"
            className="hover:text-sky-500 hover:duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="www.github.com"
            className="hover:text-sky-500 hover:duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="www.facebook.com"
            className="hover:text-sky-500 hover:duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="www.instagram.com"
            className="hover:text-sky-500 hover:duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

function Button({ title }) {
  return (
    <div>
      <button className="bg-sky-500 py-2 px-8 text-lg font-semibold rounded-full text-white border-2 border-sky-500 hover:text-sky-500 hover:bg-white hover:border-2 hover:border-sky-500 hover:duration-300">
        {title}
      </button>
    </div>
  );
}

function AboutMe() {
  return (
    <div
      className="flex flex-col justify-center items-center pt-24 gap-4 max-sm:text-center"
      id="about"
    >
      <h1 className="text-sky-500 text-5xl font-semibold max-sm:text-4xl">
        About Me
      </h1>
      <p className="text-5xl font-semibold max-sm:text-3xl">
        Web Developper Full Stack{" "}
        <span className="text-sky-500">MERN Stack</span>
      </p>
      <div>
        <CarteSkill title="JavaScript" description="Advance Level">
          <FaJsSquare />
        </CarteSkill>
        <CarteSkill title="React JS" description="Intermidiate Level">
          <FaReact />
        </CarteSkill>
        <CarteSkill title="Node JS" description="Advance Level">
          <FaNode />
        </CarteSkill>
        <CarteSkill title="Java" description="Beginner Level">
          <FaJava />
        </CarteSkill>
      </div>
    </div>
  );
}

function CarteSkill({ children, title = "null", description = "null" }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 py-6 px-64 mt-10 rounded-xl max-sm:px-20">
      <span className="text-8xl text-sky-500">{children}</span>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}

function MyProjects() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 pt-24"
      id="projects"
    >
      <h1 className="text-sky-500 text-5xl font-semibold">My Project</h1>
      <p className="text-2xl font-medium text-gray-600">My awesome works</p>
      <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
        <ProjectCard imageSrc={mawaqitImg} title="Mawaqit Salat" />
        <ProjectCard imageSrc={dentistImg} title="Dentist Website" />
        <ProjectCard imageSrc={aifaImg} title="Aifa Hotel" />
        <ProjectCard imageSrc={mawaqitImg} title="Mawaqit Salat" />
      </div>
    </div>
  );
}

function ProjectCard({ imageSrc, title = "null" }) {
  return (
    <div className="w-96 pb-4 flex flex-col gap-4 items-center border-4 rounded-xl max-sm:w-72">
      <img src={imageSrc} alt={title} className="w-96 rounded-xl" />
      <h1 className="text-xl font-medium">{title}</h1>
    </div>
  );
}

function ContactMe() {
  return (
    <div className="flex flex-col gap-10 items-center pt-24 pb-10" id="contact">
      <h1 className="text-5xl font-semibold text-sky-500">Contact Me</h1>
      <div className="w-8/12 flex gap-10 bg-gray-100 p-10 rounded-xl max-sm:flex-col max-sm:p-4 max-sm:w-11/12">
        <form
          action=""
          className="flex flex-col items-start gap-4 w-4/5 max-sm:w-full"
        >
          <input
            placeholder="Your Name"
            type="text"
            className="bg-gray-200 p-4 rounded-lg w-full outline-none"
          />
          <input
            placeholder="Your Email Adress"
            type="email"
            name=""
            id=""
            className="bg-gray-200 p-4 rounded-lg w-full outline-none"
          />
          <textarea
            placeholder="Your Message"
            name=""
            id=""
            className="bg-gray-200 p-4 rounded-lg h-56 w-full outline-none"
          ></textarea>
          <Button title={"Send Message"} />
        </form>
        <div className="flex flex-col gap-6 text-lg">
          <div className="flex gap-4 items-center">
            <div className="bg-sky-500 text-white text-2xl rounded-full p-4">
              <FaEnvelope />
            </div>
            <p>amin@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-sky-500 text-white text-2xl rounded-full p-4">
              <FaPhoneAlt />
            </div>
            <p>0556648005</p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-sky-500 text-white text-2xl rounded-full p-4">
              <FaMapMarkerAlt />
            </div>
            <p>Constantine - Algeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-center p-6 bg-gray-100 text-md font-semibold text-gray-700 text-center">
      <h1>Copyright © 2024 Mohammed El Amin Harroudj . All Rights reserved.</h1>
    </div>
  );
}

export default App;
