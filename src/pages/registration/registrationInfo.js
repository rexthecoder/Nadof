import React from 'react';

import { motion } from 'framer-motion';
import { AiOutlineLeft } from 'react-icons/ai';
import { BiLock } from 'react-icons/bi';

import Logo from '../../assets/img/logo.svg';
import quote from '../../assets/img/quote.svg';
import quoteEnd from '../../assets/img/quoteEnd.svg';
import Button from '../../components/Button';
import Inputfields from '../../components/Inputfields';


const RegistrationInfo = () => {
    var rows = [];
    for (var i = 0; i < 100; i++) {
        rows.push(<div className="circle-container">
            <div className="circle">

            </div>
        </div>);
    }
    return (
        <motion.div  initial={{scaleY:0}}  animate={{scaleY:1}}  exit={{scaleY: 0}} transition={{duration: 0.2}}>
        <div className="flex flex-row overflow-hidden bg-registration bg-cover bg-no-repeat lg:flex flex-row overflow-hidden">
            <div className={`hidden flex-none w-2/5 colors.background min-h-screen bg-registration bg-cover bg-no-repeat px-10  content-evenly`}>
                <div className="flex flex-col space-y-6">
                    {rows}
                    <img src={Logo} alt="Logo" className="py-10 w-36 max-height-xs " />
                    <img src={quote} alt="Quote Icon" className="flex pt-24 w-7 max-height-xs items-center justify-items-center" />
                    <div className="font-semibold text-lg text-white">
                    You can't help it. An artist's duty, as far as I'm concerned, is to reflect the times.
                    </div>
                    <div className="flex flex-row  justify-between font-title text-lg text-white">
                        <p> Nina Simone.</p>
                        <img src={quoteEnd} alt="Quote End Logo" className="py-10 w-7 max-height-xs " />
                    </div>
                </div>
            </div>
            <div  className="md:flex-1 colors.background min-h-screen">
               
                <div className="flex justify-end md:justify-between text-gray-200 px-10 "><div className="flex justify items-center"><AiOutlineLeft color="gray" />Back</div>STEP 02/03</div>
                <div className="flex justify-end text-base text-gray-400 md:px-10 ">Residency Info.</div>
                <div className="flex flex-col justify-center content-center items-center justify-items-center md:pl-52 py-5 px-5 ">
                    <div className="item-center justify-items-center text-white self-center font-bold text-2xl pt-2 md:font-bold md:text-2xl md:pt-2">Complete Your Profile!</div>
                    <div className="text-base text-center text-gray-300 pb-5">For the purpose of industry regulation, your<br />details are required.</div>
                    <hr className="w-4/5 mb-3"/>
             <form className="space-y-3">
                <Inputfields type="text" label="Phone number" placeholder="244758291" />
                <Inputfields type="text" label="Your address" placeholder="Please enter address" />
                <Inputfields type="text" label="Country of residence" placeholder="Please select" />
                <Button className="block w-52 md:w-3/4 h-12 mt-5 text-center bg-blue-500 text-white py-2 px 4  rounded shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-800 hover:bg-blue-300">Save and Continue</Button>
                <div className="flex text-base text-gray-300 justify-center items-center"><BiLock color="gray" /> Your Info is Safely Secured </div>
                </form>
                </div>
            </div>          
        </div>
        </motion.div>
    )
}

export default RegistrationInfo;
