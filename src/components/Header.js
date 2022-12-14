import styled from 'styled-components';
import { BsFillMicFill } from 'react-icons/bs';
import { IoIosSettings, IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;  
  > div:nth-of-type(1) {
    h3 {
      margin: 10px 0;
      color: #fff;
    }
  }
  > div:nth-of-type(2) {
    display: flex;
    > span:nth-of-type(1) {
      margin-right: 15px;
    }
  }
`;

const containerVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: { duration: 1, stiffness: 500 },
  },
};

function Header({ home }) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <NavBar data-testid="nav">
        {!home && (
        <NavLink to="/">
          <IoIosArrowBack size="25px" color="#fff" />
        </NavLink>
        )}
        <div>
          <h3>{home ? 'Stock Metrics' : 'Company Details'}</h3>
        </div>
        <div data-testid="icons">
          <span><BsFillMicFill size="17px" color="#fff" /></span>
          <span>
            {' '}
            <IoIosSettings size="17px" color="#fff" />
          </span>
        </div>
      </NavBar>
    </motion.div>
  );
}

Header.propTypes = {
  home: PropTypes.bool.isRequired,
};

export default Header;
