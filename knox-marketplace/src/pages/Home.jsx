import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../App.css';
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



const Home = () => {

    return (
        <div className="App">
            <Page>
                <Left>
                    <Sidebar/>
                </Left>
                <Right>
                    <Navbar/>
                    <Categories/>
                </Right>
            </Page>
        </div>
    )
};

export default Home;