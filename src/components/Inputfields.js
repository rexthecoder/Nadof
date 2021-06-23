import React from 'react';

const Inputfields = ({ label, type, placeholder, className , show}) => {
    return (
        <div>
            <div className="block mb-2 font-semibold text-gray-500">
                <label>{label}</label>
            </div>
            <div className="relative">
              {show && <span class="absolute inset-y-0 right-52 flex items-center pl-2">
                    <button >
                        <h5>show<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></h5>
                        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
                    </button>
                </span> }
                <input type={type}
                placeholder={placeholder}
                className="w-3/4 border border-gray-400 p-4 rounded-md shadow-md  hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 focus:border-blue-300 focus:outline-none text-gray-300 " />
            </div>
        </div>
    )
}

export default Inputfields
