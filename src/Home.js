import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
        alt="Banner"
      />
      <div className="home__row">
        <Product
          id="21345"
          title="HBQ I7S Double Dual Mini Wireless 4.1 Bluetooth Earphone With Power Case - White"
          price={300}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaE-z7awLR4_YB5YKcPkcRZujyqwQxX1Pqhg&usqp=CAU"
        />
        <Product
          id={1235}
          title="Acer Aspire 3 A315-56 15.6-inch Laptop (Intel Core i5-1035G1/8GB/1TB HDD/Window 10, Home, 64Bit/Intel UHD Graphics), Black"
          price={46990}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SX466_.jpg"
        />
        <Product
          id={1238}
          title="Xiaomi MI 4C R4CM 300 Mbps 4 Antenna Router Global Version"
          price={800}
          rating={4}
          image="data:image/jpeg;base64,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"
        />
      </div>
      <div className="home__row">
        <Product
          id={1234}
          title="Samsung Galaxy S20 Ultra (Cosmic Gray, 12GB RAM, 128GB Storage"
          price={97999}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71cD4NUIBWL._SY550_.jpg"
        />
        <Product
          id={1236}
          title="Mi Earphone Basic with Ultra deep bass and mic (Black)"
          price={399}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71mQ9oKDMLL._SX522_.jpg"
        />
        <Product
          id={1237}
          title="React.js Essentials Paperback – Import, 27 August 2015"
          price={1490}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41-HWOw--cL._SX404_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1239}
          title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
          price={63990}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX569_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
