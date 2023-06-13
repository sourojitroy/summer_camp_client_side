import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';



const AddClass = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const classData= data;
        fetch('https://summer-camp-school-server-liard.vercel.app/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(classData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your class has been created',
                    showConfirmButton: false,
                    timer: 1500
                })
                // navigate('/')
            }
        })

    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-left">
                        <h1 className="text-5xl font-bold">Add Class</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card flex-shrink w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" {...register("className", { required: true })} name='className' className="input input-bordered" />
                                {errors.className && <span className='text-red-600'>Class Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("classPhotoURL", { required: true })} className="input input-bordered" />
                                {errors.classPhotoURL && <span className='text-red-600'>Class Photo URL is required</span>}
                            </div>
                            <div className='flex '>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Instructor Name</span>
                                    </label>
                                    <input type="text" {...register("instructorName", { required: true })} name='instructorName' className="input input-bordered" />
                                    {errors.instructorName && <span className='text-red-600'>Instructor Name is required</span>}
                                </div>
                                <div className="form-control w-full mx-4">
                                    <label className="label">
                                        <span className="label-text">Instructor Email</span>
                                    </label>
                                    <input type="email" {...register("instructorEmail", { required: true })} name='instructorEmail' className="input input-bordered" />
                                    {errors.instructorEmail && <span className='text-red-600'>Instructor Email is required</span>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seat</span>
                                </label>
                                <input type="number" {...register("seatStatus", { required: true })} className="input input-bordered" />
                                {errors.seatStatus && <span className='text-red-600'>Available Seat is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" {...register("price", { required: true })} className="input input-bordered" />
                                {errors.price && <span className='text-red-600'>Price is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add Class" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddClass;