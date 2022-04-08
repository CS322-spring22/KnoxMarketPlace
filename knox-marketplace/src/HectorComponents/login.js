import {GoogleLogin} from 'react-google-login';
import './logs.css';

const clientId = "961228782855-iluvtmr6tvcpkrg5a6idrutbj6gt5vdl.apps.googleusercontent.com";

function Login(){

    const onSuccess = (res) => {
        console.log("Login success! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login failed! res: ", res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin className= 'login'
                clientId={clientId}
                buttonText="Sign In With Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>

    )
}

export default Login;