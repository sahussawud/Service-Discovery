import axios from "axios";
import React, { Component } from "react";
import "../App.css";


class Studentservice extends Component {
  state = {
    name: null,
    id: null
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/v1/student/61070003")
      .then((res) => {
        this.setState({
            name: res.data.name,
            id: res.data.id
        })
      })
      .catch((er) => console.log(er));
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5">
              <h1 className="font-weight-light text-center">
                List Services Application
              </h1>
              <div style={{ height: "700px" }}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">
                        {this.state.id}
                        {this.state.name}
                    </p>
                  </div>
                </div>
              </div>
              <p className="lead mb-0">You've reached the end!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Studentservice;
