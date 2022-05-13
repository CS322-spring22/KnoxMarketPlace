import React, { useState } from "react";
import Categories from "../components/Categories";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../App.css';
import '../index.css';
import styled from 'styled-components'
import ItemPage from "./ItemPage";

const Container = styled.div`
    display: flex;
    width: 100%;
`


const Home = () => {

    /*
    return (
        <div className="main">
                <Sidebar/>

                <Container>
                    <Navbar/>
                    <Items/>
                </Container>
        </div>
    )
    */

    return (
        <>
                <Navbar/>

                <Container>
                    <Sidebar/>
                    <Items/>
                </Container>
        </>
    )

};

export default Home;