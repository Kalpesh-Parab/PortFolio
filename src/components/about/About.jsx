import { motion } from 'framer-motion';
import './about.scss';

const About = () => {
  return (
    <div className='about-section'>
      <motion.h1 whileHover={{ color: '#c70fbe' }}>About Me...</motion.h1>

      <div className='about-content'>
        <p>
          <strong>Who I Am:</strong>
          <br />
          I’m Kalpesh Parab, a passionate and versatile software developer with
          a strong foundation in web development, data analysis, and
          problem-solving. With a Master's degree in Computer Science, I
          specialize in building scalable, user-focused applications that solve
          real-world problems.
        </p>

        <p>
          <strong>My Journey:</strong>
          <br />
          From deploying my first project as part of a team with Yatri Tourism
          Pune to developing custom projects like the IPL Win Predictor and
          Social Media Sentiment Analysis, I’ve grown through hands-on
          experience and a drive to learn continuously. I love tackling
          challenges head-on and am always focused on finding the most effective
          solutions.
        </p>

        <p>
          <strong>What I Value:</strong>
          <br />
          Collaboration, creativity, and constant improvement drive my approach
          to software development. I enjoy working in teams where sharing
          knowledge and innovative thinking lead to impactful projects. My goal
          is always to contribute meaningfully while continuously honing my
          skills.
        </p>
      </div>
    </div>
  );
};

export default About;
