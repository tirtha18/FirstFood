import React, { useEffect, useState } from "react";
import { GoTrophy } from "react-icons/go";
import axios from "axios";
import debounce from "lodash.debounce";
import RecipeSkl from "../ui/skeletons/RecipeSkl";
import RecipieDetails from "../ui/reusables/RecipieDetails";
export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeRecipe, setActiveRecipe] = useState({});
  const [showRecipeDetails, setShowRecipeDetails] = useState(false);
  const getRecipieDetails = async (ids) => {
    try {
      const requests = ids.map((id) =>
        //fetching the recipe details of the recipes outputed by the API through their respective ids.
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      );
      const responses = await Promise.all(requests);
      const recipes = responses.map((res) => res.data.meals[0]);
      return recipes;
    } catch (error) {
      console.error(error);
      setError("Failed to fetch recipe details.");
    }
  };
  const handleViewDetail = () => setShowRecipeDetails(true); //handleViewDetail
  const handleOnClose = () => setShowRecipeDetails(false);
  const searchByMainIngredient = debounce(async (ingredient) => {
    if (!ingredient) {
      setRecipes([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      // Fetching recipes based on the main ingredient
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const recipes = response.data.meals;
      if (recipes) {
        const detailedRecipes = await getRecipieDetails(
          recipes.map((recipe) => recipe.idMeal)
        );
        setRecipes(detailedRecipes);
      } else {
        setRecipes([]);
        setError("No recipes found.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch recipes.");
    } finally {
      setLoading(false);
    }
  }, 300);

  const getStartingRecipeCards = async () => {
    setLoading(true);
    try {
      // Fetching 6 random recipes by 6 diiferent API calls as the API is limited to generating only 1 recipe per call hence Jugaad
      const request = Array.from({ length: 6 }, () =>
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      );
      const response = await Promise.all(request);
      const recipes = response.map((res) => res.data.meals[0]);
      setRecipes(recipes);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch starting recipes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStartingRecipeCards();
  }, []);

  return (
    <div className="w-screen justify-center items-center flex flex-col text-gray-800">
      {/* Header Section */}
      <section className="w-full flex flex-col relative items-center">
        <div className="h-[58vh] bg-yellow-400 w-full flex flex-col justify-center items-center">
          <h1 className="font-semibold text-6xl font-heading mb-14 absolute">
            What's Cooking?
          </h1>
          <p className="w-1/2 text-xl text-center mt-40">
            Have a main ingredient in mind? Explore delicious recipes crafted
            around what you have! Just enter your ingredient in the search bar
            below and get started!
          </p>
        </div>
        <input
          className="z-10 absolute w-2/3 px-8 shadow-sm shadow-gray-500 -bottom-7 h-16 text-red-500 text-xl"
          type="text"
          placeholder="Main Ingredient"
          onChange={(e) => searchByMainIngredient(e.target.value)}
        />
      </section>

      {/* Recipes Section */}
      <section className="w-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold font-heading text-yellow-500 mt-24">
          <span className="flex flex-row gap-3 items-center">
            <GoTrophy className="text-yellow-500" size={48} /> Top Rated
            Recipes!
          </span>
        </h1>
        <p className="mt-6 w-1/2 text-center ">
          Discover our top-rated recipes, loved by home cooks and foodies! From
          comforting classics to exciting new flavors, each recipe is crafted to
          impress. Try one today and find your new favorite dish!
        </p>
        {/* Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full p-4 mt-8">
          {loading ? (
            <div className="w-screen">
              <RecipeSkl className="" />
            </div>
          ) : error ? (
            <div className="text-red-500 text-4xl font-allura w-screen text-center">
              <h1>{error}</h1>
            </div>
          ) : (
            recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{recipe.strMeal}</h3>
                  <button
                    onClick={() => {
                      setActiveRecipe(recipe);
                      handleViewDetail();
                    }}
                    className="mt-2 bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      {showRecipeDetails && <RecipieDetails handleOnClose={handleOnClose} activeRecipe={activeRecipe} />}
    </div>
  );
}
