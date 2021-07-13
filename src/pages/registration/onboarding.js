import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import artist from '../../assets/img/artist.svg';
import Logo from '../../assets/img/logo.svg';
import quote from '../../assets/img/quote.svg';
import quoteEnd from '../../assets/img/quoteEnd.svg';
import student from '../../assets/img/student.svg';
import tourist from '../../assets/img/tourist.svg';
import { Card } from '../../components/Card';

const Onboarding = () => {
    var rows = [];
    for (var i = 0; i < 100; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<div className="circle-container">
            <div className="circle">

            </div>
        </div>);
    }
    return (
        <motion.div initial={{ scaleY: 0, }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.2 }}>
            <div className="flex justify-center lg:justify-start items-center flex-row max-h-screen max-w-screen overflow-hidden bg-registration lg:bg-none bg-no-repeat min-h-screen bg-cover">
                <div className={`hidden  lg:flex w-2/5 colors.background min-h-screen bg-registration bg-cover bg-no-repeat px-10  content-evenly`}>
                    <div className="flex flex-col space-y-6">
                    {rows}
                        <img src={Logo} alt="Logo" className="py-10 w-36 max-height-xs " />
                        <img src={quote} alt="Quote Icon" className="flex pt-24 w-7 max-height-xs items-center justify-items-center" />
                        <div className="font-body text-xl text-white">
                            This is a fine and reasonable ambition – but it will only happen if a lot of thought and careful attention is first given to creating a sustainable road-map for the development of the infrastructure required to support this young ‘eco-system’ – in order to help it grow strong. The fundamental component of this ‘eco-system’ is the artist
                        </div>
                        <div className="flex flex-row  justify-between font-title text-lg text-white">
                            <p>El Anatsui.</p>
                            <img src={quoteEnd} alt="Quote End Logo" className="py-10 w-7 max-height-xs " />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col max-h-screen lg:colors.background lg:flex-1 min-h-screen max-w-screen min-w-screen px-5'>
                    {rows}
                    <div className="flex items-center justify-center lg:justify-end lg:items-end text-lg font-body text-gray-300 py-6 lg:px-11">Already have an account? <span className="text-white lg:text-pink-900 pl-1 font-body text-xl cursor-pointer">Sign In</span></div>
                    <div className="flex bg-red flex-col items-center justify-center lg:justify-start lg:items-start lg:px-56">
                        <div className=" text-white font-bold text-2xl pt-5 pb-2 lg:text-black ">Join Us!</div>
                        <div className="text-lg  text-center lg:text-left text-gray-300 pb-10 font-body">To begin this journey, tell us what type of<br className="hidden lg:block md:block md:pl-2" /> account you’d be opening.</div>
                        <Link to="/registration"><Card image={student} title="Student" subtitle={`Read books on the various types`} /></Link>
                        <Link to="/registrationInfo"><Card image={tourist} title="Tourist" subtitle="Love art works? satisfy yourself !" /></Link>
                        <Link to="/registrationFinish"><Card image={artist} title="Artist" subtitle="Exhibit your amazing work online." /></Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Onboarding



