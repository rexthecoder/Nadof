import React from 'react'
import { FcGoogle }from 'react-icons/fc';

const Button = ({text, className, onclick}) => {
    return (
        <div>
            <button className={ className }>{ text }</button>
        </div>
           
         )
}

export default Button;