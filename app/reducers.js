/* reducers */

// const { UPVOTE, DOWNVOTE } = require('./actions');


let initialState = {
  stationList: [
    {id:1, name:'PRANAV SINDURA'}
  ]
};

let reducer = (state = initialState, action)=>
{
  // console.log(process.env);
  let newState = {...state};
  switch(action.type){
    case 'GET_ALL': newState.stationList = action.payload; return newState;
    default: return state;
  }
}

module.exports = reducer;