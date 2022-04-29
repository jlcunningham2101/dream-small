import React from "react";
import { Link } from "react-router-dom";

const TeacherList = ({ teacherCount, username, teachers }) => {
  if (!teachers || !teachers.length) {
    return (
      <p className="bg-dark text-light p-3">
        {username}, here are some additional teachers to add!
      </p>
    );
  }

  return (
    <div>
      <h5>
        {username}'s {teacherCount}{" "}
        {teacherCount === 1 ? "teacher" : "teachers"}
      </h5>
      {teachers.map((teacher) => (
        <button className="btn w-100 display-block mb-2" key={teacher._id}>
          <Link to={`/profile/${teacher.username}`}>{teacher.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default TeacherList;
