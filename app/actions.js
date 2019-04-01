/* actions */
// const axios = require('axios');
const axios = require('axios');
const proxyURL = 'https://cors-anywhere.herokuapp.com';
const token = require('./config');
// require('dotenv').config();
// console.log(JSON.stringify(token));

const header = {headers: {'Access-Control-Allow-Origin': '*',}};

const getStations = () => {
  return (dispatch) => {
    return axios.get(`${proxyURL}/https://api.dirble.com/v2/stations?token=${token}`, header)
                .then((res)=>{ return dispatch(getStationsAsync(res.data))})
                .catch((e)=>{return dispatch(dispatch(getStationsAsync([])))});
  }
}
/*
const getStations = (dispatch) =>{
  // let stations = [];
  return axios.get(`${proxyURL}/https://api.dirble.com/v2/stations?token=c64e24acac3d8935a90ec733dd`,{headers: {'Access-Control-Allow-Origin': '*',}})  
                          .then(res=>{
                              // newState.stationList = [...res.data];
                              // console.log(res.data);
                              // stations = res.data;
                              return dispatch(getStationsAsync(res.data));
                          })
                          .catch(e=>{return dispatch(getStationsAsync([]))});
  
};

const getS = ()=>{
  return dispatch => {
    return getStations().then(res=> {return dispatch(getStationsAsync(res.data))}).catch(e=>{return dispatch(getStationsAsync([]))});
  }
}
*/
const getStationsAsync = (stations)=>{
  return {type: 'GET_ALL', payload:stations};
};

module.exports = { getStations }
