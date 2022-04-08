import './App.css';
import LoginButton from "./HectorComponents/login";
import LogoutButton from "./HectorComponents/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "961228782855-iluvtmr6tvcpkrg5a6idrutbj6gt5vdl.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start(){
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
    };

    gapi.load('client:auth2', start);
  });

  return (
    <div className="App">
      <LogoutButton />
      <LoginButton />
    </div>
  );
}

export default App;
