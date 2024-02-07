import React from 'react';
import styled from "styled-components";
import MusicInfo from '../ui/MusicInfo';
import PlayList from './PlayList';

const Wrapper = styled.div`
    position: fixed;
    right: 5%;
    top: 20%;

    width: 370px;
    height: 640px;    

    color: #fafafa;
    font-size: 900;
`;


function PlayBox () {

    return(
        <Wrapper>
            <MusicInfo/>
            <PlayList/>
        </Wrapper>
    );
    
     
}

export default PlayBox;