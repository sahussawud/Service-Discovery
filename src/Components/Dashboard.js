import React, { Component } from "react";
import { Container, Jumbotron, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Jumbotron className="my-5">
          <Container>
            <p className="h2">DASHBOARD</p>
            <div className="row d-flex justify-content-between">
              <Card style={{ width: "18rem", marginTop: 20 }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", marginTop: 20 }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", marginTop: 20 }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <Link to="/">
              <Button variant="primary" style={{ marginTop: 20 }}>
                Home
              </Button>
            </Link>
          </Container>
        </Jumbotron>
      </Container>
    );
  }
}

export default Dashboard;
