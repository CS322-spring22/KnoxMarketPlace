import React from 'react'
import styled from 'styled-components'
import Items from '../components/Items'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Page = styled.div`
    display: flex;
    height: 100vh;
`

const Container = styled.div`
    flex: 1;
`

const Title = styled.h1`
    margin: 20px;
`

const CategoryPage = () => {
  return (
    <Page>
        <Sidebar/>

        <Container>
            <Navbar/>
            <Title>Books</Title>
            <Items/>
        </Container>

    </Page>
  )
}

export default CategoryPage