import {GoogleLogout} from 'react-google-login';
import './logs.css';
 
const clientId = "961228782855-iluvtmr6tvcpkrg5a6idrutbj6gt5vdl.apps.googleusercontent.com";

function Logout(){

    const onSuccess = (res) => {
        console.log("Logout success!");
    }

    return (
        <div id="signOutButton">
              <GoogleLogout className= 'logout'
                clientId={clientId}
                buttonText={"Sign Out With Google"}
                onLogoutSuccess={onSuccess} 
              />  
        </div>
    )
}

export default Logout;