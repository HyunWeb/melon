import React from 'react';
import styled from "styled-components";
import MenuBar from '../ui/MenuBar';
import RecommendArtistBox from '../ui/RecommandArtistBox';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #303030;
    font-family: 'GmarketSansMedium', sans-serif;
`;

function MainPage(props) {


    return(
        <Wrapper >
            <MenuBar/>
            <RecommendArtistBox/>
        </Wrapper>
    );
}



export default MainPage;