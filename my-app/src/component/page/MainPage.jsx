import React from 'react';
import styled from "styled-components";
import MenuBar from '../ui/MenuBar';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #303030;
`;

function MainPage(props) {


    return(
        <Wrapper >
            <MenuBar/>
        </Wrapper>
    );
}



export default MainPage;