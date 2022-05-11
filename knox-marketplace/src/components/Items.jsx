import React, { useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ItemSingle from './ItemSingle'
import { collection, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../firebase';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Items = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
          const querySnapshot = await getDocs(collection(db, "items"));
          querySnapshot.forEach((doc) => {
              list.push(doc.data());
          });
          setData(list);
        } catch (err) {
          console.log(err);
        }
    };
    fetchData()
  }, []);

  return (
    /*
    <Container>
        {popularProducts.map(item => (
            <ItemSingle item = {item} key = {item.id} />
        ))}
    </Container>
    */
    
    <Container>
        {data.map(item => (
            <ItemSingle 
                item = {item.details} 
                key = {item.id}
            />
        ))}
    </Container>
    
  )
}

export default Items