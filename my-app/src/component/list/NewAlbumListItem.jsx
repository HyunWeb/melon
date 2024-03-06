import React from "react";
import styled from "styled-components";
import ButtonBox from "../ui/ButtonBox";

const Wrapper = styled.div`
    width: 20%;
    margin-bottom: 30px;
    color: #fafafa;
    position: relative;
`;

const AlbumImages = styled.img`
    width: 200px; 
    border-radius: 20px;
`;

const AlbumInfo = styled.p`
    font-size: 15px;
    line-height: 1.3;
`;
const AlbumNameSpan = styled.span`
    font-size: 16px;
    font-weight: 900;
`;
const ArtistNameSpan = styled.span``;
const DateSpan = styled.span`
    font-size: 14px; 
`;
const LikeButton = styled.button`
    width: 96px;
    height: 26px;

    outline: none;
    border: none;
    background-color: transparent;
    color: #fafafa;
    font-size: 20px; 
    // text-align: right;
    cursor: pointer;
    margin: 0; 
    padding: 0 0 0 25px;

    background-image: url(${process.env.PUBLIC_URL}/recommendStar.svg);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position: 3px center;

`;

const ButtonWrap = styled.div`
    position: absolute; 
    top: 0%; 
    left: 0%;
    width: 200px;
    height: 200px; 
    border-radius: 20px; 
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
    transition-duration: 150ms;
    opacity: 0;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`;

function NewAlbumListItem(props) {
    const {albumImage, alt, kindOfAlbum, albumName, artistName, date, countOfLike} = props
    return(
        <Wrapper>
            <ButtonWrap>
                <ButtonBox 
                    buttonImg1={`saveIcon.svg`} 
                    buttonImg2={`playIcon.svg`} 
                    buttonImg3={`addPlayListIcon.svg`}
                    size={"35px"}
                    justifycontent={"center"}
                    marginLeft={"10px"}
                    position={"absolute"}
                    height={"185px"}
                    $alignItems={"end"}
                    $right={"20%"}
                />
            </ButtonWrap>
            <AlbumImages 
                src={process.env.PUBLIC_URL + `/${albumImage}`}
                alt={alt}
            />
            <AlbumInfo>
                [{kindOfAlbum}]<br/>
                <AlbumNameSpan>{albumName}</AlbumNameSpan><br/>
                <ArtistNameSpan>{artistName}</ArtistNameSpan><br/>
                <DateSpan>{date}</DateSpan>
            </AlbumInfo>
            <LikeButton>
                {countOfLike}개
            </LikeButton>
        </Wrapper>
    );
};

export default NewAlbumListItem;