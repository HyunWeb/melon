import React from "react";
import styled from "styled-components";
import AlbumCd from "./AlbumCd";
import PlayList from "../../playList.json";

const Wrapper = styled.div`
    height: 100%;
    margin-left: 110px;
    display: flex;
    align-items: center;

    color: #fafafa;
    font-weight: 900;
`;

const MusicInfoBox = styled.div``;
const MusicTitle = styled.p`
    font-size: 20px;
    line-height: 1.5;
    padding-left: 10px;
`;
const ArtistName = styled.span`
    font-size: 15px;
    display: block;
`;

function MusicStateWrap (props) {
    const {IsRunning} = props;

    return(
        <Wrapper>
            <AlbumCd radius={`78px`} imgFile={PlayList[0].albumImg} width={`20px`} height={`20px`} IsRotate={IsRunning}/>
            <MusicInfoBox>
                <MusicTitle>
                    {PlayList[0].musicName}
                    <ArtistName>
                        {PlayList[0].artistName}
                    </ArtistName>
                </MusicTitle>
            </MusicInfoBox>
        </Wrapper>  
    );
}

export default MusicStateWrap;