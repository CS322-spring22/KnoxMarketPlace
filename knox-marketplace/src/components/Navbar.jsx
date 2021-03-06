import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {firebase, db} from '../firebase';

  


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
                <HomeButton onClick={() => {navigate("/")}}>Home</HomeButton>
                <PostItem onClick={() => {navigate("/post")}}>Post Item</PostItem>
            </Left> 

                <Center>
                    <OurName>Knox Marketplace</OurName>
                </Center>
                <Right>

                <FavPageButton onClick={() => {navigate("/favPage")}}>Saved Items</FavPageButton>
                <HomeSignUp>Hello, {user ? user.email : "Guest"} </HomeSignUp>
                        <HomeSignUp onClick={userSignIn}>{user ? "Sign Out" : "Knox Sign In"}</HomeSignUp>
                </Right>
            </Wrapper>
        </Container>
    )
}

 const HomeSignUp = styled.button`
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
 
 const FavPageButton = styled.button`
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

 const Cart = styled.button`
    margin-right: 5px;
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

export default Navbar