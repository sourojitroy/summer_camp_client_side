import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import GoogleSign from './GoogleSign';

const SignUp = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    // const [errors, setErrors] = useState('');
    // const [success, setSuccess] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        console.log(savedUser)
                        fetch('https://summer-camp-school-server-liard.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'You have registerd successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    };




    // const handleRegister = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const photo = form.photo.value;
    //     const user = { name, email, password, photo }
    //     console.log(user);

    //     setSuccess('')
    //     setErrors('')

    //     if (password < 6) {
    //         setErrors('Please Add Atleast 6 Digit')
    //     }

    //     createUser(email, password)
    //         .then(result => {
    //             const createdUser = result.user;
    //             console.log(createdUser);
    //             navigate('/login')
    //             setSuccess('Registration Successful')

    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }

    return (
        <div className="flex justify-center items-center">
            <div className="w-1/2 bg-white p-8 rounded shadow">
                <h2 className="text-3xl text-center font-bold mb-4">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-bold">Name</label>
                        <input type="text" id="name" name='name'  {...register("name", { required: true })} className="w-full border border-gray-400 rounded px-3 py-2" />
                        {errors.name && <span className='text-red-600'>Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                        <input type="email" id="email" name='email'  {...register("email", { required: true })} className="w-full border border-gray-400 rounded px-3 py-2" />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-bold">Password</label>
                        <input type="password" id="password"  {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                        })} className="w-full border border-gray-400 rounded px-3 py-2" />
                        {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-600'>Password should have at least 6 digits</span>}
                        {errors.password?.type === 'pattern' && <span className='text-red-600'>Password should have at least one uppercase and one special case</span>}
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-bold">Confirm Password</label>
                        <input type="password" id="confirmpassword"  {...register("confirmpassword", {
                            required: true,
                            validate: (value)=>value===password
                        })} className="w-full border border-gray-400 rounded px-3 py-2" />
                        {errors.confirmpassword && <span className='text-red-600'>Password Vul ache</span>}
                    </div> */}
                    <div className="mb-4">
                        <label htmlFor="photo" className="block mb-2 font-bold">Photo URL</label>
                        <input type="text" id="photo" name='photo'  {...register("photo", { required: true })} className="w-full border border-gray-400 rounded px-3 py-2" />
                        {errors.photo && <span className='text-red-600'>Photo URL is required</span>}
                    </div>
                    <input className="w-full bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4" type="submit" value="Register" />
                </form>
                <GoogleSign></GoogleSign>
                <h2 className='pt-2'>Do you have any account? <Link className='font-semibold' to='/login'>Login</Link></h2>
                {/* <p className='text-red-600 text-xl font-semibold pt-2'>{errors}</p>
                <p className='text-green-600 text-xl font-semibold pt-2'>{success}</p> */}
            </div>
        </div>
    );
};

export default SignUp;