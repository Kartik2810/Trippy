import React from "react";
import "./card.css";
import image7 from "../images/img7.jpg";
import image8 from "../images/img8.jpg";
import image9 from "../images/img9.jpg";
import image10 from "../images/img10.jpg";
import image11 from "../images/img11.jpg";
import image12 from "../images/img12.jpg";
import image13 from "../images/img13.jpg";
import image14 from "../images/img14.jpg";

function Card() {
  return (
    <div>
      <div className="cards-title">
        <h1>Most Visited Destination</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <img className="card-image" src={image7} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Pataya</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i> Bangkok
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 450</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={image8} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Chinatown</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i> Singapore
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 750</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={image9} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Big Ben</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i>London
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 850</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={image10} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Shanghai</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i>China
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 650</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={image11} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Canberra</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i> Australia
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 450</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={image12} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Paris</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i> France
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 1050</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={image13} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Lauterbrunnen</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i> Switzerland
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 2250</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={image14} alt="Placeholder" />
          <div className="card-content">
            <h2 className="card-title">Moscow</h2>
            <h6>
              <i class="fa-solid fa-location-dot"></i>Russia
            </h6>
            <hr />
            <div className="pricing">
              <h6>PRICE</h6>
              <p>$ 1250</p>
            </div>
            <button className="card-btn">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
