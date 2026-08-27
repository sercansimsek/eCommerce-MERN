import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  const { image, name, price } = product;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
