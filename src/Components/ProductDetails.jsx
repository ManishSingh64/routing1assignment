import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({products}) => {

    const [product, setProduct] = useState({})

    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/data/${id}`).then((r) => {
            setProduct(r.data)
        })
    },[id])

  return (
    <div>
        <h2>Product Details</h2>
        <p>Product Name: {product.name}</p>
        <p>Product Price: {product.price}</p>
        <p>Product ID: {product.id}</p>
    </div>
  )
}

export default ProductDetails