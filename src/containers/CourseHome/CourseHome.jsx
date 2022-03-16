import React, { useState } from "react";
import CourseCard from "../../component/CourseCard/CourseCard";
import SearchBox from "../../component/SearchBox/SearchBox";
import "./CourseHome.scss";

const CourseHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  return (
    <>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />

      <div className="new">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
};
export default CourseHome;
