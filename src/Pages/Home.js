import React, { useState } from "react";
import styles from "../Styles/home.module.css";
import Card from "./Card";
import API from "../Utils";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    handleSearch();
  };

  const handleSearch = () => {
    const customFetch = async () => {
      const response = await fetch(
        `${API.ROOT_URL}/?type=public&q=${input}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    customFetch();
  };

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={handleChange}
        className={styles.search}
      />
      <div className={styles.list}>
        {recipes.map((recipe, index) => (
          <Card data={recipe} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
