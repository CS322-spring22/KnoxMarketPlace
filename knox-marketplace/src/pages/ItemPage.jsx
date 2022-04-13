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


const ItemPage = () => {
  return (
    <Page>
        <Sidebar/>

        <Container>
            <Navbar/>
        </Container>
    </Page>
  )
}

export default ItemPage