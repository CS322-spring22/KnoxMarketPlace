import React from "react";
import Categories from "../components/Categories";
import '../App.css';
import LoginButton from "../components/login";
import LogoutButton from "../components/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "961228782855-iluvtmr6tvcpkrg5a6idrutbj6gt5vdl.apps.googleusercontent.com";

const Home = () => {
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
            <Categories/>
        </div>
    );
};

export default Home;