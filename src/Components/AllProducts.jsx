import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/data").then((r) => setProducts(r.data));
  }, []);
  console.log(products);
  return (
    <div>
      <h2>AllProducts</h2>

      <div
        style={{
          border: "1px solid grey",
          height: "fit-content",
          width:"90%",
          margin:"auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((el) => (
          <div
            key={el.id}
            style={{ border: "1px solid white", width: "fit-content" }}
          >
            <h2>{el.name}</h2>
           
            <button>
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${el.id}`}
              >
                Product Details
              </Link>
            </button>
          </div>
        ))}
      </div>
      <ProductDetails products={products}/>
    </div>
  );
};

export default AllProducts;
