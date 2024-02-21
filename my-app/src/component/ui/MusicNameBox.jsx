import React from 'react';
import styled from "styled-components";

const MusicNameBoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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


function MusicNameBox (props) {
    const {musicName, artistName} = props; 

    return(
        <MusicNameBoxWrap>
            <MusicName>{musicName}</MusicName>
            <ArtistName>{artistName}</ArtistName>
        </MusicNameBoxWrap>
    );
}

export default MusicNameBox;