import React, { useState } from 'react';
import styled from "styled-components";
import LoginButton from "../components/login";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const clientId = "961228782855-iluvtmr6tvcpkrg5a6idrutbj6gt5vdl.apps.googleusercontent.com";

const LoginPage = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   let navigate = useNavigate();


   useEffect(() => {
      function start(){
          gapi.client.init({
            clientId: clientId,
            scope: ""
          })
      };
  
      gapi.load('client:auth2', start);
    });

    const signIn = e => {
      e.preventDefault();

      //fire base
      auth
         .signInWithEmailAndPassword(email, password)
         .then(auth => {
            navigate('/Home')
         })
         .catch(error => alert(error.message))
    }

    const register = e =>{
      e.preventDefault();
      
     //firebase
     auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
           console.log(auth);
           if(auth) {
              navigate('/Home')
           }
        })
        .catch(error => alert(error.message))

   }


    
   return (
         <Container>
            <Logo>
               <img src="./knox-logo.png" alt="" />
            </Logo>

            <LogoButton onClick={() => {navigate("/Home")}}><img src="./logo192.png" alt="" /></LogoButton>

            <FormContainer>
               <h3>Sign-In</h3> 

               <InputContainer>
                  <p>Email</p>
                  <input type='email' value={email} onChange=
                  {e => setEmail(e.target.value)} />
               </InputContainer> 

               <InputContainer>
                  <p>Password</p>
                  <input type='password' value={password} onChange=
                  {e => setPassword(e.target.value)} />
               </InputContainer>

               <LoginButtonTwo type='submit' onClick={signIn}
               >Login</LoginButtonTwo>

               <LoginButtonTwo type='submit' onClick={register}
               >Register Account</LoginButtonTwo>


               <LoginButton />
            
               <InfoText>By signing up with "Knox MarketPlace", 
               you are agreeing to the <span>Conditions of Use</span> and <span>Privacy Notice</span>.
               </InfoText>
            </FormContainer>
            {/* <SignUpButton onClick={() => {navigate("/register")}}>Create Account for Knox MarketPlace</SignUpButton> */}
         </Container>
   );
}

 const Container = styled.div`
   width: 100%;
   min-width: 450px;
   height: fit-content;
   padding: 15px;
   margin: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
 `;

 const Logo = styled.div`
   width: 120px;

   img {
      width: 100%;
   }
 `;

 const LogoButton = styled.div`
   width: 120px;
   position: absolute;
   top: 0px;
   left: 0px;

   img {
      width: 100%;
   }
 `;

 const FormContainer = styled.form`
   border: 1px solid lightgray;
   width: 55%;
   height: 400px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 15px;

   h3{
      font-size: 28px;
      font-weight: 400;
      line-height: 33px;
      align-self: flex-start;

      margin-bottom: 10px;

   }
 `;

 const InputContainer = styled.div`
   width: 100%;
   padding: 10px;

   p {
      font-size: 14px;
      font-weight: 600;
   }

   input {
      width: 95%;
      height: 33px;
      padding-left: 5px;
      border-radius: 5px;
      border: 1px solid lightgray;
      margin-top: 5px;

      &:hover {
         border: 1px solid purple;
      }
   }


 `;

 const LoginButtonTwo = styled.button`
   width: 70%;
   height: 35px;
   background-color: #f3b414;
   border: none;
   outline: none;
   border-radius: 10px;
   margin-top: 30px;

 `;

 const InfoText = styled.p`
   font-size: 12px;
   width: 100%;
   word-wrap: normal;
   word-break: normal;
   margin-top: 20px;

   span{
      color: #426bc0;
   }
 `;

 const SignUpButton = styled.button`
   width: 55%;
   height: 35px;
   font-size: 12px;
   margin-top: 20px;

   &:hover{
      background-color: #dfdfdf;
      border: 1px solid gray;
   }
 `;

export default LoginPage;
