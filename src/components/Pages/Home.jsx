import { useLoaderData } from "react-router-dom";
import Coffee_Card from "./Coffee_Card";
import { useState } from "react";

const Home = () => {
  const initialCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(initialCoffees);
  return (
    <div>
      <div className="text-center space-y-4">
        <h1 className="text-2xl">Total Coffee Available: {coffees.length}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {coffees.map((coffee) => (
            <Coffee_Card key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee_Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
