import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {firebase} from '../firebase';




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
   

    const SignInWithFirebase = e => {
        // e.preventDefault();
  
        var google_provider = new firebase.auth.GoogleAuthProvider();
        google_provider.setCustomParameters({
           hd: "knox.edu"
         });
  
        firebase.auth().signInWithPopup(google_provider)
        .then((re)=>{
           console.log(re);
        })
        .catch((err) => {
           console.log(err);
        })
     }

     const logoutAcc = async (e) => {
        // e.preventDefault();
  
        await signOut(auth);
      }

      const userSignIn = e =>{
        if(user == null){
            SignInWithFirebase();
        } else {
            logoutAcc();
        }

      }

    onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
    });


    let navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <Left>
                    <PostItem onClick={() => {navigate("/post")}}>Post Item</PostItem>
                </Left>
                <Center>
                    <OurName>Knox Marketplace</OurName>
                </Center>
                <Right>

                <HomeSignUp>Hello, {user ? user.email : "Guest"} </HomeSignUp>
                        <HomeSignUp onClick={userSignIn}>{user ? "Sign Out" : "Sign In"}</HomeSignUp>
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