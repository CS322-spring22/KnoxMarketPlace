import React from "react";
import styled from 'styled-components'
import '../App.css';
import '../index.css';

const Container = styled.div`
    flex: 1;
`
const AboutPage = () => {

    return (
        <div className="main">
            <Container>
            {/* style="text-align:center;white-space:pre-wrap;"  */}
                <h3>
                    this is KnoxMarketPlace <br />
                    bruh bruh lmao lmao k <br />
                    yo whatsup
                </h3>
                
            </Container>
        </div>
    )
};

export default AboutPage;