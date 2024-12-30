import React from 'react';

const Homepage = () => {
  return (
    <div className="container">
      <h1>Our Products & Services</h1>
      <p>On-demand Fuel Delivery Services and Fuel Storage Solutions.</p>

      <div className="row">
        <div className="col-md-4">
          <h2>Fuel Delivery</h2>
          <img src="/path/to/fuel-delivery-image.jpg" alt="Fuel Delivery" />
          <p>India with unique challenge of uninterrupted power supply requires over 20 million residential...</p>
          <a href="/fuel-delivery" className="btn btn-primary">Learn More</a>
        </div>
        <div className="col-md-4"> 
          {/* ... Similar sections for other products */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;