// CLASS COMPONENT

import React, { Component } from 'react'

class GreetClass extends Component {
    render() {
        return <h1>Welcome {this.props.name}, {this.props.occupation}</h1>
    }
}

export default GreetClass