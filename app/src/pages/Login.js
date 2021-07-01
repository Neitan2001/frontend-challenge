import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import '../styles/pages/login.css';

const Login = () => {
    const history = useHistory();
    const responseGoogleSuccess = (response) => {
        console.log(response.profileObj);
        localStorage.setItem('@bookapp/userId', response.profileObj.googleId);
        localStorage.setItem('@bookapp/userName', response.profileObj.givenName);
        history.push('/home');
    }

    const responseGoogleFailure = (response) => {
        console.log(response.profileObj);
    }

    return (
        <div className="login-container">
            <h1>Natan's Book App</h1>
            <div className="google-login">
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_ID}
                    buttonText="Login"
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
}

export default Login;
