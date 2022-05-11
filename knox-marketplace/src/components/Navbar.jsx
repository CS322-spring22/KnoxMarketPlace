import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {firebase} from '../firebase';

  


const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 80px;
    background-color: #F7DC6F;
`

const Wrapper = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;

    .itembutton{
        margin-left: 30px;
        width: 100px;
        height: 50px;
    }

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
                <LogoButton className="logobutton" onClick={() => {navigate("/")}}><img src="./logotest.jpg" alt="" /></LogoButton>
                <HomeButton className="itembutton" onClick={() => {navigate("/")}}>Home</HomeButton>
                <ItemPosting className="itembutton" onClick={() => {navigate("/post")}}>Post Item</ItemPosting>
            </Left> 

            {/* <Posting>
            <PostItem onClick={() => {navigate("/post")}}>Post Item</PostItem>
             </Posting> */}

                <Center>
                    <OurName>Knox Marketplace</OurName>
                </Center>
                <Right>

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
    text-align: center;

    &:hover {
        background-color: #858585;
        transition: all 0.5s ease;
    }
 `;

 const LogoButton = styled.div`
   width: 180px;
   margin: 10px;
   cursor: pointer;
   margin-left: 15px;

   img {
      width: 100%;
   }
`
const ItemPosting = styled.button`

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
    text-align: center;

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

    &:hover {
        background-color: #858585;
        transition: all 0.5s ease;
    }
 `;

export default Navbar