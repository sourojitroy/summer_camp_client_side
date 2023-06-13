import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-school-server-liard.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-school-server-liard.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You are now admin',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`https://summer-camp-school-server-liard.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You are now instructor',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <>
            <div className='w-[80%]'>
                {users.length}
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg text-white bg-yellow-600"><FaUserEdit></FaUserEdit></button>}</td>
                                    <td>{user.role == 'instructor' ? 'instrucor' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-lg text-white bg-yellow-600"><FaUserEdit></FaUserEdit></button>}</td>
                                    <td><button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;