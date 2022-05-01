import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Page = styled.div`
    display: flex;
    height: 100vh;
`

const Container = styled.div`
    flex: 1;
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const Image = styled.img`
  width: 50%;
  height: 40vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
`

const ChatContainer = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 35px;
  margin: 10px;
`

const CartContainer = styled.div`
  flex: 1;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`


const ItemPage = () => {
  return (
    <Page>
        <Sidebar/>

        <Container>
            <Navbar/>

            <Wrapper>
                <InfoContainer>
                    <Image src = "https://th.bing.com/th/id/OIP.odasfbF8GZ7R0pv8l24wswHaLO?w=182&h=275&c=7&r=0&o=5&dpr=1.25&pid=1.7"/>
                    <Title>Harry Potter & The Goblet of Fire</Title>
                    <Desc>
                        This is the description for the item.
                    </Desc>
                    <Price>$ 20</Price>
                    <CartContainer>
                        <Button>ADD TO CART</Button>
                    </CartContainer>
                </InfoContainer>

                <ChatContainer>
                    
                </ChatContainer>
            </Wrapper>
        </Container>
    </Page>
  )
}

export default ItemPage