import { combineReducers } from 'redux';
const SET_ARRAY = "SET_ARRAY";
const MUTATE_ARRAY ="MUTATE_ARRAY";
const UPDATE_ARRAY = "UPDATE_ARRAY";

const setDataArray = (dataArray)=> {
  return {
    type: SET_ARRAY,
    dataArray
  };
}

const updateState = (index, value)=> {
  return {
    type: UPDATE_ARRAY,
    index,
    value
  };
}

const mutateState = (index, value)=> {
  return {
    type: MUTATE_ARRAY,
    index,
    value
  };
}

const dataArray = (state = [], action) =>{
  switch (action.type){
    case SET_ARRAY:
      return action.dataArray;
      break;
    case MUTATE_ARRAY:
      let stateCopy = state;
      stateCopy[action.index] = { ...stateCopy[action.index], value: action.value };
      return stateCopy;
      break;
    case UPDATE_ARRAY:
      return [
        ...state.slice(0, action.index),
        {
          id: action.index + 1,
          value: action.value
        },
        ...state.slice( action.index + 1)
      ]
      break;
    default:
      return state;
      break;
    }
}

const getArrayData = (state) => state.dataArray || [];

const combinedReducers = combineReducers({
  dataArray
});

export { combinedReducers, setDataArray, getArrayData, updateState, mutateState };
