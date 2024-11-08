import React, { useEffect, useState } from "react";
import { Box, Text, Tabs } from "@radix-ui/themes";
import { X } from "lucide-react";
export default function RecipieDetails({ handleOnClose, activeRecipe }) {
  const [ingredients, setIngredients] = useState([]);
  const extractIngredients = () => {
    //extracting the ingredients from the Recipe
    let temp = [];
    for (let i = 1; i <= 20; i++) {
      if (activeRecipe[`strIngredient${i}`]) {
        temp.push(
          `${activeRecipe[`strMeasure${i}`]} ${
            activeRecipe[`strIngredient${i}`]
          }`
        );
      }
      setIngredients(temp);
    }
  };
  useEffect(() => {
    extractIngredients();
  }, []);
  return (
    <div className="fixed top-0 text-gray-800 left-0 flex justify-center items-center h-screen w-screen z-50 bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white border border-zinc-700 rounded-lg shadow-lg flex-col flex lg:w-[40%] lg:min-h-[40%]">
        <button
          onClick={handleOnClose}
          aria-label="Close"
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-bold text-center p-4">
          {activeRecipe.strMeal}
        </h2>
        {/*Nav Tabs fom radix */}
        <Tabs.Root defaultValue="ingredients" className="w-full">
          <Tabs.List className="flex flex-row px-4  space-x-3" color="red">
            <Tabs.Trigger
              value="ingredients"
              className="hover:cursor-pointer hover:underline hover:text-red-600"
            >
              Ingredients
            </Tabs.Trigger>
            <Tabs.Trigger
              value="instructions"
              className="hover:cursor-pointer hover:underline hover:text-red-600"
            >
              Instructions
            </Tabs.Trigger>
            <Tabs.Trigger
              value="videotutorial"
              className="hover:cursor-pointer hover:underline hover:text-red-600"
            >
              Video Tutorial
            </Tabs.Trigger>
          </Tabs.List>
          <Box pt="3" className="px-4 flex">
            <Tabs.Content value="ingredients">
              {/* Ingredients */}
              <Text size="3" color="red" className="font-semibold font-heading">
                Here is your list of ingredients.
              </Text>
              <ul
                className="flex flex-col mt-1 mb-4 max-h-screen overflow-y-scroll "
                style={{
                  height: "300px",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <Text size="2">{index + 1 + ". " + ingredient}</Text>
                  </li>
                ))}
              </ul>
            </Tabs.Content>
            <Tabs.Content
              value="instructions"
              className=" flex flex-col space-y-2 mb-4"
            >
              <Text size="3" color="red" className="font-semibold font-heading">
                Here are the instructions for your recipe.
              </Text>
              <Text size="2">{activeRecipe.strInstructions}</Text>
            </Tabs.Content>

            <Tabs.Content value="videotutorial" className="w-full">
              <div className="flex justify-center w-full items-center mb-4">
                {/*Embedding the Youtube video tutorial*/}
                <iframe
                  className="w-full h-[200px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[400px]"
                  src={activeRecipe.strYoutube.replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
}
