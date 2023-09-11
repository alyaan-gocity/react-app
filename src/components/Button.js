import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
  return (
<button style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}
Button.defaultProps = {
    color: 'steelblue',
    text: 'Add',
}
Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button
