/* reducers */

// const { UPVOTE, DOWNVOTE } = require('./actions');


let initialState = {
  stationList: [],
  searchQuery: '',
  searchResult: []
};

let reducer = (state = initialState, action)=>
{
  // console.log(state);
  let newState = {...state};
  switch(action.type){
    case 'GET_ALL': newState.stationList = action.payload; return newState;
    case 'CHANGE_SEARCH_QUERY': newState.searchQuery = action.payload; return newState;
    case 'SEARCH_RESULT': newState.searchResult = action.payload; return newState;
    default: return state;
  }
}

module.exports = reducer;