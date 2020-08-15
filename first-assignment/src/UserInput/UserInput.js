import React from 'react';
import './UserInput.css'
const userinput = (props) => {

return(
        <div class="UserInput">
            <input type="text" onChange={props.usernameChangeEvent} value={props.username}></input>
        </div>
)

}

export default userinput;