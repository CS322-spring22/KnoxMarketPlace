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

const Title = styled.h2`
    margin-top: 20px;
`

const Description = styled.p`
    
`

const Card = styled.div`
    display: flex;
`



const AboutPage = () => {
    return (
        <Container>
            <Navbar/>

            <Section>
                <Title>Our Website</Title>
                <Description>
                    Description of our website
                </Description>

                <Title>How To Use</Title>
                <Description>
                    Basic instructions
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