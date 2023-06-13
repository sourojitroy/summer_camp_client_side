import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import GoogleSign from './GoogleSign';


const Login = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    // const [errors, setErrors] = useState('');
    // const [success, setSuccess] = useState('');

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {
        console.log(data)

        signIn(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                title: 'Login Seccessful',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            navigate(from, {replace: true})
            
        })
        .catch(error => {
            console.log(error)
        })

        
    };


    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const user = { email, password }
    //     console.log(user);

    //     setErrors('');

    //     if (password.length < 6) {
    //         setErrors('Please Add Atleast 6 Digit')
    //     }

    //     signIn(email, password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser)
    //             Swal.fire({
    //                 title: 'Login Seccessful',
    //                 showClass: {
    //                     popup: 'animate__animated animate__fadeInDown'
    //                 },
    //                 hideClass: {
    //                     popup: 'animate__animated animate__fadeOutUp'
    //                 }
    //             })
    //             navigate(from, {replace: true})
    //             setSuccess('Login Seccessful')
    //         })
    //         .catch(error => {
    //             setErrors('Wrong Email/Password');
    //         })

    // }

    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then(result => {
    //             const googleUser = result.user;
    //             console.log(googleUser);
    //             Swal.fire({
    //                 title: 'Login Seccessful',
    //                 showClass: {
    //                     popup: 'animate__animated animate__fadeInDown'
    //                 },
    //                 hideClass: {
    //                     popup: 'animate__animated animate__fadeOutUp'
    //                 }
    //             })
    //             navigate(from)
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }

    return (
        <div className="flex justify-center items-center">
            <div className="w-1/2 bg-white p-8 rounded shadow">
                <h2 className="text-3xl text-center font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                        <input type="email" id="email" {...register("email", { required: true })} className="w-full border border-gray-400 rounded px-3 py-2" />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-bold">Password</label>
                        <input type="password" id="password" {...register("password", { required: true })} className="w-full border border-gray-400 rounded px-3 py-2" />
                        {errors.password && <span className='text-red-600'>Password is required</span>}
                    </div>
                    <input className="w-full bg-sky-400 text-white font-bold py-2 px-4 rounded" type="submit" value="Login" />
                </form>
                {/* <button onClick={handleGoogleSignIn} className='w-full bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4 flex justify-center items-center gap-2'> <FaGoogle></FaGoogle> Login with Google </button> <br /> */}
                <GoogleSign></GoogleSign>
                <h2 className='pt-2'>New to this site? <Link className='font-semibold' to='/register'>Register</Link></h2>
                {/* <p className='text-red-600 text-xl font-semibold pt-2'>{errors}</p>
                <p className='text-green-600 text-xl font-semibold pt-2'>{success}</p> */}
            </div>

        </div>
    );
};

export default Login;