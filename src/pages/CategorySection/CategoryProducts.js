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
        <div className='my-20  mx-auto container p-5'>

            <p className='text-xl text-center py-10 font-bold uppercase text-blue-800'>Category Product</p>

            <div className='lg:flex items-start justify-center gap-28 '>
                <div className='lg:basis-1/4 mt-14  block  justify-center gap-20 lg:block '>
                    <p className='text-xl capitalize mb-10 border-b'>select a brand of your choise</p>
                    <div className='shadow-lg p-4 border-b-8 border-b-blue-900'>
                        {
                            categories.map((category, ind) => {
                                return <div className='border-b lg:mb-10 pb-5 lg:pb-2 mb-4' key={ind} onClick={() => handleCategory(category.category_id)}>
                                    <button className='font-bold text-lg text-secondary'>
                                        {category.category_name}
                                    </button>
                                </div  >;
                            })
                        }
                    </div>
                </div>
                <div className='flex-auto  my-10 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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