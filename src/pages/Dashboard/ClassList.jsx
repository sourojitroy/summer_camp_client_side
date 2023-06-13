import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ClassList = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-camp-school-server-liard.vercel.app/classes')
        return res.json();
    })

    const handleClassApprove = user => {
        fetch(`https://summer-camp-school-server-liard.vercel.app/classes/perclass/${user._id}`, {
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

    return (
        <>
            <div className='w-[80%]'>
                {classes.length}
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((classper, index) => <tr key={classper._id}>
                                    <th>{index + 1}</th>
                                    <td>{classper.className}</td>
                                    <td>{classper.instructorName}</td>
                                    <td>{classper.price}</td>
                                    <td>{classper.role == 'approved' ? 'approved' : <button onClick={() => handleClassApprove(classper)} className="btn btn-ghost btn-lg text-white bg-yellow-600"><FaUserEdit></FaUserEdit> </button>}</td>
                                    

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ClassList;