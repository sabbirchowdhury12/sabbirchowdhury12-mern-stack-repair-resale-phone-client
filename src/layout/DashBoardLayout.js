import React, { useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../pages/share/Navbar/Navbar';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    console.log(isBuyer);
    // const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className='m-5 '>
                <label htmlFor="dashboard-drawer" className='lg:hidden w-full text-3xl font-bold'><BiMenu /></label>
            </div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-primary  text-white">


                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }


                        {
                            isBuyer &&
                            <li><Link to="/dashboard/buyerOders">My Orders</Link></li>
                        }

                        {/* {
                            isAdmin && <> 
                        <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                        <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                         </> 
                        }  */}

                    </ul>

                </div>
            </div>
        </div>
    );
};
export default DashBoardLayout;