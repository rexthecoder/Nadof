import React from 'react';

import { motion } from 'framer-motion';
import { AiOutlineLeft } from 'react-icons/ai';
import { BiLock } from 'react-icons/bi';

import Logo from '../../assets/img/logo.svg';
import quote from '../../assets/img/quote.svg';
import quoteEnd from '../../assets/img/quoteEnd.svg';
import Button from '../../components/Button';
import Inputfields from '../../components/Inputfields';


const RegistrationFinish = () => {
    var rows = [];
    for (var i = 0; i < 100; i++) {
        rows.push(<div className="circle-container">
            <div className="circle">

            </div>
        </div>);
    }
    return (
        <motion.div  initial={{scaleY:0}}  animate={{scaleY:1}}  exit={{scaleY: 0}} transition={{duration: 0.2}}>
        <div className="flex justify-center lg:justify-start items-center flex-row max-h-screen max-w-screen overflow-scroll lg:overflow-hidden bg-registration lg:bg-none bg-no-repeat min-h-screen bg-cover">
            <div className={`hidden  lg:flex w-2/5 colors.background min-h-screen bg-registration bg-cover bg-no-repeat px-10  content-evenly`}>
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
            <div  className="flex flex-col max-h-screen lg:colors.background lg:flex-1 min-h-screen max-w-screen min-w-screen px-5">
               
                <div className="hidden lg:flex lg:justify-end lg:justify-between lg:text-gray-200 lg:px-10 "><div className="hidden lg:flex lg:justify lg:items-center"><AiOutlineLeft color="gray" />Back</div>STEP 03/03</div>
                <div className="flex items-center justify-end lg:justify-end lg:items-end text-lg font-body text-gray-300 py-5 px-5 lg:px-11 ">Bank Verification.</div>
                <div className="flex bg-red flex-col items-center justify-center lg:justify-start lg:items-start lg:px-56">
                    <div className="text-white font-bold text-2xl pt-2 pb-4 lg:text-black">Complete Your Profile!</div>
                    <div className="text-lg text-center lg:text-justify  text-gray-300 pb-5 font-body">For the purpose of industry regulation, your<br />details are required.</div>
                    <hr className="lg:w-80 w-80 mb-5"/>
             <form className="space-y-14">
                <Inputfields type="text" label="Bank verification number(BVN)" placeholder="2090912345567"><span class="absolute inset-y-0 right-52 flex items-center pl-2"><input type="checkbox" id="agree"/></span></Inputfields>
                <Button  className="block w-80 h-12 text-center bg-blue-500 text-white py-2  font-semibold rounded shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-800 hover:bg-blue-300">Save and Continue</Button>
                <div className="flex text-base text-gray-300 justify-center items-center"><BiLock color="gray" /> Your Info is Safely Secured </div>
                </form>
                </div>
            </div>          
        </div>
        </motion.div>
    )
}

export default RegistrationFinish;

