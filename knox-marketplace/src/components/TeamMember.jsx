import React from "react";
import styled from "styled-components";

const Card = styled.div`
    flex: 1;
    margin: 30px;
    height: 80vh;
    position: relative;
    border: 2px solid black;
`;

const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
`;

const Name = styled.h2`

`;

const Description = styled.p`
    color: black;
    margin-bottom: 10px;
`;


const TeamMember = ({item}) => {
    return (
        <Card>
            <Image src = {item.img}/>

            <Name>{item.name}</Name>

            <Description>
                {item.description}
            </Description>
        </Card>
    )
}
 
export default TeamMember