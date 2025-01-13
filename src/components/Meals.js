import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';

const Meals = () => {
  const [meals, setMeals] = useState([]); // State to store the fetched meals
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store any errors

  // Fetch meals data from the backend
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('http://localhost:3001/meals'); // Fetch data from the backend
        if (!response.ok) {
          throw new Error('Failed to fetch meals data'); // Handle HTTP errors
        }
        const data = await response.json(); // Parse the JSON response
        setMeals(data); // Update the state with the fetched meals
        console.log('Fetched meals:', data); // Log the fetched data to the console
      } catch (error) {
        console.error('Error fetching meals:', error);
        setError(error.message); // Set the error state if something goes wrong
      } finally {
        setIsLoading(false); // Set loading to false after the request completes
      }
    };

    fetchMeals(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  // Display a loading message while data is being fetched
  if (isLoading) {
    return <p>Loading meals...</p>;
  }

  // Display an error message if something went wrong
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render the list of meals
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;