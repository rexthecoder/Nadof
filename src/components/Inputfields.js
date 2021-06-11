import React from 'react'

const Inputfields = ({label, type, placeholder, className}) => {
    return (
        <div>
            <div className="block mb-2  text-gray-500">
                <label>{ label }</label>
            </div>
            <div className="w-3/4 border border-gray-400 p-4 rounded-md shadow-md  hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 focus:border-blue-300 focus:outline-none text-gray-300">
            <input type={type}
                placeholder={placeholder}
                className={className} />
            </div>
        </div>
    )
}

export default Inputfields
