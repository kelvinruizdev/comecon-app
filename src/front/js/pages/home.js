import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { SearchBar } from "../component/searchBar.js";
import { DishCard } from "../component/dishCard.js";
import { ControlPanel } from "./controlPanel.jsx";
import { EditMenu } from "../../js/pages/editMenu.jsx";
import { EditProfile } from "../component/EditProfile.js";

export const Home = () => {

	const { store } = useContext(Context)
	const { results } = store;

	return (
		<>
			<div className="container-fluid">

				{/* BARRA DE BUSQUEDA: */}
				<div>
					<SearchBar />
				</div>

				{/* <ControlPanel /> */}

				{/* <EditMenu /> */}


				{/* <div>
				<EditProfile />
				</div> */}

				{/* Muestra los platos */}
				<div className="container mt-4">
					{
						results.map(food => {
							return (
								<DishCard
									key={food.id}
									restaurant={food.restaurant_name}
									name={food.name}
									description={food.description}
									price={food.price}
									image={food.image_url} />
							);
						})
					}
				</div>
			</div>
		</>

	);
};

export default Home;