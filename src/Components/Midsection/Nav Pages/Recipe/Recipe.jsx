import React from "react";
import "./Recipe.css";
import { useEffect, useState } from "react";

export const Recipe = () => {
  const APP_ID = "7353ccff";
  const APP_KEY = "36126f1ddcf98cdd57088dfb7ccc6537";
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true); // Set loading to true at the beginning of the fetch request
    fetch(
      `https://api.edamam.com/search?q=recipe&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // The response contains the list under 'hits'
        setLoading(false);
        setList(data.hits);
        console.log(data.hits);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  }, []);

  return (
    <main className="addRecMain">
      <main className="upper-main-section">
        <div className="upper-div-one">
          <h1>Recipe</h1>
        </div>
        <div className="upper-div-two">
          <div></div>
        </div>
      </main>
      <main>
        <div className="mainRecipePage">
          <h1 style={{color:'#B65F54'}}>Recipes</h1>
          <div className='arrDiv'>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              list.map((item, index) => (
                <div className="arrCard" key={index}>
                  <img src={item.recipe.image} alt="" />
                  <h1 style={{fontSize:'20px'}}>{item.recipe.label} hi</h1>
                  <p>{item.recipe.ingredientLines.join(", ")} hi</p>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </main>
  );
};
