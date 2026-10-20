import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getProductById } from '../data/products';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = getProductById(id);
        if(!foundProduct) {
            Navigate("/");
            return;
        }

        setProduct(foundProduct);
    }, [id]); 

    if(!product) {
        return <h1>Loading...</h1>
    }
  return (
    <div className='page'>
        <div className='container'>
            <div className='product-detail'>
                <div className='product-detail-image'>
                    <img src={product?.image} alt="" />
                </div>
                <div className='product-detail-content'>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails