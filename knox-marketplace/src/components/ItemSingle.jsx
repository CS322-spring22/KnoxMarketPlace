import React from 'react'
import styled from 'styled-components'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
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
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`

const Image = styled.img`
    height: 75%;
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
  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
            <Icon>
                <SearchIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default ItemSingle