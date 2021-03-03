import { combineReducers } from "redux";
//import storage from 'redux-persist/lib/storage';
import UserReducer from './User/Recuder';

const appReducer = combineReducers({
    user: UserReducer,
  });
  
  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };
  
  export default rootReducer;