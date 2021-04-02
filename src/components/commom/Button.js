import PropTypes from 'prop-types'

const Button = ({btnColor, btnText}) => {
    return (
        <button onClick={onClick} style={{backgroundColor: btnColor}} className='btn'>{btnText}</button>
    )
}

Button.propTypes = {
    btnColor: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired
}

const onClick = () => {
    console.log("hello")
}

export default Button
