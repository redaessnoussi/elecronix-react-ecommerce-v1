import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductCategoryCard({ categoryName, categoryClass, margin }) {
  return (
    <Card className={categoryClass + " h-50 " + margin}>
      <Card.Body className="align-items-center d-flex flex-column justify-content-center">
        <Button variant="grey-70" className="fw-bold px-4 py-3">
          {categoryName}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCategoryCard;
