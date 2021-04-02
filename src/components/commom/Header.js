import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button btnColor='green' btnText='Adicionar' />
        </header>
    )
}

Header.defaultProps = {
    title: "Consulta de procesos jurídicos",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
