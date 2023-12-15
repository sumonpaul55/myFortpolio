import { Google } from '@mui/icons-material';
import React, { useContext } from 'react';
import { UserContext } from '../../shared/contextProvider/Authcontext';
import { toast } from 'react-toastify';

const SignIn = () => {
    const { loginWithGoogle } = useContext(UserContext)
    const handelLogin = () => {
        loginWithGoogle()
            .then(result => {
                if (result.user) {
                    toast(`Welcome ${result.user.displayName}`, {
                        position: "bottom-right",
                        autoClose: 3000,
                    })
                }
            }).catch(err => {
                toast(`${err}`)
            })
    }
    return (
        <main className='min-h-screen bg-slate-700 pt-12'>
            <div className="container mx-auto">
                <div className='max-w-[500px] mx-auto border rounded-md p-5'>
                    <form>

                    </form>
                    <div>
                        <h2>Login with google</h2>
                        <button className='text-white mt-5 bg-slate-800 w-full py-2 rounded-md hover:bg-slate-600 duration-200' onClick={handelLogin}>
                            <Google></Google>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;