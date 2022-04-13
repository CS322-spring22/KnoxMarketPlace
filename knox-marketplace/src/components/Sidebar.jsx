import React from 'react'
import '../index.css';
import {SidebarData} from './SidebarData'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

export const Sidebar = () => {
    let navigate = useNavigate();

  return (
    <div className='Sidebar'>
        <Container>
            <LogoButton onClick={() => {navigate("/Home")}}><img src="./knox-logo.png" alt="" /></LogoButton>
        </Container>

        <SearchContainer>
            <SearchIcon/>
            <Input/>
        </SearchContainer>

        <Categories>
            <h2>Categories</h2>
        </Categories>

        <Container>
            <ul className = 'SidebarList'>
            {SidebarData.map((val, key) => {
                return (
                    <li 
                    key = {key} 
                    className = 'row'
                    id = {window.location.pathname === val.link ? 'active' : ''}
                    onClick = {() => {window.location.pathname = val.link}}
                    >
                        <div id = 'icon'>{val.icon}</div>
                        <div id = 'title'>{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </Container>

        <AboutUs>
            <h2>About Us</h2>
        </AboutUs>
    </div>
  )
}

const LogoButton = styled.div`
   width: 180px;
   margin: 20px;
   cursor: pointer;

   img {
      width: 100%;
   }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchContainer = styled.div`
    border: 3px solid black;
    display: flex;
    align-items: center;
    margin: 10px;
`

const Input = styled.input`
    border: none;
    flex: 1;
`

const Categories = styled.div`
    border: 3px solid black;
    flex: 1;
    margin: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
`

const AboutUs = styled.div`
    border: 3px solid black;
    width: ;
    flex: 1;
    margin: 10px;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: absolute;
    padding: 2px;
`


export default Sidebar