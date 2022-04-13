import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import ItemSingle from './ItemSingle'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Items = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <ItemSingle item = {item} key = {item.id} />
        ))}
    </Container>
  )
}

export default Items