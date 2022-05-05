import React from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import TeacherList from "../components/TeacherList";
//import ScheduleForm from "../components/ScheduleForm";
//import ScheduleList from "../components/ScheduleList";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <PostForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Here are some recents posts for you to review at your convenience..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <TeacherList
              username={userData.me.username}
              teacherCount={userData.me.teacherCount}
              teacher={userData.me.teachers}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;

//add scheduler to homepage - only shows posts and teachers list on homepage
