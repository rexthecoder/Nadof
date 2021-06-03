import { AiOutlineArrowRight } from 'react-icons/ai';

export const Card = ({image, subtitle, title}) => {
    return (
        <div className="flex w-2/4 h-24 bg-white text-white rounded-md content-center items-center shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 hover:bg-blue-100  justify-between px-2 mb-5">
            <img src={image} alt="Student Logo" />
            <div className="flex flex-col px-0">
                <span className="text-black font-semibold">{title}</span>
                <span className="text-gray-400">{subtitle}</span>
            </div>
            <AiOutlineArrowRight color="blue" />
        </div>
    )
}

