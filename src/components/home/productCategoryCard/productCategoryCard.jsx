import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCategoryCard({ categoryName, categoryClass, margin }) {
  return (
    <Card className={categoryClass + " h-50 " + margin}>
      <Card.Body className="align-items-center d-flex flex-column justify-content-center">
        <Link to="/products">
          <Button variant="grey-70" className="fw-bold px-4 py-3">
            {categoryName}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCategoryCard;
