import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Profile from '../Profile'
import Records from '../Records'

export class Home extends Component {
    componentDidMount() {
        console.log("Email:" + this.props.userData.email)
    }
    render() {
        return (
            <div>
                <p>Home Component</p>
                <Router>
                    <Link to="/records" > Records </Link>
                    <Link to="/profile" > Profile </Link>
                    <Route path="/profile" component={Profile} />
                    <Route path="/records" component={Records} />
                </Router>
            </div>
        )
    }
}

export default Home
