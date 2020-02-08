import React, { Component } from 'react'
import Home from '../Home'

export class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isUserLoggin: false
        }
    }

    onSubmit = e => {
        this.setState({
            isUserLoggin: true
        })
        e.preventDefault()
        
    }

    onEmailChanged = e => {
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChanged = e => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        if(this.state.isUserLoggin){
            return <Home userData={{ email: this.state.email, password: this.state.password }} />
        }
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Email' onChange={e => this.onEmailChanged(e)} />
                    <input type='password' placeholder='Password' onChange={e => this.onPasswordChanged(e)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login
