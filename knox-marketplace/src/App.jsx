import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';
import LoginPage from "./pages/loginPage"; 
import Home from "./pages/Home";
import styled from "styled-components";
import Register from "./pages/register";





const App = () => {
  
  return(
    <Router>
      <Container>
        <Routes>
          <Route path= "/loginPage" element={<LoginPage />} />
          <Route path= "/Home" element={<Home/>} />
          <Route path= "/register" element={<Register/>} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
