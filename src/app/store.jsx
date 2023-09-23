import { configureStore } from "@reduxjs/toolkit";
import navsSlice from "../internProject/navsSlice";
import PrefeSlice from "../internProject/prefrenceIntern/prefeSlice";
import dataBoxSlice from "../internProject/component/dataBoxSlice";
import userSlice from "../internProject/userPage/userSlice";
import courses from "../internProject/placementCourses/coursesSlice";

export const Store = configureStore({
  reducer: {
    navbarSlice: navsSlice,
    PrefrSlice: PrefeSlice,
    boxSlice: dataBoxSlice,
    userSlice: userSlice,
    courses: courses,
  },
});
