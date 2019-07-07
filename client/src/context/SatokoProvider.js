import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

export default class SatokoProvider extends Component {
    constructor(){
        super();
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('token'),
            posts: []
        }
    }

    login = credentials => {
        axios.post('/auth/login', credentials)
        .then(res => { 
            const { user, token } = res.data;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            this.setState({ user, token });
        })
        .catch(err => console.log(err.response.data.errMsg));
    };

    render() {
        const props = {
            ...this.state,
            login: this.login
        }
        return (
            <Provider value={ props }>
                { this.props.children }
            </Provider>
        );
    }
}
export const withSatoko = C => props => {
    return (
        <Consumer>
            {value => <C { ...value } { ...props }/>}
        </Consumer>
    )
};