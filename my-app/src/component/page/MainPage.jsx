import React from 'react';
import styled from "styled-components";
import MenuBar from '../ui/MenuBar';
import RecommendArtistBox from '../ui/RecommandArtistBox';
import FeedBoxList from '../list/FeedBoxList';
import PlayBox from '../list/PlayBox';

const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
   overflow-x: hidden;
    font-family: 'GmarketSansMedium', sans-serif;
`;

function MainPage(props) {


    return(
        <Wrapper>
            <MenuBar/>
            <RecommendArtistBox/>
            <FeedBoxList/>
            <PlayBox/>
        </Wrapper>
    );
}



export default MainPage;

/*
    FeedBox > FeedImg / FeedProfile / FeedParagraph > 
*/