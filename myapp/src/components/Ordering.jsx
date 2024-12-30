import React from 'react';
import './Ordering.css'; 

export default function Ordering() {
  return (
    <>
      <center>
        <div className="content">
          <h1>Our Products and Services</h1>
          <p>On-demand Fuel Delivery Services and Fuel Storage Solutions.</p>
        </div>
      </center>

      <div className="card-row"> 
        <div className="card">
          <img src="https://th.bing.com/th/id/OIP.RNlfXkgSijBJx2zufMYULgAAAA?rs=1&pid=ImgDetMain" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><h2>Petrol</h2></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Order Now
            </a>
          </div>
        </div>

        <div className="card">
          <img src="https://thumbs.dreamstime.com/b/historic-green-yellow-fuel-dispenser-diesel-petrol-german-text-blasenfrei-zapfen-engl-refuel-bubbles-historic-133050492.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><h2>Diesel</h2></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Order Now
            </a>
          </div>
        </div>

        <div className="card">
          <img src="https://cdn2.adrianflux.co.uk/wp-fluxposure/uploads/2022/08/lpg-car-nozzle.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><h2>LPG</h2></h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}