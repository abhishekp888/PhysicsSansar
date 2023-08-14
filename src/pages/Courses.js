import React from "react";
import OurCourses from "./components/CoursesCom/OurCoureses";
import CourseOverview from "./components/CoursesCom/CourseOverview";
import StudentJourney from "./components/CoursesCom/StudentJourney";
import JourneyHead from "./components/CoursesCom/JourneyHead";
import Upcoming_courses from "./components/CoursesCom/upcoming_courses";
import Navbar from "./components/usedByAll/Navbar";
import Footer from "./components/usedByAll/Footer";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <Upcoming_courses />
      <OurCourses />
      <CourseOverview />
      <JourneyHead></JourneyHead>
      <StudentJourney />
      <Footer />
    </div>
  );
};

export default Courses;
