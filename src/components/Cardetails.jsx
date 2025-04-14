import React from "react";
import { useParams, Link } from "react-router-dom";
import cars from "../data/cars.json" // Import JSON data

const CarDetails = () => {
  const { id } = useParams(); // Get the car's ID from the URL
  const car = cars.find((car) => car.id === parseInt(id)); // Find the car based on ID

  if (!car) {
    return <p>Car not found!</p>;
  }

  return (
    <div className="car-details max-w-4xl mx-auto mt-10 text-black">
      <Link to="/" className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Back to Collection
      </Link>
      <h1 className="text-4xl mb-5">{car.name}</h1>
      <img
        src={require(`../data/${car.image}`)}
        alt={car.name}
        className="w-full mb-5"
      />
      <p className="text-lg mb-5">{car.description}</p>
      <p className="text-lg">{car.moreDetails}</p>
    </div>
  );
};

export default CarDetails;