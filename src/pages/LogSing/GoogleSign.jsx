import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSign = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                const savedUser = { name: googleUser.displayName, email: googleUser.email }
                console.log(savedUser)
                fetch('https://summer-camp-school-server-liard.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })

                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='w-full bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4 flex justify-center items-center gap-2'> <FaGoogle></FaGoogle> Login with Google </button> <br />
        </div>
    );
};

export default GoogleSign;