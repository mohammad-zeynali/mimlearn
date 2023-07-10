import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import globalStatesSlice from "../reducers/globalStates";
import coursesStateSlice from "../reducers/coursesStateSlice";

const store = configureStore({
  reducer: {
    globalStates: globalStatesSlice,
    courses: coursesStateSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export default store;
