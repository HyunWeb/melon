import React from 'react';
import styled from "styled-components";
import AlbumCd from './AlbumCd';
import ButtonBox from './ButtonBox';

const Wrapper = styled.div`
    background-color: #121212;
    border-radius: 18px;
    width: 370px;
    height: 110px; 
    align-items: center;
    // padding-left: 30px;
    box-sizing: border-box;
    box-shadow: 1px 5px 5px #00000045;

    display: flex;
`;

const MusicNameBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // padding-left: 20px;
    white-space: nowrap;
    overflow: hidden;

`;
const MusicName = styled.span`
    line-height: 2;
    font-weight: 700;
`;
const ArtistName = styled(MusicName)`
    font-weight: 500
`;

function NowPlaying (props) {
    const {musicName, artistName} = props;
    return(
        <Wrapper>
            <AlbumCd radius={`80px`} imgFile={`feedImg_1.jpeg`} cdHole={`20px`}/>
            <MusicNameBox>
                <MusicName>{musicName}</MusicName>
                <ArtistName>{artistName}</ArtistName>
            </MusicNameBox>
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

export default NowPlaying;