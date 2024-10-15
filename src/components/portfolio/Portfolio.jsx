import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'AI Chat Application',
    img: '/AI_CHAT.gif',
    desc: 'Developed a full-stack AI chat platform using React, Express, and MongoDB, powered by Google Gemini AI. Enhanced real-time interactions and optimized server-side processing, achieving a 25% reduction in latency for improved performance and user experience.',
    link: 'https://github.com/Kalpesh-Parab/AI-Chat-react.git',
  },
  {
    id: 2,
    title: 'React-Booking App',
    img: '/Booking.jpg',
    desc: 'Created a high-performance booking application utilizing React, Node.js, and MongoDB. The platform features a responsive UI for seamless hotel searches and reservations, alongside a scalable backend API for user authentication and booking management, ensuring efficient data handling.',
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    title: 'React-Admin Dashboard',
    img: '/Admin_react.gif',
    desc: 'Developed a scalable admin dashboard using React, centralizing user and product management with effective data visualization. Integrated dark mode functionality to enhance user experience and usability for prolonged engagement, making the interface more accessible and user-friendly.',
    link: 'https://github.com/Kalpesh-Parab/yatri_Travels/tree/main/admin/src',
  },
  {
    id: 4,
    title: 'IPL Win Predictor',
    img: '/IPL_Win_Predictor.gif',
    desc: `Designed a machine learning model capable of predicting IPL match outcomes with 88% accuracy. Implemented advanced optimization techniques to reduce model training time by 30%, enhancing the system's responsiveness for real-time data predictions.`,
    link: 'https://github.com/Kalpesh-Parab/IPL.git',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imgContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link}>See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
