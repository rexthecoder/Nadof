import React from 'react'

const Button = ({text, onclick}) => {
    return (
        <div className="block w-3/4 h-16 text-center bg-blue-500 text-white py-2 px 4  rounded shadow-md hover:shadow-lg ring-1 ring-transparent hover:ring-blue-800 hover:bg-blue-300">
            {text}
            
        </div>
    )
}

export default Button;