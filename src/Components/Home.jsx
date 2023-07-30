import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../Utils/api";
import Categories from "./Categories";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <h2 className="home">Home</h2>
      <ul>
        {categories.length < 1 ? (
          <li>
            <p>loading...</p>
          </li>
        ) : (
          <div>
            <li>
              <Link to="/reviews">All Reviews</Link>
            </li>
            <Categories categories={categories} />
          </div>
        )}
      </ul>
    </section>
  );
}
