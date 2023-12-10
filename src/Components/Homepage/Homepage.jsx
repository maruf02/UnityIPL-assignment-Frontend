import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Homepage = () => {
  const [story, setStory] = useState({ hits: [] });

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=test")
      .then((res) => res.json())
      .then((data) => setStory(data));
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const SearchText = form.searchText.value;
    console.log(SearchText);
  };

  return (
    <div>
      {/* for search section */}
      <div>
        <form onSubmit={handleSearch} className="flex justify-center py-10">
          <input
            type="text"
            name="searchText"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs bg-transparent"
          />
          <button className="btn btn-primary text-black text-lg mx-2">
            Search
          </button>
        </form>
      </div>
      {/* for search result section */}
      <div>
        <h2 className="text-2xl underline font-bold text-center mb-10">
          Search Result:
        </h2>
        <section className="container mx-auto text-center  w-3/4  h-full mb-10 ">
          {story.hits.map((post) => (
            <div
              key={post.objectID}
              className="bg-emerald-600 rounded-xl px-5 mt-10  "
            >
              <p className="pt-5">
                <span className="text-lg font-bold">Title: </span>
                {post.title}
              </p>
              <Link>
                <p className="flex flex-row text-lg justify-end pb-4 ">
                  See details <FaArrowRight className="mt-2 text-base ml-1" />
                </p>
              </Link>
            </div>
          ))}

          {/* <div className="bg-emerald-600 rounded-xl px-5 mt-10  ">
            <p className="pt-5">
              fjkdfkjdlfjsdfjldsfjl fjsdfj dsf sdfsd fj dlf sdf dsf dsf{" "}
            </p>
            <Link>
              <p className="flex flex-row text-lg justify-end pb-4 ">
                See details <FaArrowRight className="mt-2 text-base ml-1" />
              </p>
            </Link>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Homepage;
