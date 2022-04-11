import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../App.css';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

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



const Home = () => {

    let navigate = useNavigate();

    return (
        <div className="App">
            <Page>
                <Left>
                    <Sidebar/>
                </Left>
                <Right>
                    <Navbar/>
                    <HomeSignUp onClick={() => {navigate("/loginPage")}}>Hello, Sign in or Register</HomeSignUp>
                    <Categories/>
                </Right>
            </Page>
        </div>
    )
};

const HomeSignUp = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    appearance: none;
    background-color: #000000;
    border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    min-height: 60px;
    outline: none;
    padding: 16px 24px;
    text-align: center;
 `;

export default Home;