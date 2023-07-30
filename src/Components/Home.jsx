import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../Utils/api";
import Categories from "./Categories";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    })
    .catch(err => console.log(err))
  }, []);

  console.log(categories.length);

  return (
    <section>
      <h2 className="home">Home</h2>
      <ul>
        <li>
          <Link to="/reviews">All Reviews</Link>
        </li>
        {categories.length < 1 ? <p>loading...</p> : <Categories categories={categories} />}
      </ul>
    </section>
  );
}
