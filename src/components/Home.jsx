import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-10 text-lime-800'>Total Coffees: {coffees.length}</h2>
            <div className='grid md:grid-cols-2 gap-6 my-14 lg:mx-14'>
                {
                    coffees.map(coffee=> <CoffeeCard
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;