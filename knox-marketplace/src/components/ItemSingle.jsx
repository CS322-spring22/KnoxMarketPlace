import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from './Navbar';

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    opacity: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 250px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FEF9E7;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`

const Image = styled.img`
    height: 75%;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const ItemSingle = ({item}) => {

    const[cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }
    
  return (
    // <Container>
    //     <Image src = {item.img}/>
        
    //     <Info>
    //         <Icon>
    //             <SearchIcon/>
    //         </Icon> 
    //         <Icon>
    //             <FavoriteBorderOutlinedIcon/>
    //         </Icon>
    //     </Info>
        
    //     <Container>
    //         <h4>{item.title}</h4>
    //         <h1>{item.cost}</h1>
    //     </Container>
    // </Container>
    
    
    // <Container>
    //     <h3>{item.title}</h3>
    //     <h1>{item.cost}</h1>
    // </Container>
    <div> 
        <Container>
        <Image src = {item.img}/>
        
        <Info>
            <Icon>
                <SearchIcon/>
            </Icon> 
            <Icon>
                <FavoriteBorderOutlinedIcon onClick={() => addToCart(item)}/>
            </Icon>
        </Info>

    </Container>
    <Center>
        <h4>{item.title}</h4>
        <h4>${item.cost}</h4>
        <h1>_____</h1>
    </Center>
    

    </div>
  )
}

export default  ItemSingle;