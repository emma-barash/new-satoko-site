import React from 'react';
import { 
    StyledUsername,
    StyledPassword,
    AuthB 
} from '../elements/index.js';

const AuthForm = props => {
    const { inputs, handleSubmit, handleChange } = props
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <StyledUsername value={ inputs.username } onChange={ handleChange } name="username" placeholder=" なまえ" />
                <StyledPassword value={ inputs.password } onChange={ handleChange } name="password" placeholder=" パスワード" />
                <AuthB>Authenticate</AuthB>
            </form>
        </div>
    );
};

export default AuthForm;