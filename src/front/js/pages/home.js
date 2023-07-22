import React, { useContext} from "react";
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
				<div>
					<SearchBar />
				</div>

				{/* Muestra los platos */}
				<div className="container grid mt-4">
					{
						results.map(dish => {
							return (
								<DishCard
									key={dish.id}
									dish={dish} />
							);
						})
					}
				</div>
			</div>
		</>

	);
};

export default Home;