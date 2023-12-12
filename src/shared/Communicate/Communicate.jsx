import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Email, Facebook, GitHub, WhatsApp } from '@mui/icons-material';
const Communicate = () => {
    return (
        <div className='fixed top-1/3 right-0 space-y-2 hidden sm:block'>
            <div className='flex flex-col justify-end items-end'>
                <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                    <a href="https://github.com/sumonpaul55" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                        <GitHub fontSize='large' />
                    </a>
                </div>
                <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                    <a href="https://www.linkedin.com/in/sumonpaul5" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                        <LinkedInIcon fontSize='large' />
                    </a>
                </div>
                <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                    <a href="https://www.facebook.com/sumonpaul55" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                        <Facebook fontSize='large' />
                    </a>
                </div>
                <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                    <a href="https://wa.me/+8801628883217" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                        <WhatsApp fontSize='large' />
                    </a>
                </div>
                <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                    <a href="mailto:sumonpaul3217@gmail.com" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                        <Email fontSize='large' />
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Communicate;