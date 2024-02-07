import React from 'react';
import styled from "styled-components";
import AlbumCd from './AlbumCd';
import ButtonBox from './ButtonBox';
import MusicNameBox from './MusicNameBox';

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
            <AlbumCd radius={`80px`} imgFile={`feedImg_1.jpeg`} cdHole={`20px`}/>
            <MusicNameBox musicName={`옥상에서 춤을`} artistName={`SRUL`}/>
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