import React from 'react';
import styled from "styled-components";
import MusicListItem from './MusicListItem';
import playList from '../../playList.json';

const Wrapper = styled.div``;
const PlayListTitle = styled.h3`
    margin-top: 30px;
    padding-left: 20px;
`;
const MusicList = styled.ul`
    overflow:hidden;
    width: 370px;
    height: 440px;
`;


function PlayList () {

    return(
        <Wrapper>
            <PlayListTitle>재생 대기 목록</PlayListTitle>
            <MusicList>
                {playList && playList.map((playListInfo) => {
                    return(
                        <MusicListItem
                            key={playListInfo.id}
                            musicName={playListInfo.musicName}
                            artistName={playListInfo.artistName}
                            albumImg={playListInfo.albumImg}
                            display={playListInfo.id === 1 ? "none" : ""}
                        />
                    );
                })}
            </MusicList>
        </Wrapper>
    );
    
     
}

export default PlayList;