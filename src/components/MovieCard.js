import { Card, Col, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import StarRating from "./StarRating";
const MovieCard = ({ movie }) => {
  return (
    <Col md={6} lg={4}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/description/${movie.title}`}
      >
        <Card bg="light" style={{ width: "18rem" }}>
          <div>
            <StarRating rating={movie.rating} />
          </div>
          <Card.Img variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title as="h6">{movie.title}</Card.Title>
            <div>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>{movie.description}</Tooltip>}
              >
                <Button>...</Button>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MovieCard;
