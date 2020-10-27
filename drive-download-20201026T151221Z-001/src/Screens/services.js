import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Services = () => {
  const Checkservice = [
    {
      name: "STUDENTSERVICE",
      img: "https://www.thailand.intel.com/content/dam/www/public/us/en/images/MRM/teacher-student-laptop-16x9.png.rendition.intel.web.864.486.png",
      status: "DOWN",
      instance: null
    },
    {
      name: "TEACHERSERVICE",
      img: "https://en.arij.net/wp-content/uploads/sites/3/2018/07/courseintroimage.jpg",
      status: "DOWN",
      instance: null
    },
    {
      name: "COURSESERVICE",
      img: "https://elearningindustry.com/wp-content/uploads/2016/02/litmus-test-in-elearning-would-you-enroll-in-your-own-elearning-course-e1454415145719.jpg",
      status: "DOWN",
      instance: null
    },
    {
      name: "ENROLLSERVICE",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/92f62359434977.5a21ba517bdd2.png",
      status: "DOWN",
      instance: null
    },
    {
      name: "TEACHERDETAILSERVICE",
      img: "https://www.gannett-cdn.com/presto/2019/07/09/USAT/95f3e51a-46d4-467c-9698-b8485e0a62c1-GettyImages-1005285232.jpg?crop=2120,1193,x1,y0&width=2120&height=1193&format=pjpg&auto=webp",
      status: "DOWN",
      instance: null
    },
  ];
  const [Service, setService] = useState();
  const [ServiceStatus, setServiceStatus] = useState(Checkservice)

  const fetchData = () => {
    const URL = "http://localhost:8761/eureka/apps";
    axios({
      method: "get",
      url: URL,
      data: {
        KEY: "VALUE",
      },
    })
      .then(async (res) => {
        await setService(res.data.applications.application);
        res.data.applications.application.map(availableService => {
          ServiceStatus.map(async (service, index) => {
            if (service.name == availableService.name) {
              const updateService = service
              updateService.status = 'UP'
              updateService.instance = availableService.instance[0]

              await setServiceStatus(prev => {
                console.log('updateservice', updateService)
                prev.splice(index, 1, updateService)
                return prev
              })
            }
          })
          console.log('servicestatus', ServiceStatus)
          console.log('availableservice', availableService);
        })
      })
      .catch((er) => console.log(er));
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card border-0 shadow my-5">
          <div className="card-body p-5">
            <h1 className="font-weight-light text-center">
              List Services Application
            </h1>
            <div className="row d-flex justify-content-center">
              <Link to="/Studentservice">
                <div className="card m-5" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="https://www.thailand.intel.com/content/dam/www/public/us/en/images/MRM/teacher-student-laptop-16x9.png.rendition.intel.web.864.486.png" />
                  <div className="card-body">
                    <h5 className="card-title text-dark text-center">{Checkservice[0].name}</h5>
                    {ServiceStatus[0].status === 'UP' ? <button type="button" className="btn btn-primary">See Service</button> : <h6 style={{color: 'red'}}>Service Unavaliable</h6>}
                  </div>
                </div>
              </Link>
              <Link to="/Teacherdetailservice">
                <div className="card m-5" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="https://www.gannett-cdn.com/presto/2019/07/09/USAT/95f3e51a-46d4-467c-9698-b8485e0a62c1-GettyImages-1005285232.jpg?crop=2120,1193,x1,y0&width=2120&height=1193&format=pjpg&auto=webp" />
                  <div className="card-body">
                    <h5 className="card-title text-dark text-center">{Checkservice[1].name}</h5>
                    {ServiceStatus[1].status === 'UP' ? <button type="button" className="btn btn-primary">See Service</button> : <h6 style={{color: 'red'}}>Service Unavaliable</h6>}
                  </div>
                </div>
              </Link>
              <Link to="/Teacherservice">
                <div className="card m-5" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="https://en.arij.net/wp-content/uploads/sites/3/2018/07/courseintroimage.jpg" />
                  <div className="card-body">
                    <h5 className="card-title text-dark text-center">{Checkservice[2].name}</h5>
                    {ServiceStatus[2].status === 'UP' ? <button type="button" className="btn btn-primary">See Service</button> : <h6 style={{color: 'red'}}>Service Unavaliable</h6>}
                  </div>
                </div>
              </Link>
              <Link to="/Course">
                <div className="card m-5" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="https://elearningindustry.com/wp-content/uploads/2016/02/litmus-test-in-elearning-would-you-enroll-in-your-own-elearning-course-e1454415145719.jpg" />
                  <div className="card-body">
                    <h5 className="card-title text-dark text-center">{Checkservice[3].name}</h5>
                    {ServiceStatus[3].status === 'UP' ? <button type="button" className="btn btn-primary">See Service</button> : <h6 style={{color: 'red'}}>Service Unavaliable</h6>}
                  </div>
                </div>
              </Link>
              <Link to="/Enrollservice">
                <div className="card m-5" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/92f62359434977.5a21ba517bdd2.png" />
                  <div className="card-body">
                    <h5 className="card-title text-dark text-center">{Checkservice[4].name}</h5>
                    {ServiceStatus[4].status === 'UP' ? <button type="button" className="btn btn-primary">See Service</button> : <h6 style={{color: 'red'}}>Service Unavaliable</h6>}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
