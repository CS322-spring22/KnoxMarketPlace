import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../App.css';
import LoginButton from "../components/login";
import LogoutButton from "../components/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import styled from 'styled-components'

const Page = styled.div`
    margin: 0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    margin: 0;
    flex: 1;
`

const Right = styled.div`
    margin: 0;
    flex: 4;
`

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
            <Page>
                <Left>
                    <Sidebar/>
                </Left>
                <Right>
                    <Navbar/>
                    <LogoutButton />
                    <LoginButton />
                    <Categories/>
                </Right>
            </Page>
        </div>
    );
};

export default Home;