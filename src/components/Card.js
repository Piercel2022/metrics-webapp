import styled from 'styled-components';
import { BsArrowUp, BsArrowDown, BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from '../images/stocks.png';

const Container = styled.div`
  border: solid 2px #0f52ba;
  background-color: #4169e1;
  padding: 5px 5px 10px 12px;
  border-radius: 5px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 50% 30%;
  height: 250px;
  color: #000080;
  cursor: pointer;
    > div:nth-of-type(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      > h2 {
        margin: 0;
        font-size: 1rem;
      }
    }
    > span {
      background: #7df9ff;
      border-radius: 8px;
      padding: 3px 10px;
      font-size: 10px;
    }
    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      font-size: 14px;
      span:first-of-type {
        margin-bottom: 10px;
        font-weight: bold;
      }
    }
`;
function Card({
  id, ticker, changes, price, changesPercentage, companyName,
}) {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(`/details/${id}`)}
    >
      <div data-testid="company">
        <h2>{companyName}</h2>
        <BsArrowRightCircle size="16px" />
      </div>
      <span>{ticker}</span>
      <div data-testid="card-details">
        <span>
          $
          {price}
        </span>
        <span>
          <BsArrowUp color="7cfc00" />
          {changes}
        </span>
        <span>
          <BsArrowDown color="7cfc00" />
          {changesPercentage}
        </span>
      </div>
    </Container>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  changes: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  changesPercentage: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};
export default Card;
