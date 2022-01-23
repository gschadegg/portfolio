import React from "react"
import PropTypes from "prop-types"

const InterestBlock = ({children}) => {
  return (
    <div className='text-sm font-medium min-w-[120px] md:min-w-[90px] bg-brightAccent/10 rounded-xl text-brightAccent flex flex-col justify-center items-center px-2 py-3.5 m-1'>
        {children}
    </div>
  )
}

InterestBlock.propTypes = {
  children: PropTypes.node.isRequired
}

export default InterestBlock
