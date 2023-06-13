import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../provider/AuthProvider';

const AllClasses = () => {
    const {user}= useContext(AuthContext)
    const [booking, setBooking] = useState(true);
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-camp-school-server-liard.vercel.app/classes')
        return res.json();
    })
const handleAddSeat = (single) => {
		console.log(single);
		if (user && user.email) {
			const coursesSeat = {_id, className, instructorName, classPhotoURL, price, email: user.email };
            console.log(courses);
			fetch('https://summer-camp-school-server-liard.vercel.app/courses', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(coursesSeat),
			})
				.then(res => res.json())
				.then(data => {
					// console.log('before if', data);
					if (data.insertedId) {
						// console.log('after if', data);
						refetch();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Seat added to your ID',
							showConfirmButton: false,
							timer: 1500
						})
						setBooking(false);
						
					}
				})
		}
		else {
			Swal.fire({
				title: 'Please login to book a seat',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login now!'
			}).then((result) => {
				if (result.isConfirmed) {
					navigate('/login', { state: { from: location } })
				}
			})
		}
	}

    return (
        <>
           
            <h2 className='mt-12 mb-12 text-center text-violet-600 text-5xl font-semibold'>Our Classes</h2>

            <div className='grid grid-cols-3 gap-10'>
            {
                classes.map(single =>
                    <div className="card w-96 bg-base-100 shadow-xl"  key={single._id}>
                        <figure><img src={single.classPhotoURL} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-semibold">Course Name: {single.className}</h2>
                            <h3 className='text-2xl font-semibold'>Instructor Name: {single.instructorName}</h3>
                            <p className='text-xl'>Instructor Email:{single.instructorEmail}</p>
                            <p className='text-xl'>Seat Status: {single.seatStatus}</p>
                            <p className='text-xl'>Course Fee: {single.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleAddSeat(single)} className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </>
    );
};

export default AllClasses;