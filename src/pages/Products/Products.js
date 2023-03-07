import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../BookModal/BookModal';
import CategoryProduct from '../CategorySection/CategorySection.js/CategoryProduct';

const Products = () => {

    const products = useLoaderData();
    const [product, setProduct] = useState(null);
    return (
        <div>
            <div className=' my-10 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <CategoryProduct key={product._id} setProduct={setProduct} product={product} />)
                }
            </div>

            {product &&
                <BookModal setProduct={setProduct} product={product} />
            }
        </div>
    );
};

export default Products;