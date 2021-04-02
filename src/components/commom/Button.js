import { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    render({btnColor, btnText}){
        return (
            <button onClick={onClick} style={{backgroundColor: btnColor}} className='btn'>{btnText}</button>
        )
    }
}

Button.propTypes = {
    btnColor: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired
}

Button.defaultProps = {
    btnColor: "blue",
    btnText: "Info"
}

const onClick = () => {
    console.log("hello")
}

export default Button
