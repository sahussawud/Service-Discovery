import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Container, Jumbotron, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { ColumnToggle } from "react-bootstrap-table2-toolkit";
import axios from "axios";

class Dashboard extends Component {
  testIcon = () => {
    return (
      <Link to="/Home">
        <Button>Click me </Button>
      </Link>
    );
  };

  state = {
    shippingdata: [],
  };

  componentDidMount() {
    axios
      .get(`http://shipping-sop.herokuapp.com/shipping/orderItem/?format=json`)
      .then((res) => {
        const shippingdata = res.data;
        this.setState({ shippingdata });
      });
  }

  render() {
    const { ToggleList } = ColumnToggle;
    const columns = [
      {
        dataField: "id",
        text: "ID",
      },
      {
        dataField: "name",
        text: "Transport",
      },
      {
        dataField: "tracking",
        text: "Tracking ID",
      },
      {
        dataField: "status",
        text: "Status",
      },
      {
        dataField: "action",
        text: "Actions",
      },
    ];

    const products = [
      {
        id: 1,
        name: "gggggggggggg",
        tracking: "TH123456789",
        status: "Process",
        action: this.testIcon(),
      },
      {
        id: 2,
        name: "fffffffffff",
        tracking: "TH123456789",
        status: "Finish",
        action: this.testIcon(),
      },
    ];

    return (
      <div>
        <Container fluid>
          <div className="m-5">
            <p style={{ fontSize: 50 }}>OVERVIEW</p>
            <div className="row d-flex justify-content-between">
              <Card
                className="shadow-lg bg-info"
                style={{ width: "20rem", marginTop: 20 }}
              >
                <Card.Body>
                  <Card.Title className="py-3">
                    <p className="h2 text-uppercase text-white font-weight-bold">
                      ordered
                    </p>
                    <hr />
                  </Card.Title>
                  <Card.Text className="py-3">
                    <p className="display-4 float-right font-weight-bold text-white">
                      21
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="shadow-lg bg-primary"
                style={{ width: "20rem", marginTop: 20 }}
              >
                <Card.Body>
                  <Card.Title className="py-3">
                    <p className="h2 text-uppercase text-white font-weight-bold">
                      shipped
                    </p>
                    <hr />
                  </Card.Title>
                  <Card.Text className="py-3">
                    <p className="display-4 float-right font-weight-bold text-white">
                      21
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="shadow-lg bg-danger"
                style={{ width: "20rem", marginTop: 20 }}
              >
                <Card.Body>
                  <Card.Title className="py-3">
                    <p className="h2 text-uppercase text-white font-weight-bold">
                      Problem
                    </p>
                    <hr />
                  </Card.Title>
                  <Card.Text className="py-3">
                    <p className="display-4 float-right font-weight-bold text-white">
                      21
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="shadow-lg bg-success"
                style={{ width: "20rem", marginTop: 20 }}
              >
                <Card.Body>
                  <Card.Title className="py-3">
                    <p className="h2 text-uppercase text-white font-weight-bold">
                      Finish
                    </p>
                    <hr />
                  </Card.Title>
                  <Card.Text className="py-3">
                    <p className="display-4 float-right font-weight-bold text-white">
                      21
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <hr />
          <Container>
            <Jumbotron
              className="bg-white shadow-lg"
              style={{ borderRadius: 30, backgroundColor: "gray" }}
            >
              <p style={{ fontSize: 50, justifyContent: "center" }}>
                Secondary
              </p>
              <BootstrapTable
                rowStyle={{
                  fontSize: 20,
                  fontWeight: "lighter",
                }}
                headerClasses="h3 border-5"
                keyField="id"
                data={products}
                columns={columns}
              />
            </Jumbotron>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
