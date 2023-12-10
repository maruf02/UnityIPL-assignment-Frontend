import React from "react";

const Homepage = () => {
  return (
    <div>
      {/* for search section */}
      <div className="flex justify-center py-10">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs bg-transparent"
        />
        <button className="btn btn-primary text-black text-lg mx-2">
          Search
        </button>
      </div>
      {/* for search result section */}
      <div>
        <h2 className="text-2xl underline font-bold text-center">
          Search Result:
        </h2>
        <section className="container mx-auto text-center  w-3/4  h-[1000px]"></section>
      </div>
    </div>
  );
};

export default Homepage;
