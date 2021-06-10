import React from 'react'
import Logo from '../assets/img/logo.svg';
import quote from '../assets/img/quote.svg';
import quoteEnd from '../assets/img/quoteEnd.svg';
import { AiOutlineLeft } from 'react-icons/ai';
import { FcGoogle }from 'react-icons/fc';
import  Button from '../components/Button'; 
import Inputfields from '../components/Inputfields';
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
               
                <div className="flex justify-between text-gray-200 px-10 "><div className="flex justify items-center"><AiOutlineLeft color="gray" />Back</div>STEP 01/03</div>
                <div className="flex justify-end text-base text-gray-400 px-10 ">Personal Info.</div>
                <div className="flex flex-col justify-center  justify-items-center pl-52 py-5 ">
                    <div className=" font-bold text-2xl pt-1">Register Individual Account!</div>
                    <div className="text-base text-gray-300 pb-5">For the purpose of industry regulation, your<br />details are required.</div>
                    <hr className="w-4/5 mb-3"/>
                    <form className="space-y-3">
                       <Inputfields type="text" label="Your fullname*" placeholder="Abigail Dwain" />
                       <Inputfields type="text" label="Email address*" placeholder="Enter email address " />
                       <Inputfields type="text" label="Create password*" placeholder="Create password" />
                        <div className="flex items-center">
                            <input type="checkbox" id="agree"/>
                            <label for="agree" className="ml-2 text-gray-300 text-sm">I agree to terms and condition</label>
                        </div>
                        <Button text="Register Account" className="block w-3/4 h-12 text-center bg-blue-500 text-white py-2 px 4  rounded shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-800 hover:bg-blue-300"/>
                        <div className="flex space-x-2 items-center mt-2">
                        <hr className="w-1/3"/><span className="p-2 text-center text-gray-400">Or</span>
                        <hr className="w-1/3"/>
                        </div>
                        <Button text="Register with Google" className="flex justify-around items-center border border-gray-400 text-center text-gray-500 w-3/4 h-12 rounded-md shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 font-bold hover:ring-blue-500 focus:outline-none"><FcGoogle/></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp1;

