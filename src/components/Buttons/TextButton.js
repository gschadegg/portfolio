import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Icon } from '@iconify/react';

const TextButton = ({ children, classes, to, hash=null}) => {
  return (
    <Link 
        to={to} 
        state={{ hash: `${hash ? `${hash}`: null}`}} 
        className={`textBtnGradientHover basicButton self-start ${classes?.join(' ')}`}>
            {children}
            <Icon className='text-brightAccent pl-2' icon="bytesize:arrow-right" width='28'/>
    </Link>
  )
}

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  to:PropTypes.string,
  hash:PropTypes.string
}

export default TextButton
