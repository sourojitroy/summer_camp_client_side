import React from 'react';
import img1 from '../../assets/facilites/pic-1.jpg'
import img2 from '../../assets/facilites/pic-2.jpg'
import img3 from '../../assets/facilites/pic-3.jpg'



const Facilities = () => {
    return (
       <>
       <h2 className='mt-12 text-center text-violet-600 text-5xl font-semibold'>What We Provide</h2>
        <div className='flex justify-around mb-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center space-y-4 text-center">
                    <h2 className="card-title text-2xl">Face-to-face Teaching</h2>
                    <p>Attending classes, interact with teacher and students and so on will happen</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More </button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center space-y-4 text-center">
                    <h2 className="card-title text-2xl">24/7 Support Available</h2>
                    <p>Attending classes, interact with teacher and students and so on will happen</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More </button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img3} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center space-y-4 text-center">
                    <h2 className="card-title text-2xl">Interactive eLearning</h2>
                    <p>Attending classes, interact with teacher and students and so on will happen</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Learn More </button>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Facilities;