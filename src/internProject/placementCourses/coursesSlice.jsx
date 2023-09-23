import { createSlice } from "@reduxjs/toolkit";
import fullStackImage from "../../assets/Full_Stack.png";
import DsImage from "../../assets/data-science.jpg";
import hrmImage from "../../assets/hrm.jpeg";
import bdcImage from "../../assets/bdc.jpeg";
import dmcImage from "../../assets/dmc.jpeg";
import eviImage from "../../assets/evi.jpeg";
import uiImage from "../../assets/ui.jpeg";
import pmcImage from "../../assets/pmc.png";

const initialState = {
  data: [
    {
      id: 1,
      image: fullStackImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
    {
      id: 2,
      image: DsImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
    {
      id: 3,
      image: hrmImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
    {
      id: 4,
      image: bdcImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
    {
      id: 5,
      image: dmcImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
    {
      id: 6,
      image: eviImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
    {
      id: 7,
      image: pmcImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
    {
      id: 8,
      image: uiImage,
      course: "Full Stack Develeopment Course",
      duration: "6 month course",
      gaurantee: "Course with gaurantee internship",
      salary: "Highest stipned offered Rs 1.1 Lac/month",
      internship: "1.08 Lac+job/internship oppertunities",
      buttontext: "Know more >",
    },
  ],
};

const course = createSlice({
  name: "courses",
  initialState,
  reducers: {},
});

export default course.reducer;
