import React from 'react';
import styled from "styled-components";
import AlbumCd from '../ui/AlbumCd';
import MusicNameBox from '../ui/MusicNameBox';




const MusicItems = styled.li`
    transition-duration: 200ms;
    width: 370px;
    height: 110px; 
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color: #3c3c3c00;
    border-radius: 18px;
    cursor: pointer;

    &: hover{
        background-color: #3c3c3cd9;
    }
`;

function MusicListItem (props) {
    const {musicName, artistName, albumImg } = props

    return(
        <MusicItems>
            <AlbumCd radius={`80px`} imgFile={`${albumImg}`} cdHole={`20px`}/>
            <MusicNameBox musicName={`${musicName}`} artistName={`${artistName}`}/>
            

        </MusicItems>
    );
}

export default MusicListItem;