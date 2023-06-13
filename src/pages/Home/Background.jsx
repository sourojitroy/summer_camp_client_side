import React from 'react';
import bg1 from '../../assets/background/background-1.jpg'
import bg2 from '../../assets/background/background-2.jpg'
import bg3 from '../../assets/background/background-3.jpg'

const Background = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bg1} className="w-full" />
                    <div className="absolute h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                                <button className="btn btn-accent">Enroll Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bg2} className="w-full" />
                    <div className="absolute h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                                <button className="btn btn-accent">Enroll Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bg3} className="w-full" />
                    <div className="absolute h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                                <button className="btn btn-accent">Enroll Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={bg2} className="w-full" />
                    <div className="absolute h-full left-0 right-0 flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-gray-200 space-y-8 pl-14 w-1/2'>
                            <h2 className='text-7xl font-extrabold'>Every Toys Are Ready For You</h2>
                            <p className='font-semibold'>In these shop, you can buy various kinds of toys related to cars, bus , truck and etc. This shop maintains the quality of products as well as the customer value </p>
                            <div>
                            <button className="btn btn-accent">Enroll Now!</button>                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-x-5 left-5 right-5 top-10">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Background;