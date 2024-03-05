import React from 'react'
import Image from 'next/image'
import SurgeryImage from "@/public/pexels-gaspar-osorio-15771808.jpg";

const Hero = () => {
    return (
        <div className='relative min-h-screen my-20'>
            <Image
                src={SurgeryImage}
                width={1000}
                height={600}
                alt="hero bg"
                className="w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
            />
            <div className='container h-[calc(100vh-120px)] gried place-items-center'>
                <div className='space-y-4 bg-[#ffffff98] w-fit p-4'>
                    <p className='uppercase font-medium'>Empowering Healthcare Supply Chains </p>
                    <h3 className='text-4xl sm:text-6xl front-bold'> <span className='text-blue-400 '>24-HOUR WITH YOU</span>
                        </h3>
                    <p className='text-gray-700 text-[14px] sm:text-[16px] w-1/2'>Flexible cash trade options,
                        and extensive variety of brands,
                        we strive to exceed the expectations of our customers and partners.
                        Join us in our journey to transform healthcare supply chains and make a positive impact on the lives of millions.
                        Varek Pharmasol
                        Your Trusted Healthcare Partner.</p>
                    
                    <button className='bg-blue-500 text-black px-6 py-2 rounded-2xl text-[14px] sm:text-[16px] '>FORM</button>


                </div>    
            </div>
        </div>
    );
};

export default Hero;
