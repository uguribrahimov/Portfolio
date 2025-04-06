import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        <Typewriter
          words={["Front-End Web Developer"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Ibrahimov <br className="sm:hidden md:block" />
        Ugur
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 mb-4"
      >
        Crafting innovative, user-friendly,  <br />and visually engaging web experiences.
      </motion.p>
    </div>
  );
};

export default HeroText;
