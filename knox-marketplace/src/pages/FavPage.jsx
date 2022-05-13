import React from 'react'
import styled from 'styled-components'
import '../App.css'; 
import Items from '../components/Items';
import ItemSingle from '../components/ItemSingle';
import FavItems from "../components/FavItems";



const FavPage = () => {

    
    return (
        <div className="main">

            <FavItems/>              
        </div>
    );

};

export default FavPage;
