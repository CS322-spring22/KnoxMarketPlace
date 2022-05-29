
import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { db } from '../firebase';
import { doc, deleteDoc } from "firebase/firestore";




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

const Card = styled.div`
    flex: 1;
    margin: 5px;
    height: 400px;
    align-items: center;
`

const Image = styled.img`
    height: 75%;
`

const ItemDetails = styled.div`
    text-align: center;
    height: 100px;
`

const Line = styled.h1`
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

const FavItemsSingle = ({item}) => {

    const [data, setData] = useState([]);

    

    const deleteItem = async (id) => {
        const itemDoc = doc(db, "FavoriteItems", id);
        await deleteDoc(itemDoc);
        console.log("delete success");
      };

    
    
 
  return (
    <Card> 
        <Container>
        {data.map((item) => (
            <FavItemsSingle key = {item.id}
                item = {item}   
            />
        ))}
            <Image src = {item.image}/>
            <Info>
                <Icon>
                    <SearchIcon/>
                </Icon> 
                <Icon>
               
                    <ClearIcon onClick = {() => {
                        deleteItem(item.id) 
                    }}/>
               
                </Icon>
            </Info>
        </Container>

        <ItemDetails>
            <h4>{item.title}</h4>
            <h4>${item.price}</h4>
            <Line>_____</Line>
        </ItemDetails>

    </Card>
  )
}

export default FavItemsSingle;
