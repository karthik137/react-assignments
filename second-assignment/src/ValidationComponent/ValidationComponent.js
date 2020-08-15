import React from 'react'

const validation = (props) => {
    return (
        
        <div className="Validation">
            {
                props.textLength < 5 ?
                    <div>
                        Text too short
                    </div>
                :
                
                props.textLength > 5 ?
                    <div>
                        Text too long
                    </div> 
                : null
            }
        </div>
    )
}


export default validation;