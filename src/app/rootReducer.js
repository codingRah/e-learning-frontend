import { combineReducers } from "redux";
import auth from "../features/auth/authSlice";
import typeSlice from "../features/userType/typeSlice";
import profileSlice from "../features/profile/profileSlice";
import educationSlice from "../features/education/educationSlice";
import instructorSlice from "../features/instructor/instructorSlice";
import experienceSlice from "../features/experience/experienceSlice";
import IdCartSlice from "../features/IdentitiCart/IdCartSlice";
import theme from "../features/theme/themeSlice";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    userType: typeSlice,
    profile: profileSlice,
    education: educationSlice,
    instructor: instructorSlice,
    experience: experienceSlice,
    idCart: IdCartSlice,
    ...asyncReducers,
  });

  return combinedReducer(state, action);
};

export default rootReducer;
