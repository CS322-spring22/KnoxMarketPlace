import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const Container = styled.div`
    height: 80px;
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
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
    });

    const logoutAcc = async (e) => {
        e.preventDefault();
  
        await signOut(auth);
      }

    let navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <Left>
                    <PostItem>Post Item</PostItem>
                </Left>
                <Center>
                    <OurName>Knox Marketplace</OurName>
                </Center>
                <Right>
                    <Cart>Cart</Cart>
                 <HomeSignUp onClick={() => {navigate("/loginPage")}}>Sign In</HomeSignUp>
                    <NavDropdown title= {user?.email}>
                        <NavDropdown.Item>
                        <HomeSignUp onClick={logoutAcc}>Sign Out</HomeSignUp>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Right>
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

 const PostItem = styled.button`
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

 const Cart = styled.button`
    margin-right: 5px;
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