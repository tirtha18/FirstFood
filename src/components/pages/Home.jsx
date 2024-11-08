import React from "react";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
const featuredRecipes = [
  {
    title: "Chicken Tikka Masala",
    image:
      "https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg",
  },
  {
    title: "Margherita Pizza",
    image:
      "https://saltandbaker.com/wp-content/uploads/2023/03/margherita-pizza.jpg",
  },
  {
    title: "Avocado Toast",
    image:
      "https://www.eatingwell.com/thmb/5WPPXV5n1fFOKXSeO8s3D2KXIGM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EatingWell-April-Avocado-Toast-Directions-03-23712072b7df44b8b3cd87681700e67b.jpg",
  },
  {
    title: "Spaghetti Carbonara",
    image:
      "https://www.marthastewart.com/thmb/S9xVtnWSHldvxPHKOxEq0bALG-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-338686-spaghetti-carbonara-hero-3x2-69999-560b45d1dd9f4741b717176eff024839.jpeg",
  },
  {
    title: "Caesar Salad",
    image:
      "https://cookingwithayeh.com/wp-content/uploads/2023/11/Healthy-Caesar-Salad-Without-Anchovies-SQ-5.jpg",
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white  ">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-[90vh] bg-yellow-400 text-gray-800 text-center">
          <h1 className="text-6xl font-bold mb-4 font-heading">
            Discover Delicious Recipes
          </h1>
          <p className="mb-4">
            Explore a variety of recipes tailored just for you!
          </p>
          <button
            className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
            onClick={() => navigate("/recipe")}
          >
            Get Started
          </button>
        </section>

        {/* Featured Recipes Section */}
        <section className="py-16 px-10">
          <h2 className="text-4xl font-bold text-center mb-8 font-heading">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{recipe.title}</h3>
                  <button className="mt-2 bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-600 transition duration-300">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}
