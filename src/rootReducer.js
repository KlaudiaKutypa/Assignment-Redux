import counterReducer from "./reducerCounter";
import { combineReducers} from "redux";
import pictureReducer from "./reducerPhoto";

const rootReducers = combineReducers({
    counter : counterReducer,
    photo : pictureReducer
});

export default rootReducers;