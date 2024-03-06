import React from 'react';
import styled from "styled-components";
import AlbumCd from './AlbumCd';
import ButtonBox from './ButtonBox';
import MusicNameBox from './MusicNameBox';
import playList from '../../playList.json';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #121212;
    border-radius: 18px;
    width: 370px;
    height: 110px; 
    box-sizing: border-box;
    box-shadow: 1px 5px 5px #00000045;
`;


function MusicInfo () {
    
    return(
        <Wrapper>
            <AlbumCd radius={`80px`} imgFile={playList[0].albumImg} width={`20px`} height={`20px`} IsRotate={"running"}/>
            <MusicNameBox musicName={playList[0].musicName} artistName={playList[0].artistName}/>
            <ButtonBox 
                width={`170px`} 
                position={`center`}
                buttonImg1={`prevButton.svg`} 
                buttonImg2={`pauseButton.svg`} 
                buttonImg3={`nextButton.svg`}
            />
        </Wrapper>
    );
    
}

export default MusicInfo;