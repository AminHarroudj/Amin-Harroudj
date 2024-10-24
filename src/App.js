import "./App.css";
import img1 from "./images/img1.png";
import mawaqitImg from "./images/mawaqit.png";
import dentistImg from "./images/dentiste.png";
import aifaImg from "./images/aifa.png";
import clubbasmaImg from "./images/basmaclub.png";
import portfolioImg from "./images/portfolio.png";
import todolistImg from "./images/todolist.png";
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
import { useState, useRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
      <LearningPath />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

function NavBar() {
  let [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 2 }}
      className="flex justify-around items-center py-6 shadow-md fixed top-0 left-0 right-0 bg-white opacity-90 z-10 max-sm:justify-between max-sm:px-6"
    >
      <h1 className="text-3xl font-bold text-sky-500">Amin</h1>
      <ul
        className={`flex gap-10 text-xl font-medium max-sm:flex-col max-sm:bg-sky-500 max-sm:absolute max-sm:top-20 max-sm:right-0 max-sm:left-20 max-sm:text-center max-sm:py-4 max-sm:pl-10 max-sm:text-white max-sm:rounded-tl-full max-sm:rounded-bl-full ${
          open ? "max-sm:flex" : "max-sm:hidden"
        }`}
        id="menu"
      >
        <li className="hover:text-sky-500 hover:duration-200 cursor-pointer">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="hover:text-sky-500 hover:duration-200 cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="hover:text-sky-500 hover:duration-200 cursor-pointer">
          <Link
            activeClass="active"
            to="learningpath"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Learning
          </Link>
        </li>
        <li className="hover:text-sky-500 hover:duration-200 cursor-pointer">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="hover:text-sky-500 hover:duration-200 cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        onClick={() => setOpen(!open)}
        className="text-2xl hidden max-sm:flex cursor-pointer"
      >
        <FaBars id="menu-btn" />
      </div>
    </motion.div>
  );
}

function HomePage() {
  return (
    <div
      className="flex justify-center items-center gap-44 pt-44 mb-20 max-sm:flex-col max-sm:gap-10 max-sm:pt-32 max-sm:mb-0"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 2 }}
      >
        <img
          src={img1}
          alt=""
          className="w-96 rounded-full shadow-xl max-sm:w-64"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: +50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 2 }}
        className="flex flex-col gap-4 text-4xl font-semibold max-sm:items-center max-sm:justify-center max-sm:text-center"
      >
        <h1 className="text-sky-500">Hello Friends</h1>
        <h1>I'm Mohammed El Amin</h1>
        <p>Web Developer</p>
        <Button title={"Download CV"} />
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/harroudj-mohammed-el-amin-655315252/"
            className="hover:text-sky-500 hover:duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AminHarroudj"
            className="hover:text-sky-500 hover:duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://web.facebook.com/amin.harroudj.1"
            className="hover:text-sky-500 hover:duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mohammedelaminharroudj/"
            className="hover:text-sky-500 hover:duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
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
    <motion.div
      className="flex flex-col justify-center items-center pt-24 gap-4 max-sm:text-center"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-sky-500 text-5xl font-semibold max-sm:text-4xl"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-5xl font-semibold max-sm:text-3xl"
      >
        Web Developper Full Stack{" "}
        <span className="text-sky-500">MERN Stack</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col gap-4 lg:flex-row"
      >
        <CarteSkill title="Mongo DB" description="Intermidiate Level">
          <SiMongodb />
        </CarteSkill>
        <CarteSkill title="Express Js" description="Advanced Level">
          <SiExpress />
        </CarteSkill>
        <CarteSkill title="React JS" description="Intermidiate Level">
          <FaReact />
        </CarteSkill>
        <CarteSkill title="Node JS" description="Advance Level">
          <FaNode />
        </CarteSkill>
      </motion.div>
    </motion.div>
  );
}

