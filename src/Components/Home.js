import React, { Component } from "react";
import { Container, Jumbotron, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

class Home extends Component {
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
    return (
      <div>
        <div id="bg" />
        <Container>
          <header class="my-5 text-center">
            <span class="h1 font-weight-bolder">Shipping</span>
          </header>

          <section name="progress-barr" class="my-5">
            <ol class="progressbar progress--large" id="progressbar-res">
              <li class="is-complete" data-step="1">
                Ordered
              </li>
              <li class="is-complete" data-step="2">
                Ready
              </li>
              <li class="is-active" data-step="3">
                Shipped
              </li>
              <li class="progress__last" data-step="4">
                Estimated delivery
              </li>
            </ol>
          </section>

          <Jumbotron className="bg-white">
            <span
              class="font-weight-bold mb-5 float-left text-uppercase"
              style={{ fontSize: 30 }}
            >
              Details
            </span>
            <section name="contents" class="size-l">
              <Table striped bordered hover class="table table-striped">
                <thead>
                  <tr style={{ fontSize: 25 }}>
                    <th scope="col">Date</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.shippingdata.map((person) => (
                    <tr className="font-weight-light" style={{ fontSize: 20 }}>
                      <th className="font-weight-light">
                        <Moment date={person.timestamp} />
                      </th>
                      <td className="font-weight-light">{person.name}</td>
                      <td className="font-weight-light">{person.price}</td>
                    </tr>
                  ))}
                  {/* <tr className="font-weight-light" style={{ fontSize: 20 }}>
                    <th className="font-weight-light">4/11/2563 - 13:21</th>
                    <td>Lad Krabang</td>
                    <td>
                      Ready
                      <br />
                      Waiting for delivery
                    </td>
                  </tr>
                  <tr className="font-weight-light" style={{ fontSize: 20 }}>
                    <th className="font-weight-light">5/11/2563 - 15:21</th>
                    <td>Transit Station</td>
                    <td>
                      Shipped
                      <br />
                      Tracking: TH0124345648
                    </td>
                  </tr>
                  <tr className="font-weight-light" style={{ fontSize: 20 }}>
                    <th className="font-weight-light">6/11/2563 - 9:21</th>
                    <td>Destination</td>
                    <td>Success</td>
                  </tr> */}
                </tbody>
              </Table>
              <Link to="/">
                <Button className="my-4" variant="primary" size="lg" block>
                  Back
                </Button>
              </Link>
            </section>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Home;
