import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/1242286/pexels-photo-1242286.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore excepturi officia error impedit optio quod, magni nemo laboriosam, quidem numquam enim veniam tempora veritatis accusantium maiores facilis ullam fugiat iure.',
  },
  {
    id: 2,
    title: 'Chat Commerce',
    img: 'https://images.pexels.com/photos/542517/pexels-photo-542517.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore excepturi officia error impedit optio quod, magni nemo laboriosam, quidem numquam enim veniam tempora veritatis accusantium maiores facilis ullam fugiat iure.',
  },
  {
    id: 3,
    title: 'Hello Commerce',
    img: 'https://images.pexels.com/photos/54267/sunflower-blossom-bloom-flowers-54267.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore excepturi officia error impedit optio quod, magni nemo laboriosam, quidem numquam enim veniam tempora veritatis accusantium maiores facilis ullam fugiat iure.',
  },
  {
    id: 4,
    title: 'Next Commerce',
    img: 'https://images.pexels.com/photos/62279/pexels-photo-62279.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore excepturi officia error impedit optio quod, magni nemo laboriosam, quidem numquam enim veniam tempora veritatis accusantium maiores facilis ullam fugiat iure.',
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
            <button>See Demo</button>
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
