import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Description = ({ movies, match }) => {
  let movie = movies.find((movie) => movie.title === match.params.movieName);

  return (
    <div>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col>
            <img
              className="img-fluid"
              src={movie.posterURL}
              alt="poster movie"
            />
          </Col>
          <Col>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <a href={movie.trailerLink} className="btn btn-light">
              Movie Trailer
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Description;
