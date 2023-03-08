import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useQuery, } from '@tanstack/react-query';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import { categoryProduct } from '../../utilities/APIRoutes';
import axios from 'axios';
import CategoryProduct from './CategorySection.js/CategoryProduct';


const CategoryProducts = () => {


    const [categoryData, setCategoryData] = useState([]);
    const [categoryID, setCategoryID] = useState('');


    const { data: categories = [], isLoading } = useQuery(
        {
            queryKey: ['data',],
            queryFn: async () => {
                const res = await fetch('category.json');
                const data = await res.json();
                return data;
            }

        }
    );

    const handleCategory = async (id) => {
        await axios.get(`${categoryProduct}/${id}`).then((result) => {
            setCategoryData(result.data);
        }).catch(err => console.error('error'));
    };

    useEffect(() => {
        handleCategory('01');
    }, []);



    if (isLoading || !categoryData.length) {
        return <Loading />;
    }


    return (
        <div className='my-20  mx-auto container'>
            <p className='text-xl text-center py-10 font-bold uppercase text-blue-800'>Choose YOur Brand</p>

            <div className='lg:flex items-center justify-center gap-28 '>
                <div className='flex justify-center gap-20 lg:block '>
                    {
                        categories.map((category, ind) => {
                            return <div className='lg:mb-10' key={ind} onClick={() => handleCategory(category.category_id)}>
                                <button className='font-bold text-lg text-secondary border-b-4 '>
                                    {category.category_name}
                                </button>
                            </div  >;
                        })
                    }
                </div>
                <div className='my-10 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        categoryData.map(product => <CategoryProduct key={product._id} setCategoryID={setCategoryID} product={product} />)
                    }
                </div>
            </div>

            <Button><Link to='/allProducts'>See All</Link></Button>
        </div>
    );
};

export default CategoryProducts;