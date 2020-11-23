import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Container>
      <header class="my-5 text-center">
        <span class="h1 font-weight-bolder">Shipping</span>
        <br />
        <Link to="/dashboard">
          <span class="h1 font-weight-bolder text-danger">Dashbaord</span>
        </Link>
      </header>

      <section name="progress-barr" class="my-5">
        <ol class="progressbar progress--large" id="progressbar-res">
          <li class="is-complete" data-step="1">
            Ordered<p class="text-info">3/11/2563</p>
          </li>
          <li class="is-complete" data-step="2">
            Ready<p class="text-info">4/11/2563</p>
          </li>
          <li class="is-active" data-step="3">
            Shipped<p class="text-info">5/11/2563</p>
          </li>
          <li class="progress__last" data-step="4">
            Estimated delivery<p class="text-info">8/11/2563</p>
          </li>
        </ol>
      </section>

      <span class="h5 font-weight-bold my-5 float-left">Details</span>

      <section name="contents" class="size-l">
        <Table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>3/11/2563 - 10:21</th>
              <td>-</td>
              <td>Ordered</td>
            </tr>
            <tr>
              <th>4/11/2563 - 13:21</th>
              <td>Lad Krabang</td>
              <td>
                Ready
                <br />
                Waiting for delivery
              </td>
            </tr>
            <tr>
              <th>5/11/2563 - 15:21</th>
              <td>Transit Station</td>
              <td>
                Shipped
                <br />
                Tracking: TH0124345648
              </td>
            </tr>
            <tr>
              <th>6/11/2563 - 9:21</th>
              <td>Destination</td>
              <td>Success</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </Container>
  );
};

export default Home;
