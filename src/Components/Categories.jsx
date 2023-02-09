import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <section>
      {categories.map((category) => {
        return (
          <li key={category.slug}>
            <Link to={`/reviews?category=${category.slug}`}>
              {category.slug}
            </Link>
          </li>
        );
      })}
    </section>
  );
}
