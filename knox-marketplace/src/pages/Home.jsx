import React from "react";
import Categories from "../components/Categories";
import '../App.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Home = () => {

    let navigate = useNavigate();


    return (
        <div className="App">
            <Categories/>
            <HomeSignUp onClick={() => {navigate("/loginPage")}}>Hello, Sign in or Register</HomeSignUp>

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