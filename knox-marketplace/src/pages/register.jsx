// import React, { useState } from 'react';
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";



// const Register = () =>  {

//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');

//     let navigate = useNavigate();

//     const register = e =>{
//       e.preventDefault();

//      //firebase
//      auth
//         .createUserWithEmailAndPassword(email,password)
//         .then((auth) => {
//            console.log(auth);
//         })
//         .catch(error => alert(error.message))

//    }

    

//     return (
//     <Container>
//         <Logo>
//         <img src="./knox-logo.png" alt="" />
//         </Logo>

//         <LogoButton onClick={() => {navigate("/Home")}}><img src="./logo192.png" alt="" /></LogoButton>

//         <FormContainer>
//                <h3>Registration Page</h3> 
//                <InputContainer>
//                   <p>Full Name</p>
//                   <input type='text' />
//                </InputContainer> 
//                <InputContainer>
//                   <p>Email</p>
//                   <input type='email' />
//                </InputContainer> 
//                <InputContainer>
//                   <p>Password</p>
//                   <input type='password' />
//                </InputContainer>
//              <SignUpButton type='submit' onClick={register}>Create Account</SignUpButton>
//             </FormContainer>
//             <LoginButtonTwo onClick={() => {navigate("/loginPage")}}>Back to Login</LoginButtonTwo>
//      </Container>
//     );
// }

// const Container = styled.div`
//    width: 100%;
//    min-width: 450px;
//    height: fit-content;
//    padding: 15px;
//    margin: auto;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//  `;

//  const Logo = styled.div`
//    width: 120px;

//    img {
//       width: 100%;
//    }
//  `;

//  const LogoButton = styled.div`
//    width: 120px;
//    position: absolute;
//    top: 0px;
//    left: 0px;

//    img {
//       width: 100%;
//    }
//  `;

//  const FormContainer = styled.form`
//    border: 1px solid lightgray;
//    width: 55%;
//    height: 400px;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: center;
//    padding: 15px;

//    h3{
//       font-size: 28px;
//       font-weight: 400;
//       line-height: 33px;
//       align-self: flex-start;

//       margin-bottom: 10px;

//    }
//  `;

//  const InputContainer = styled.div`
//    width: 100%;
//    padding: 10px;

//    p {
//       font-size: 14px;
//       font-weight: 600;
//    }

//    input {
//       width: 95%;
//       height: 33px;
//       padding-left: 5px;
//       border-radius: 5px;
//       border: 1px solid lightgray;
//       margin-top: 5px;

//       &:hover {
//          border: 1px solid purple;
//       }
//    }
//  `;

//  const SignUpButton = styled.button`
//    width: 55%;
//    height: 35px;
//    font-size: 12px;
//    margin-top: 20px;

//    &:hover{
//       background-color: #dfdfdf;
//       border: 1px solid gray;
//    }
//  `;

//  const LoginButtonTwo = styled.button`
//    width: 70%;
//    height: 35px;
//    background-color: #f3b414;
//    border: none;
//    outline: none;
//    border-radius: 10px;
//    margin-top: 30px;

//  `;

// export default Register
