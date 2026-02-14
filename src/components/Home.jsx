import React from "react";

const Home = () => {
    return (
        <div className="px-5 md:w-full flex justify-between items-center   mt-[3%]">
            <div className="h-[60vh] p-4 md:left w-1/2">
            <img
                className="absolute right-5 w-1/2 md:w-1/3 animate-[spin_25s_linear_infinite]"
                src="./src/images/Cooking-Recipe.png"
                alt=""
            />
                
                <h1 className="text-4xl md:text-6xl font-extrabold text-green-600">
                    Discover, Cook & Share Your Favorite Recipes
                </h1>
                 <p className="w-[90vw] md:w-[43vw] md:text-zinc-400 mt-5 mb-10 ">
                    Welcome to your personal recipe hub! Explore delicious dishes from around the world, find inspiration for your next meal, and keep all your favorite recipes in one place. Ready to create something amazing? Start by adding your own recipe and share your taste with everyone.
                </p>
                <button onClick={() => window.location.href = "/recipes"} className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
            </div>
           
        </div>
    );
};

export default Home;
