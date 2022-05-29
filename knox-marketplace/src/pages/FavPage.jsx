
import React, { useState } from 'react'
import styled from 'styled-components'
import '../App.css'; 
import { useNavigate } from "react-router-dom";
import Items from '../components/Items';
import ItemSingle from '../components/ItemSingle';
import FavItems from "../components/FavItems";


const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 100;
    height: 80px;
    background-color: #F7DC6F;
    width: 100%;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;

`

const Center = styled.div`
    flex: 1;
`

const OurName = styled.h1`
    font-weight: bold;
`




const FavPage = () => {

    let navigate = useNavigate();

    return (
        <>
          <Container>
            <Wrapper>
            <Left>
                <HomeButton onClick={() => {navigate("/")}}>Home</HomeButton>
                <PostItem onClick={() => {navigate("/post")}}>Post Item</PostItem>
            </Left> 

                <Center>
                    <OurName>Favorite Items</OurName>
                </Center>
            </Wrapper>
        </Container>

            <FavItems/>

        </>
        
    );

};

const PostItem = styled.button`
    left: 0px;
    appearance: none;
    background-color: #CACFD2;
    border: 2px solid #CACFD2;
    border-radius: 5px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    min-height: 40px;
    outline: none;
    padding: 6px 8px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
        background-color: #858585;
        transition: all 0.5s ease;
    }
 `;

 const HomeButton = styled.button`
    right: 0px;
    appearance: none;
    background-color: #CACFD2;
    border: 2px solid #CACFD2;
    border-radius: 5px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    min-height: 40px;
    outline: none;
    padding: 6px 8px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
        background-color: #858585;
        transition: all 0.5s ease;
    }
 `;



export default FavPage;
