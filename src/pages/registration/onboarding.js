import { Card } from '../../components/Card';
import artist from '../assets/img/artist.svg';
import Logo from '../assets/img/logo.svg';
import quote from '../assets/img/quote.svg';
import quoteEnd from '../assets/img/quoteEnd.svg';
import student from '../assets/img/student.svg';
import tourist from '../assets/img/tourist.svg';

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
        <div className="flex flex-row overflow-hidden">

            <div className={`flex-none w-2/5 colors.background min-h-screen bg-registration bg-cover bg-no-repeat px-10  content-evenly`}>

                <div className="flex flex-col space-y-6">
                    {rows}
                    <img src={Logo} alt="Logo" className="py-10 w-36 max-height-xs " />
                    <img src={quote} alt="Quote Icon" className="flex pt-24 w-7 max-height-xs items-center justify-items-center" />
                    <div className="font-semibold text-lg text-white">
                        This is a fine and reasonable ambition – but it will only happen if a lot of thought and careful attention is first given to creating a sustainable road-map for the development of the infrastructure required to support this young ‘eco-system’ – in order to help it grow strong. The fundamental component of this ‘eco-system’ is the artist
                </div>
                    <div className="flex flex-row  justify-between font-title text-lg text-white">
                        <p>El Anatsui.</p>
                        <img src={quoteEnd} alt="Quote End Logo" className="py-10 w-7 max-height-xs " />
                    </div>

                </div>
            </div>
            <div className="flex-1 colors.background min-h-screen">
                <div className="flex justify-end text-base text-gray-300 px-10 py-10">Already have an account? <span className="text-blue-600 pl-1 font-title">Sign In</span></div>
                <div className="flex flex-col justify-center  justify-items-center pl-52 py-5">
                    <div className=" font-bold text-2xl pt-5">Join Us!</div>
                    <div className="text-base text-gray-300 pb-5">To begin this journey, tell us what type of<br />account you’d be opening.</div>
                    <Card image = {student} title="Student" subtitle={`Read books on the various types`}/>
                    <Card  image={tourist} title="Tourist" subtitle="Love art works? satisfy yourself !"/>
                    <Card image={artist}  title="Artist" subtitle="Exhibit your amazing work online."/>
                </div>

            </div>
        </div>
    )
}

export default Onboarding




