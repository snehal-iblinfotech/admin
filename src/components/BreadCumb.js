import React from "react";
import { Link } from "react-router-dom";
const BreadCumb = ({ link }) => {
  return (
    <div aria-label="breadcrumb" className="bg-white p-3  flex-center">
      <h4 className="text-capitalize">{link}</h4>
      <ol className="breadcrumb ms-auto">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link to={`/${link}`}>{link}</Link>
        </li>
      </ol>
    </div>
  );
};

export default BreadCumb;
