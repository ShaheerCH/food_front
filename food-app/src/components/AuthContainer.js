import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            {isLogin ? (
                <LoginForm toggleForm={toggleForm} />
            ) : (
                <SignupForm toggleForm={toggleForm} />
            )}
        </div>
    );
};

export default AuthContainer;
