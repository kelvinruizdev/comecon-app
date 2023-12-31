import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { DishCard } from "../component/dishCard.js";
import { Link } from "react-router-dom";
import { Loader } from "../component/loader.jsx";

const initialState = [
  {
    // id: number,
    image: "",
    restaurant: "",
    name: "",
    price: "",
    description: "",
  },
];

export const EditMenu = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  const { user, dishes, restaurant } = store;

  useEffect(() => {
    if (store.user == null || store.user.role == "User") {
      navigate("/access-denied")
    } else {
      if (user != undefined && user.restaurant != undefined) {
        actions.getAllDishes(user.restaurant.id);
      }
    }
  }, [user?.index]);

  return (
    <>
      <Loader />
      <div className="panel container mt-4 p-4 bg-white border border-1 rounded-3">
        <div className="row justify-content-center">
          <h2 className="text-center bg-danger p-2 text-white rounded-1 title fs-3">
            <strong>Editar Menú</strong>
          </h2>
          <div className="d-grid gap-2 d-md-flex justify-content-end">
            <Link to="/restaurant/menu/food">
              <button className="btn btn-success" type="button">
                <strong>Agregar plato</strong>
              </button>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center col-12 px-0 m-0 mt-3">
          <div className="col-md-12 col-lg-10 justify-content-center">
            {restaurant?.foods.map((dish, index) => {
              console.log(dish);
              return <DishCard
                key={index}
                dish={dish} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
