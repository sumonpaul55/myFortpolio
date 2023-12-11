import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Facebook, GitHub } from '@mui/icons-material';
const Communicate = () => {
    return (
        <div className='fixed top-1/3 left-0 space-y-2'>
            <div className='flex flex-col justify-end items-end bg-white'>
                <div className='duration-200 hover:scale-110 hover:text-pink-600'>
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
            </div>
        </div >
    );
};

export default Communicate;