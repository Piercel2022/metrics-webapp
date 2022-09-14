import * as Actions from '../actions/stockAction';

const APIKEY = '3f51f0f4a39ef28e42b541c7e3fcc2a2';

export const fetchStocks = () => async (dispatch) => {
  try {
    dispatch(Actions.loadingStart(true));
    const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?limit=100&apikey=${APIKEY}`);
    const data = await res.json();
    dispatch(Actions.getAllStocks(data));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(Actions.loadingEnd(false));
  }
};

export const fetchDetails = (payload) => async (dispatch) => {
  try {
    dispatch(Actions.loadingStart(true));
    const res = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${payload}?limit=120&apikey=${APIKEY}`);
    const data = await res.json();
    dispatch(Actions.getSingleStock(data));
  } catch (err) {
    throw new Error(err);
  } finally {
    dispatch(Actions.loadingEnd(false));
  }
};