function CarteSkill({ children, title = "null", description = "null" }) {
  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col justify-center items-center gap-4 bg-gray-100 py-6 px-16 rounded-xl max-sm:px-20 hover:bg-gray-200 cursor-pointer"
    >
      <span className="text-8xl text-sky-500">{children}</span>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </motion.div>
  );
}

function LearningPath() {
  return (
    <div
      className="flex flex-col justify-center items-center pt-24 gap-4 max-sm:text-center"
      id="learningpath"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-sky-500 text-5xl font-semibold max-sm:text-4xl"
      >
        My Learning Path
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-2xl font-medium text-gray-600"
      >
        Here I will show you my path of learning website development
      </motion.p>
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-4 gap-4">
        <CarteSkill title="HTML" description="Advanced Level">
          <FaHtml5 />
        </CarteSkill>
        <CarteSkill title="CSS" description="Advanced Level">
          <FaCss3Alt />
        </CarteSkill>
        <CarteSkill title="Java Script" description="Advanced Level">
          <FaJsSquare />
        </CarteSkill>
        <CarteSkill title="React JS" description="Advanced Level">
          <FaReact />
        </CarteSkill>
        <CarteSkill title="Framer Motion" description="Advanced Level">
          <SiFramer />
        </CarteSkill>
        <CarteSkill title="Node JS" description="Advanced Level">
          <FaNode />
        </CarteSkill>
        <CarteSkill title="Express Js" description="Advanced Level">
          <SiExpress />
        </CarteSkill>
        <CarteSkill title="Mongo DB" description="Intermidiate Level">
          <SiMongodb />
        </CarteSkill>
        <CarteSkill title="My SQL" description="Intermidiate Level">
          <TbBrandMysql />
        </CarteSkill>
        <CarteSkill title="JAVA" description="Beginner Level">
          <FaJava />
        </CarteSkill>
      </div>
    </div>
  );
}

function MyProjects() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 pt-24"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-sky-500 text-5xl font-semibold"
      >
        My Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="text-2xl font-medium text-gray-600"
      >
        My awesome works
      </motion.p>
      <div className="grid grid-cols-3 mt-10 gap-10 max-sm:grid-cols-1">
        <a
          href="https://amin-harroudj.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectCard imageSrc={portfolioImg} title="Portfolio" />
        </a>
        <a
          href="https://club-basma.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectCard imageSrc={clubbasmaImg} title="Club Basma" />
        </a>
        <a
          href="https://aminharroudj.github.io/AIFA_Hotel/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectCard imageSrc={aifaImg} title="Aifa Hotel" />
        </a>
        <a
          href="https://aminharroudj.github.io/dentist-website/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectCard imageSrc={dentistImg} title="Dentist Website" />
        </a>
        <a
          href="https://todo-list-theta-seven-32.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectCard imageSrc={todolistImg} title="To Do List" />
        </a>
        <a
          href="https://mawaqit-salat-react.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ProjectCard imageSrc={mawaqitImg} title="Mawaqit Salat Algeria" />
        </a>
      </div>
    </div>
  );
}

function ProjectCard({ children, imageSrc, title = "null" }) {
  return (
    <motion.div
      initial={{ y: +50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="cursor-pointer w-96 pb-4 flex flex-col gap-4 items-center border-2 rounded-lg max-sm:w-72 hover:bg-gray-100"
    >
      <img src={imageSrc} alt={title} className="w-96 rounded-lg" />
      <h1 className="text-xl font-medium">{title}</h1>
    </motion.div>
  );
}

function ContactMe() {
  return (
    <motion.div
      initial={{ y: +50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="flex flex-col gap-10 items-center pt-24 pb-10"
      id="contact"
    >
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
            <p>amin.harroudj.2002@outlook.com</p>
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
    </motion.div>
  );
}

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="flex justify-center p-6 bg-gray-100 text-md font-semibold text-gray-700 text-center"
    >
      <h1>Copyright © 2024 Mohammed El Amin Harroudj . All Rights reserved.</h1>
    </motion.div>
  );
}

export default App;
