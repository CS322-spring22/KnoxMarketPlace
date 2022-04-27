import React from 'react'
import '../index.css';
import {SidebarData} from './SidebarData'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';

export const basicInfo = () => {
    return(
        <div className='basicInfo'>
            <Container>
        <form>
            <fieldset>
                <label>
                    <h2>Description</h2>
                    <input name="Description" />
                </label>
            </fieldset>
        {/* <button type="submit">Submit</button> */}
        </form>
            </Container>
        </div>
    )
}
export default basicInfo