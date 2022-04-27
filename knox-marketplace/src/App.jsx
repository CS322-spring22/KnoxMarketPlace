import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage"; 
import Home from "./pages/Home";
import styled from "styled-components";
import Register from "./pages/register";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import AboutPage from "./pages/AboutPage";
import Post from "./pages/PostPage";

const App = () => {
  
  return(
    <Router>
      <Container>
        <Routes>
          <Route path= "" element={<Home/>} />
          <Route path= "/loginPage" element={<LoginPage />} />
          <Route path= "/Home" element={<Home/>} />
          <Route path= "/register" element={<Register/>} />
          <Route path= "/Category" element={<CategoryPage/>} />
          <Route path= "/Item" element={<ItemPage/>} />
          <Route path= "/AboutUs" element={<AboutPage/>} />
          <Route path= "/post" element={<Post/>} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
