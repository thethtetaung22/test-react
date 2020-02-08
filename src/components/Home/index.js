import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Profile from '../Profile'

export class Home extends Component {
    componentDidMount() {
        console.log("Email:" + this.props.userData.email)
    }
    render() {
        return (
            <div>
                <p>Home Component</p>
                <Router>
                    <Link to="/home" > Home </Link>
                    <Link to="/profile" > Profile </Link>
                    <Route path="/profile" component={Profile}/>
                </Router>
            </div>
        )
    }
}

export default Home
