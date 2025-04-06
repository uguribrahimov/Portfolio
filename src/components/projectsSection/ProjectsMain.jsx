import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Mana ID",
    year: "2025",
    align: "right",
    image: "/images/image2.png",
    link: "https://mana-id-git-main-uguribrahimovs-projects.vercel.app/",
  },
  {
    name: "Movie App",
    year: "2025",
    align: "left",
    image: "/images/image.png",
    link: "https://movie-app1-r5i3eiov6-uguribrahimovs-projects.vercel.app/",
  },
  {
    name: "Car Empire",
    year: "2025",
    align: "right",
    image: "/images/image3.png",
    link: "#",
  },
 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
