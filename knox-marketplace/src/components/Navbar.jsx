import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: teal;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const OurName = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    text-align: right;
`

export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Post Item</Left>
            <Center>
                <OurName>Knox Marketplace</OurName>
            </Center>
            <Right>Cart Login</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar