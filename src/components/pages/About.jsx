import React from "react";
import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUtensils, 
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function About() {
  const features = [
    {
      icon: faUtensils,
      title: "Curated Recipes",
      description: "Discover delicious meals tailored to your ingredients"
    },
    {
      icon: faLightbulb,
      title: "Creative Cooking",
      description: "Unlock new culinary possibilities with smart suggestions"
    },
    {
      icon: faYoutube,
      title: "Youtube Tutorials",
      description: "Get informative Youtube tutorials for each recipe"
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-yellow-400 min-h-screen w-full flex justify-center items-center">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 lg:p-16 text-center">
              <h1 className="text-5xl font-bold font-heading text-gray-800 mb-6">
                About First Food
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Welcome to First Food, your go-to app for effortless meal inspiration! 
                Simply enter a main ingredient you have on hand, and we'll provide a 
                curated selection of delicious recipes you can make with it.
              </p>
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    <FontAwesomeIcon 
                      icon={feature.icon} 
                      className="text-yellow-500 text-4xl mb-4"
                    />
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              First Food is designed to help you discover new flavors, reduce 
              food waste, and make meal planning easy and enjoyable. We believe 
              in empowering home cooks to create delicious meals with confidence 
              and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}