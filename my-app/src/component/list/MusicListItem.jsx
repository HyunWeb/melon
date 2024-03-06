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
    display: ${(props)=>props.display};

    &: hover{
        background-color: #3c3c3cd9;
    }
`;

function MusicListItem (props) {
    const {musicName, artistName, albumImg, display } = props

    return(
        <MusicItems display={display} >
            <AlbumCd radius={`80px`} imgFile={`${albumImg}`} IsRotate={"paused"}/>
            <MusicNameBox musicName={`${musicName}`} artistName={`${artistName}`}/>
            

        </MusicItems>
    );
}

export default MusicListItem;