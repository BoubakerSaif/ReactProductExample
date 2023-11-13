import React from "react";
import Card from "react-bootstrap/Card";

const ProductCard = ({ productInfo }) => {
  console.log(productInfo);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {productInfo.name} </Card.Title>
          <Card.Text>{productInfo.color}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
