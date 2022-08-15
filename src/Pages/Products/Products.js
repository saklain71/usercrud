import React, { useState } from 'react';
import { useEffect } from 'react';
import ProductsDetails from './ProductsDetails';


const Products = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [products]);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 sm:grid-cols-2'>
          
           {
                products.map(productss => <ProductsDetails
                    key={productss.id}
                    productss={productss} >
                </ProductsDetails>)
            }
        </div>
    );
};

export default Products;