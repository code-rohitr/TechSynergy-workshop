import React from 'react'
import './Button.css'

function Button({ text, btnClass }) {
    return (
        <div className={`btn-outer-container ${btnClass}`}>
            {text}
        </div>
    )
}

export default Button