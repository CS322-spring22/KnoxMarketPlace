import React from "react";
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { teamMember } from "../teamInfo";
import TeamMember from "../components/TeamMember";
import '../App.css';

const Container = styled.div`
    flex: 1;
`

const Section = styled.div`
    flex: 1;
    text-align: center;
`

const Title = styled.text`
    font-size: 25px;
    font-weight: bolder;
    margin-top: 25px;
    border: 3px solid black;
    align-items: center;
    justify-content: center;
`

const Description = styled.p`
    font-size: 18px;
    width: 650px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`

const Card = styled.div`
    display: flex;
`



const AboutPage = () => {
    return (
        <Container>
            <Navbar/>

            <Section>
                <br/>

                <Title>Our Website</Title>
                <Description>
                    Knox Marketplace is a Web App made by Knox students, for Knox students.<br/>
                    Verified Users can post items they want to sell to other Users.<br/>
                    Everyone can view the items, but only Knox students can post items on this website.
                </Description>

                <Title>How To Use</Title>
                <Description>
                    <h3>Seller</h3>
                    Sign In using Google Login with your Knox email and credentials.<br/>
                    You will then be able to post items for sell.<br/>
                    <br/>
                    <h3>General User / Buyer</h3>
                    Click on an item of interest to view it and add it to your Favorited page.<br/>
                    You can also contact the seller to set up a meeting place and payment method to buy the item using the contact information they provided in the item page.
                </Description>

                <Title>Meet Our Team!</Title>
                <Card>
                    {teamMember.map((item) => (
                        <TeamMember item={item} key={item.name} />
                    ))}
                </Card>
            </Section>
        </Container>
    )
}
  
export default AboutPage