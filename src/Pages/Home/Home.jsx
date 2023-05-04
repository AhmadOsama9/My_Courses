import React from 'react'
import { PRODUCTS } from "../../products"
import { Product } from "./Product";

import "./home.css";


const Home = () => {
  return (
    <div className="home">
        <div className="title">
            <h1>My Courses</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
            
                <Product data={product} />
            ))}
        </div>
    </div>
  )
}

export default Home