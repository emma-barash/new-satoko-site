import React from 'react';
import Form from '../shared/Form.js';
import AuthForm from './AuthForm.js';
import { Login } from '../elements/index.js';
import { Link } from 'react-router-dom';
import { 
    SignIn,
    FormWrapper
 } from '../elements/index.js';

const Auth = () => {
    return (
        <div>
            <Link className="linkedPage" to="/main">Main</Link>
            <div className="centerText">
            <SignIn>Please Sign In</SignIn>
                <FormWrapper>
                <Form
                inputs={{ username: '', password: '' }}
                // submit={inputs => login(inputs) }
                render={fProps => <AuthForm {...fProps} />}
                />
                </FormWrapper>
            </div>
        </div>
    );
};

export default Auth;