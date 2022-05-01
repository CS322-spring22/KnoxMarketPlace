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

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
    
`


const CategoryPage = () => {
  return (
    <Page>
        <Sidebar/>

        <Container>
            <Navbar/>
            <Title>Books</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>

                    <Select>
                        <Option selected>
                            Tag 1
                        </Option>
                        <Option>Option 1</Option>
                        <Option>Option 2</Option>
                        <Option>Option 3</Option>
                        <Option>Option 4</Option>
                    </Select>

                    <Select>
                        <Option selected>
                            Tag 2
                        </Option>
                        <Option>Option 1</Option>
                        <Option>Option 2</Option>
                        <Option>Option 3</Option>
                        <Option>Option 4</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>

                    <Select>
                        <Option selected>
                            Relevant
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Items/>
        </Container>

    </Page>
  )
}

export default CategoryPage