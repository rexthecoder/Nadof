
const Button = ({ className, children }) => {
    return (
        <div>
            <button className={className}>{children}</button>
        </div>

    )
}

export default Button;