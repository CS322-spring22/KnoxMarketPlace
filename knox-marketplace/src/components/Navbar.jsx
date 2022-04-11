import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    background-color: teal;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const OurName = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    text-align: right;
`

export const Navbar = () => {
    let navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <Left>Post Item</Left>
                <Center>
                    <OurName>Knox Marketplace</OurName>
                </Center>
                <Right><HomeSignUp onClick={() => {navigate("/loginPage")}}>Sign in</HomeSignUp></Right>
            </Wrapper>
        </Container>
    )
}

const HomeSignUp = styled.button`
    right: 0px;
    appearance: none;
    background-color: #000000;
    border: 2px solid #1A1A1A;
    border-radius: 5px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    min-height: 40px;
    outline: none;
    padding: 6px 8px;
    text-align: center;
 `;

export default Navbar