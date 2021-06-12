import React, { Children } from 'react'
// import { FcGoogle }from 'react-icons/fc';

const Button = ({text, className, onclick, children}) => {
    return (
        <div>
            <button className={ className }>{ children }</button>
        </div>
           
         )
}

export default Button;