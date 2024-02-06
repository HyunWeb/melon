import React from 'react';
import styled from "styled-components";
import NowPlaying from '../ui/NowPlaing';
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
            <NowPlaying musicName={`옥상에서 춤을`} artistName={`SRUL`}/>
            <PlayList/>
        </Wrapper>
    );
    
     
}

export default PlayBox;