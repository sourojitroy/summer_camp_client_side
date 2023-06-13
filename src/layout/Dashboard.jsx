import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaLaptopHouse, FaUsers } from "react-icons/fa";


const Dashboard = () => {
    const isAdmin = true;
    // const isInstructor = true;
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-cyan-700">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>
                            <li><NavLink to='/dashboard/classlist'><FaLaptopHouse></FaLaptopHouse> All Classes</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/addclass'><FaUsers></FaUsers> Add Class</NavLink></li>
                            </>
                    }
                  
                    <div className="divider">OR</div>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;