import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  const [story, setStory] = useState({ hits: [] });
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(`https://hn.algolia.com/api/v1/search?query=${searchText}`)
        .then((res) => res.json())
        .then((data) => setStory(data));
    }
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const SearchText = form.searchText.value;
    // console.log(SearchText);
    setSearchText(SearchText);
  };

  return (
    <div data-aos="fade-down" data-aos-duration="3000">
      <Helmet>
        <title>Home || UnityIPL </title>
      </Helmet>
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
          {searchText ? (
            <>
              {story.hits.map((post) => (
                <div
                  key={post.objectID}
                  className="bg-emerald-600 rounded-xl px-5 mt-10  "
                >
                  <p className="pt-5">
                    <span className="text-lg font-bold">Title: </span>
                    {post.title}
                  </p>
                  <Link to={`/storyDetails/${post.objectID}`}>
                    <p className="flex flex-row text-lg justify-end pb-4 ">
                      See details{" "}
                      <FaArrowRight className="mt-2 text-base ml-1" />
                    </p>
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="text-red-800 text-2xl font-bold">
                For See Result Please Search with your keyword
              </p>
            </>
          )}

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
