import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I deliver tailored strategies to advance your brand
          <br />
          and fuel its success.
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='./people.gif'></img>
          <h1>
            Distinctive
            <motion.b whileHover={{ color: '#c70fbe' }}> Strengths</motion.b>
          </h1>
        </div>
        <div className='title'>
          <h1>
            That Set
            <motion.b whileHover={{ color: '#c70fbe' }}> Me Apart.</motion.b>
          </h1>
          <button>QUALITIES I HAVE?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'Lightgray', color: 'black' }}
        >
          <h2>Adaptability & Learning</h2>
          <p>
            My ability to quickly learn and adapt to new technologies empowers
            me to tackle complex challenges and contribute effectively to
            diverse teams, ensuring successful project outcomes in fast-paced
            environments.
          </p>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'Lightgray', color: 'black' }}
        >
          <h2>Creative Thinker</h2>
          <p>
            I bring a unique perspective to problem-solving, blending technical
            skills with creative thinking to develop innovative solutions. My
            passion for technology and design allows me to think outside the
            box, enhancing project outcomes.
          </p>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'Lightgray', color: 'black' }}
        >
          <h2>Passion for Excellence</h2>
          <p>
            My commitment to continuous improvement and excellence drives me to
            deliver high-quality work consistently. I approach every task with
            enthusiasm, ensuring that I contribute positively to the team's
            goals and vision.
          </p>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ backgroundColor: 'Lightgray', color: 'black' }}
        >
          <h2>Collaborative Problem Solver</h2>
          <p>
            I excel in collaborative environments, utilizing effective
            communication and teamwork to address challenges creatively. My
            proactive approach fosters innovation and drives projects forward,
            making me a valuable asset to any team.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
