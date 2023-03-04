import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useQuery, } from '@tanstack/react-query';
import Loading from '../../components/Loading';
import Button from '../../components/Button';
import Categories from './CategorySection.js/Categories';

const Category = () => {


    const [categoryData, setCategoryData] = useState([]);

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

    if (isLoading) {
        return <Loading />;
    }

    const handleCategory = (id) => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(d => d.category_id === id);
                setCategoryData(filter);
            });
    };



    return (
        <div>
            <div className='flex justify-center gap-20'>
                {
                    categories.map(category => {
                        return <button onClick={() => handleCategory(category.category_id)}>
                            <Button>
                                {category.category_name}
                            </Button>
                        </button  >;
                    })
                }
            </div>
            <div className='my-10 mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    categoryData.map(category => <Categories category={category} />)
                }
            </div>

            <Button>See All</Button>
        </div>
    );
};

export default Category;