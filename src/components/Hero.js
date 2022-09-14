import styled from 'styled-components';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import stockImg from '../images/stock.svg';
import { sumPrices, sumPercent, sumChanges } from '../utils/helper';

const Section = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 35vh;
    background-image: url(${(props) => (props.image ? 'hello.png' : stockImg)});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 300px 230px;
    color: #2646d3;
    padding: 10px 8px;
    > h2 {
      font-size: 2rem;
      margin: -10px 0 2px;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      span:first-of-type {
          margin-bottom: 5px;
          font-weight: bold;
        }
    }
    @media (min-width: 768px) {
      background-size: 350px 245px
    }
  }
`;

function Hero({ text, stocks }) {
  return (
    <Section>
      <motion.div>
        <h2>{text}</h2>
        <div data-testid="hero-details">
          <span>{`$${sumPrices(stocks)}`}</span>
          <span>
            <BsArrowUp color="#7cfc00" />
            {`+${sumPercent(stocks)}`}
          </span>
          <span>
            <BsArrowDown color="red" />
            {`-${sumChanges(stocks)}`}
          </span>
        </div>
      </motion.div>
    </Section>
  );
}

Hero.propTypes = {
  text: PropTypes.string.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    changesPercentage: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  })).isRequired,
};

export default Hero;
