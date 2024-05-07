import React from "react";
import "./destination.css";
import Image1 from "../images/1.jpg";
import Image2 from "../images/img1.jpg";
import Image3 from "../images/img2.jpg";
import Image4 from "../images/img3.jpg";
function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>tours give you the opportunity to see a lot, within a time frame</p>
      </div>
      <div className="first-des">
        <div className="des-text">
          <h2>Thailand, Nepal</h2>
          <p>
            Thailand, known as the Land of Smiles, is a captivating country that
            blends rich cultural heritage with stunning natural beauty. From
            bustling cities like Bangkok to tranquil beaches in the south and
            lush jungles in the north, Thailand offers a diverse array of
            experiences for travelers. The spiritual essence of Kathmandu is
            palpable, with countless temples and monasteries scattered
            throughout the city. Swayambhunath, also known as the Monkey Temple,
            offers panoramic views of the Kathmandu Valley and a serene
            atmosphere for
          </p>
        </div>
        <div className="images">
          <img src={Image1} alt="image1" srcset="" />
          <img src={Image2} alt="image2" srcset="" />
        </div>
      </div>
      <div className="first-des">
        <div className="images">
          <img src={Image3} alt="image1" srcset="" />
          <img src={Image4} alt="image2" srcset="" />
        </div>
        <div className="des-text">
          <h2>Dubai, Niagara Falls</h2>
          <p>
            Niagara Falls, one of the most iconic natural wonders in the world,
            is a breathtaking spectacle located on the border between the United
            States and Canada. Formed by the Niagara River, which drains Lake
            Erie into Lake Ontario, the falls consist of three distinct
            sections: the American Falls, the Bridal Veil Falls, and the
            Horseshoe Falls. Dubai, a city of superlatives, is a glittering
            jewel in the desert known for its towering skyscrapers, luxurious
            shopping malls, and ambitious architectural projects. Situated on
            the southeast coast of the Arabian Peninsula, Dubai has transformed
            from a modest trading port to a global hub of commerce,
          </p>
        </div>
      </div>
    </>
  );
}

export default Destination;
