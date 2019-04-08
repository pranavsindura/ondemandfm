/* actions */
// const axios = require('axios');
const axios = require('axios');
const proxyURL = 'https://cors-anywhere.herokuapp.com';
const token = require('./config');
// require('dotenv').config();
// console.log(JSON.stringify(token));

const header = {headers: {'Access-Control-Allow-Origin': '*',}};

const getSearchResult = (query)=>{
  return dispatch => {
    return axios.post(`${proxyURL}/https://api.dirble.com/v2/search?token=${token}`,{query: query}, header)
                .then((res)=>{return dispatch(getSearchResultAsync(res.data))})
                .catch((e)=>{return dispatch(getSearchResultAsync([]))});
  }
}

const getSearchResultAsync = (station) => {
  return {type:'SEARCH_RESULT', payload:station};
}

const getStations = () => {
  return (dispatch) => {
    return axios.get(`${proxyURL}/https://api.dirble.com/v2/stations?token=${token}`, header)
    // return axios.get(`${proxyURL}/https://api.dirble.com/v2/stations/popular?token=${token}`, header)

                .then((res)=>{ return dispatch(getStationsAsync(res.data))})
                .catch((e)=>{return dispatch(getStationsAsync([]))});
  }
}

const getPopular = () => {
  return (dispatch) => {
    // return axios.get(`${proxyURL}/https://api.dirble.com/v2/stations?token=${token}`, header)
    return axios.get(`${proxyURL}/https://api.dirble.com/v2/stations/popular?token=${token}`, header)

                .then((res)=>{ return dispatch(getStationsAsync(res.data))})
                .catch((e)=>{return dispatch(getStationsAsync([]))});
  }
}
const getStationsAsync = (stations)=>{
  return {type: 'GET_ALL', payload:stations};
};

const changeSearchQuery = (query)=>{
  return (dispatch)=> {
    return dispatch({type:'CHANGE_SEARCH_QUERY', payload: query})
  }
}

module.exports = { getStations, changeSearchQuery, getSearchResult, getPopular }
