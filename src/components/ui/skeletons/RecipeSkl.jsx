import React from "react";

export default function RecipeSkl() {
  return (
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  p-4 mt-8 w-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-200"></div>

            <div className="p-4">
              {/* Title Skeleton */}
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>

              {/* Button Skeleton */}
              <div className="h-8 bg-gray-200 rounded w-1/2 mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    
  );
}
