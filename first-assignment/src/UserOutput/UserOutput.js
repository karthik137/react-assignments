import React from 'react'
import './UserOutput.css'

const useroutput = (props) => {
    const inlineStyle = {
        padding: '8px'
    }
    return(
        <div class="UserOutput">
            <p style={inlineStyle}>{props.username}</p>
            <p style={inlineStyle}>{props.username}</p>
        </div>
    )
}

export default useroutput;