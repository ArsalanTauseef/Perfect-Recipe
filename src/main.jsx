import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import {Home} from './Components/Midsection/Nav Pages/Home/Home.jsx'
import App from "./App.jsx";
import { AddRecipe } from "./Components/Midsection/Nav Pages/Add Recipe/AddRecipe.jsx";
import { Blogs } from "./Components/Midsection/Nav Pages/Blogs/Blogs.jsx";
import { Recipe } from "./Components/Midsection/Nav Pages/Recipe/Recipe.jsx";
import { AboutUs } from "./Components/Midsection/Nav Pages/AboutUs/AboutUs.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>} />
      <Route path="addrecipe" element={<AddRecipe/>} />
      <Route path="blogs" element={<Blogs/>} />
      <Route path="recipe" element={<Recipe/>} />
      <Route path="aboutus" element={<AboutUs/>} />
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
