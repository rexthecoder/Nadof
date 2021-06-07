import React from 'react'
import Logo from '../assets/img/logo.svg';
import quote from '../assets/img/quote.svg';
import quoteEnd from '../assets/img/quoteEnd.svg';
import { AiOutlineLeft } from 'react-icons/ai';
import { FcGoogle }from 'react-icons/fc';
import  Button from '../components/Button'; 
const SignUp1 = () => {

    var rows = [];
    for (var i = 0; i < 100; i++) {
        rows.push(<div className="circle-container">
            <div className="circle">

            </div>
        </div>);
    }
    return (
        <div className="flex flex-row overflow-hidden">
            <div className={`flex-none w-2/5 colors.background min-h-screen bg-registration bg-cover bg-no-repeat px-10  content-evenly`}>
                <div className="flex flex-col space-y-6">
                    {rows}
                    <img src={Logo} alt="Logo" className="py-10 w-36 max-height-xs " />
                    <img src={quote} alt="Quote Icon" className="flex pt-24 w-7 max-height-xs items-center justify-items-center" />
                    <div className="font-semibold text-lg text-white">
                        If you touch something, you leave a charge on it, and anybody else touching it connects with you in a way.
                    </div>
                    <div className="flex flex-row  justify-between font-title text-lg text-white">
                        <p>El Anatsui.</p>
                        <img src={quoteEnd} alt="Quote End Logo" className="py-10 w-7 max-height-xs " />
                    </div>
                </div>
            </div>
            <div  className="flex-1 colors.background min-h-screen">
               
                <div className="flex justify-end text-gray-200 px-10 "><AiOutlineLeft className="flex-start" color="gray">Back</AiOutlineLeft>STEP 01/03</div>
                <div className="flex justify-end text-base text-gray-400 px-10 ">Personal Info.</div>
                <div className="flex flex-col justify-center  justify-items-center pl-52 py-5 ">
                    <div className=" font-bold text-2xl pt-5">Register Individual Account!</div>
                    <div className="text-base text-gray-300 pb-5">For the purpose of industry regulation, your<br />details are required.</div>
                    <hr className="w-4/5 mb-3"/>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2  text-gray-500">Your fullname*</label>
                            <input type="text"placeholder="Abigail Dwain" className="w-3/4 border border-gray-400 p-4 rounded-md shadow-md  hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500    focus:border-blue-300"/>
                        </div>
                        <div>
                            <label className="block mb-2  text-gray-500">Email address*</label>
                            <input type="text" placeholder="Enter email address" className="w-3/4 border border-gray-400 p-4 rounded-md shadow-md  hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 focus:border-blue-300 text-gray-300"/>
                        </div>
                        <div>
                            <label className="block mb-2  text-gray-500">Create password*</label>
                            <input type="text" placeholder="Enter password" className="w-3/4 border border-gray-400 p-4 rounded-md shadow-md  hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 outline-none focus:border-blue-300"/>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="agree"/>
                            <label for="agree" className="ml-2 text-gray-300 text-sm">I agree to terms and condition</label>
                        </div>
                        <Button text="Register Account"  />
                        <div className="flex space-x-3 items-center mt-3">
                        <hr className="w-1/3"/><span className="p-2 text-center text-gray-400 mb-1">Or</span>
                        <hr className="w-1/3"/>
                        </div>
                        <button className=" border border-gray-400 text-center w-3/4 rounded-md shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 text-2x font-bold hover:ring-blue-500"><FcGoogle className="mt-5 ml-8"></FcGoogle>Register with Google</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp1;

