import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

import { SearchBar } from "../component/searchBar.js";
import { DishCard } from "../component/dishCard.js";

export const Home = () => {

	const { store } = useContext(Context)
	const { results } = store;

	return (
		<>
			<div className="container-fluid">

				{/* BARRA DE BUSQUEDA: */}
				<SearchBar />

				{/* Muestra los platos */}
				{
					results.map( food => {
						return (
							<DishCard 
								key={food.id} 
								restaurant="probando" 
								name={food.name}
								description={food.description}
								price={food.price} 
								image={food.image_url} />
						);
					})
				}
			</div>
		</>

	);
};

export default Home;