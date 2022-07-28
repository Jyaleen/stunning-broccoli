// FUNCTIONAL COMPONENT

import React from 'react'


const GreetFunctional = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}, {props.occupation}</h1>
            {props.children}
        </div>
    )
}


export default GreetFunctional