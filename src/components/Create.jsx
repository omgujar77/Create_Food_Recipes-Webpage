import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { recipes } = useSelector((state) => state.recipeReducer);

    const [image, setimage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");

    // 🔥 Convert image to base64
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setimage(reader.result);   // base64 image
            setPreview(reader.result); // preview
        };
    };

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newRecipe = {
            id: nanoid(),
            image,
            title,
            description,
            ingredients,
            instructions,
        };

        localStorage.setItem(
            "recipes",
            JSON.stringify([...recipes, newRecipe])
        );

        dispatch(asyncgetrecipies());
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };

    return (
        <form onSubmit={SubmitHandler} className="w-[70%] m-auto pb-5">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
            </h1>

            {/* ✅ Image Upload */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
            />

            {/* ✅ Image Preview */}
            {preview && (
                <img
                    src={preview}
                    alt="preview"
                    className="w-40 h-40 object-cover rounded-md mb-5"
                />
            )}

            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />

            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe description..."
            ></textarea>

            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Use comma to separate ingredients..."
            ></textarea>

            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Use comma to separate instructions..."
            ></textarea>

            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;
