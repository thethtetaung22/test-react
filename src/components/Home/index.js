import React, { Component } from 'react'

export class Home extends Component {
    componentDidMount() {
        console.log("Email:" + this.props.userData.email)
    }
    render() {
        return (
            <div>
                <p>Home Component</p>
            </div>
        )
    }
}

export default Home
