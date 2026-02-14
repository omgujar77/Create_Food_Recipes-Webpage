import React from "react";

const Footer = () => {
    return (
        <div className="md:w-[80%] m-auto p-8">
            <h2 className="text-green-600 text-center">Features</h2>
            <h1 className="text-2xl font-bold text-center">
                OUR AWESOME SERVICES
            </h1>

            <div className=" md:features md:flex flex-wrap justify-between mt-[5%]">
                <div className=" md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-restaurant-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Quality Food</h1>
                        <p className="text-sm text-zinc-400">
                            We believe great meals start with quality. Discover recipes crafted to deliver rich taste, nutrition, and satisfaction in every bite.
                        </p>
                    </div>
                </div>

                <div className="md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-graduation-cap-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Cook like a Chef</h1>
                        <p className="text-sm text-zinc-400">
                            Step-by-step guidance helps you cook with confidence. Turn everyday cooking into a professional kitchen experience.
                        </p>
                    </div>
                </div>
                <div className="md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-bread-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Ingredients</h1>

                        <p className="text-sm text-zinc-400">
                           Know exactly what goes into your dish. Simple, fresh, and easy-to-find ingredients make cooking stress-free and enjoyable.
                        </p>
                    </div>
                </div>
                <div className="md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-presentation-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Easy Recipe</h1>
                        <p className="text-sm text-zinc-400">
                            No complicated steps or confusing instructions. Just simple recipes anyone can follow and enjoy cooking at home.
                        </p>
                    </div>
                </div>
                <div className="md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-temp-hot-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Serve Hot</h1>
                        <p className="text-sm text-zinc-400">
                            Freshly cooked meals taste the best when served warm. Bring comfort and happiness to the table with every hot serving.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
