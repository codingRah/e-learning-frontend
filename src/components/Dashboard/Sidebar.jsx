import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const { paths } = props;
  return (
    <div>
      {paths.map((path) => (
        <Link to={path.url} className="flex items-center ">
          {path.name} {path.icon}
        </Link>
      ))}
    </div>
  );
}
