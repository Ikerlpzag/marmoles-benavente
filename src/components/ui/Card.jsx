import { Link } from "react-router-dom";

export default function Card({
  title,
  description,
  image,
  to,
}) {
  return (
    <Link
      to={to}
      className="group block overflow-hidden rounded-3xl bg-white"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-8">

        <h3 className="text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-neutral-600 leading-7">
          {description}
        </p>

      </div>
    </Link>
  );
}