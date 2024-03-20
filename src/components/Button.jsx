import React from 'react'

const Button = ({text}) => {
  return (
    <button className="button-footer px-2 py-2 md:px-6">
        {text}
    </button>
  )
}

export default Button