import React from "react";

const About = () => {
  return (
    <div className="w-[70%] m-auto mt-[5%] p-10 bg-green-100 rounded-lg">
      <h1 className="text-2xl mt-5 font-extrabold text-green-600 mb-[5%]">
        This Recipe App was created for people who love food and enjoy
        experimenting in the kitchen. From quick everyday meals to special
        occasion dishes, we’re here to inspire your cooking journey. Add your
        own recipes, explore new ideas, and make every meal memorable. Because
        cooking isn’t just about food — it’s about creativity, love, and
        sharing.
      </h1>
     
      <button onClick={() => window.location.href = "/recipes"} className="rounded-md text-md bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Create Recipe &nbsp; &#8594;
                </button>
      
    </div>
  );
};

export default About;
