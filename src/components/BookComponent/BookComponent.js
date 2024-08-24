import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BookAuthorComponent from "../BookAuthorComponent/BookAuthorComponent";
import "bootstrap/dist/css/bootstrap.min.css";

const BookComponent = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/books?_quantity=10")
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        alert.error(error);
      })
      .finally(() => {});
  }, []);

  function changeBookTitle(book) {
    setBooks((prevBooks) =>
      books.map((item) =>
        item.id === book.id ? { ...item, title: "New Title" } : item
      )
    );
  }

  function handleBookTitleUpdate(book, neValue) {
    setBooks((prevBooks) =>
      books.map((item) =>
        item.id === book.id ? { ...item, title: neValue } : item
      )
    );
  }

  return (
    <>
      <table>
        <tr>
          <th>Book Title</th>
          <th>Change Book Title</th>
          <th>Edit Book Title</th>
        </tr>
        {books.map((item) => (
          <tr>
            <td>{item.title}</td>
            <td>
              <button onClick={() => changeBookTitle(item)}>Change</button>
            </td>
            <td>
              <input
                type="text"
                placeholder="Change..."
                onChange={(e) => handleBookTitleUpdate(item, e.target.value)}
              ></input>
            </td>
          </tr>
        ))}
      </table>

      <Container>
        <Row>
          {books.map((item) => (
            <Col key={item.id} md={3} className="mb-4">
              <Card style={{ border: "light" }}>
                <Card.Img src="https://fastly.picsum.photos/id/33/318/180.jpg?hmac=GuA1JBfgeaUq-WHF0ivXf__iReSCodpAYFYUV5SrbeY"></Card.Img>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>{item.description}</Card.Body>
                <Card.Footer>
                  <BookAuthorComponent author={item.author} />
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BookComponent;
