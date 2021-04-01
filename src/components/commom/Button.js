import PropTypes from 'prop-types'

const Button = ({btnColor, btnText}) => {
    return (
        <button style={{backgroundColor: btnColor}} className='btn'>{btnText}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Button
