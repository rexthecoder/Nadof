//card component 
import { AiOutlineArrowRight } from 'react-icons/ai';

export const Card = ({image, subtitle, title}) => {
    return (
        <div className="flex  w-50  md:w-96 h-24 bg-white text-white rounded-md content-center items-center shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 hover:bg-blue-100  justify-between px-5 mb-5">
            <img className="h-10" src={image} alt="Student Logo" />
            <div className="flex flex-col ">
                <span className="text-black font-semibold px-5">{title}</span>
                <span className="text-gray-400 px-5">{subtitle}</span>
            </div>
            <AiOutlineArrowRight color="blue" />
        </div>
    )
}

