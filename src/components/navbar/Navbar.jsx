import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Kalpesh Parab
        </motion.span>
        <div className='social'>
          <a
            href='https://www.linkedin.com/in/kalpesh-parab-a53369202/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='./linkedin.png' />
          </a>
          <a
            href='https://leetcode.com/u/Kalpesh_Parab/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='./leetcode.png' />
          </a>
          <a
            href='https://github.com/Kalpesh-Parab'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='./github.png' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
