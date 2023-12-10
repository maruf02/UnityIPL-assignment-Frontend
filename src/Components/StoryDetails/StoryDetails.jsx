import { comment } from "postcss";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const StoryDetails = () => {
  const singleStory = useLoaderData();
  const { title, points, children } = singleStory;
  const [showAllComments, setShowAllComments] = useState(false);
  return (
    <div className="container mx-auto w-full h-full">
      <h2 className="px-10 pt-10">
        <span className="text-rose-600 text-xl font-bold">Title: </span> {title}
      </h2>
      <h2 className="px-10  ">
        <span className="text-rose-600 text-xl font-bold">Points: </span>
        {points}
      </h2>
      {/* all comment section */}
      <h2 className="text-center underline text-3xl pt-5">
        Total Comment: {children.length}
      </h2>
      <div>
        {!showAllComments ? (
          <div>
            {children.slice(0, 10).map((comment) => (
              <div
                key={comment.objectID}
                className="bg-emerald-600 rounded-xl px-5 mt-10  "
              >
                <span className="text-xl text-blue-800">
                  Author: {comment.author} :-
                </span>
                <p className="py-5">
                  <span className="text-lg font-bold">Title: </span>
                  {comment.text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            {children.map((comment) => (
              <div
                key={comment.story_id}
                className="bg-emerald-600 rounded-xl px-5 mt-10  "
              >
                <span className="text-xl text-blue-800">
                  Author: {comment.author} :-
                </span>
                <p className="py-5">
                  <span className="text-lg font-bold">Title: </span>
                  {comment.text}
                </p>
              </div>
            ))}
          </>
        )}
        {children.length > 10 && !showAllComments && (
          <div className="container text-center">
            <button
              onClick={() => setShowAllComments(true)}
              className="btn btn-accent text-white text-xl px-10 my-10 "
            >
              See All Comments
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryDetails;
