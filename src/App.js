import "./styles.css";
import { useState } from "react";

const pizzaData = {
  vegpizzas: [
    { name: "Mexican green wave", rating: "4.8 / 5", category: "🟩" },
    { name: "Indi Tandoori Paneer", rating: "4.2 / 5", category: "🟩" },
    { name: "Farmhouse", rating: "3.8 / 5", category: "🟩" }
  ],
  nonvegpizzas: [
    { name: "Pepper BBQ Chicken", rating: "4.6 / 5", category: "🟥" },
    { name: "Chicken Sausage", rating: "4.2 / 5", category: "🟥" },
    { name: "Chicken Dominator", rating: "4 / 5", category: "🟥" }
  ],
  gourmetpizzas: [
    { name: "Smoked Chicken Gourmet Pizza", rating: "4.8 / 5", category: "🟥" },
    { name: "The 5 Cheese Gourmet Pizza", rating: "4 / 5", category: "🟩" },
    { name: "Al Fungi Gourmet Pizza", rating: "3.8 / 5", category: "🟩" }
  ],
  pizzamania: [
    { name: "Golden Corn", rating: "4.6 / 5", category: "🟩" },
    { name: "Non Veg Loaded", rating: "4.2 / 5", category: "🟥" },
    { name: "Onion", rating: "3.8 / 5", category: "🟩" }
  ]
};

export default function App() {
  const [category, setCategory] = useState("pizzamania");

  const handleCategoryClick = (e) => {
    // console.log(e.target.innerHTML.toLowerCase().trim().replace(" ", ""));
    setCategory(e.target.innerHTML.toLowerCase().trim().replace(" ", ""));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>🍕 Pizzeria 🍕</h1>
        <p>We recommend the best pizzas</p>
      </div>

      <div
        className="wrapper"
        style={{ borderBottom: "1px solid lightgray", padding: "16px" }}
      >
        <div className="wrapper_tabs">
          <span onClick={handleCategoryClick}>Veg Pizzas</span>
          <span onClick={handleCategoryClick}>Nonveg Pizzas</span>
          <span onClick={handleCategoryClick}>Gourmet Pizzas</span>
          <span onClick={handleCategoryClick}>Pizza Mania</span>
        </div>
      </div>

      <div className="wrapper">
        <div className="wrapper_menu">
          {pizzaData[category].map((element, idx) => (
            <div className="wrapper_menu_card">
              <div className="card_title">
                <p>{element.name}</p>
                <span>{element.category}</span>
              </div>
              <p>{element.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
