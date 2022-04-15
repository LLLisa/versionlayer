import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

//use auth route to change password value in store, use that instead of auth token? --Yessss sos you can have different effects for different pws

//safety zone--------------------------------------
const SET_VIEW = 'SET_VIEW';

//reducers-----------------------------------------
const view = (state = {}, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.view;
  }
  return state;
};

//thunks---------------------------------------------
export const setView = (view) => {
  return (dispatch) => {
    console.log('thunk hi');
    window.localStorage.setItem('view', view);
    dispatch({ type: SET_VIEW, view });
  };
};

//outro-----------------------------------------------

const store = createStore(
  combineReducers({
    view,
  }),
  applyMiddleware(thunk, logger)
);

export default store;
