import React from 'react';
import img1 from '../../assets/about/pic-1.jpg'
import img2 from '../../assets/about/pic-2.jpg'

const About = () => {
    return (
        <>
        <h2 className='mt-12 mb-8 text-center text-violet-600 text-5xl font-semibold'>About Us</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 space-y-4 p-4'>
                        <h1 className="text-5xl font-bold">We are providing the best resource and hand to hand experience</h1>
                        <p className="py-6">Joining a photography class offers numerous benefits. Firstly, it allows individuals to learn the fundamental principles of photography, such as composition, lighting, and exposure. This knowledge empowers photographers to capture better images and unlock their creative potential. Secondly, photography classes provide hands-on experience through practical exercises and assignments, enabling students to apply their learning in a supportive environment. Instructors offer expert guidance, providing valuable feedback and personalized advice to help students overcome challenges and improve their skills. Moreover, photography classes foster networking opportunities, allowing photographers to connect with like-minded individuals, exchange ideas, and potentially collaborate on future projects. These classes also provide access to valuable resources, including equipment and studio spaces, which can enhance the learning experience. Additionally, photography classes encourage the exploration of different genres and styles, expanding creativity and helping individuals discover their unique artistic vision. Constructive criticism and feedback from peers and instructors aid in skill refinement and developing a discerning eye. Lastly, joining a photography class provides motivation, accountability, and inspiration to continually strive for improvement. Overall, photography classes offer a supportive and enriching environment for photographers of all levels to learn, grow, and indulge in their passion for capturing captivating images. </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                    <div className='lg:w-3/2 relative'>
                        <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={img2} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                    </div>
                </div>
            </div>
        </>
    );

};

export default About;