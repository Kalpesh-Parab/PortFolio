import React from 'react';
import './skills.scss';
import { motion } from 'framer-motion';

const skills = [
  'SQL',
  'Data Structures',
  'HTML',
  'C++',
  'Database Management System',
  'C',
  'Python',
  'CSS',
  'JavaScript',
  'MongoDB',
  'React.js',
  'Django',
  'MS Office',
  'Full Stack Development',
  'Machine Learning',
  'Software Development',
  'Java',
  'Project Management',
  'Node.js',
  'Express.js',
  'Backend Development',
  'MERN stack',
  'NoSQL databases',
  'REST API',
  'Frontend Development',
  'Software Testing',
];

const Skills = () => {
  return (
    <div className='heading'>
      <motion.h1 whileHover={{ color: '#c70fbe' }}>Skills I Have...</motion.h1>
      <div className='skills-container'>
        {skills.map((skill, index) => (
          <span key={index} className='skill-item'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
