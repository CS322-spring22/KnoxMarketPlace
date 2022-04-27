import React from 'react'
import '../index.css';
import {SidebarData} from './SidebarData'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    height: 80px;
    width: 100px
    background-color: #F7DC6F;
`
const Right = styled.div`
    flex: 1;
    text-align: right;
`
const Left = styled.div`
    flex: 1;
`
const Wrapper = styled.div`
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
`

export const basicInfo = () => {

    return(
        <div className='basicInfo'>
            <Container>
        <form>
            <fieldset>
                <label>
                    <h2>Title</h2>
                    <input name="title" />
                </label>
            </fieldset>
        {/* <button type="submit">Submit</button> */}
        </form>
        <form>
            <fieldset>
                <label>
                    <h2>Category</h2>
                    <input name="Category" />
                </label>
            </fieldset>
        {/* <button type="submit">Submit</button> */}
        </form>
        <form>
            <fieldset>
                <label>
                    <h2>Cost</h2>
                    <input name="Cost" />
                </label>
            </fieldset>
        {/* <button type="submit">Submit</button> */}
        </form>
                {/* <h2>tittle</h2>
                <h2>category</h2>
                <h2>cost</h2> */}
            </Container>
        </div>
    )
}

export default basicInfo