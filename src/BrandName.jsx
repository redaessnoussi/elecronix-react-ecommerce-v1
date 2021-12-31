import React from "react";
import { Link } from "react-router-dom";

function BrandName() {
  return (
    <Link to="/" className="text-decoration-none">
      <h2 className="text-primary fw-bold mb-0">Elecronix</h2>
    </Link>
  );
}

export default BrandName;
