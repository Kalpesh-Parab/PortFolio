import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-435%',
    transition: {
      duration: 10,
      repeatType: 'mirror',
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>KALPESH PARAB</motion.h2>
          <motion.h1 variants={textVariants}>FULL STACK DEVELOPER</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>
              <a href='#Portfolio'>See the latest work</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href='#Contact'>Contact me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='./scroll.png'
            alt=''
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        MERN STACK WEB DEVELOPER
      </motion.div>
      <div className='imgContainer'>
        <img src='./hero.png' alt='' className='' />
      </div>
    </div>
  );
};

export default Hero;
