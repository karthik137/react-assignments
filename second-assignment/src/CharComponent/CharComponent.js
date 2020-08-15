import React from 'react'
import './CharComponent.css'

const char = (props) => {
    return (
        <div className = "CharComponent" onClick={props.click}>
           { props.charValue}
        </div>
    )
}

export default char;


