import React from "react";
import styled from "styled-components";
import ButtonBox from "./ButtonBox";

const Wrapper = styled.div`
width: 35%;
padding: 0px 50px 100px 50px;

color: #fafafa;
font-size: 20px;
font-weight: 900;
text-align: center;
`;

const RankingToptitle = styled.h3`
    font-size: 40px;
    color: #fafafa;
    font-weight: 900;
    margin-bottom: 20px;
    text-align: left;
    padding-left: 10%;

`;
const Strong = styled.strong`
    font-size: 60px;
    color: #04E632;
`;

const AlbumImg = styled.img`
    width: 400px;
`;

const MusicName = styled.p`
    color: #fafafa;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    line-height: 2.5;

`;
const ArtistName = styled.p`
    font-size: 17px;
    margin-bottom: 16px;
`;



function TopRanking (props) {
    const {Data} = props;

    return(
        <Wrapper>
            <RankingToptitle><Strong>1</Strong>위</RankingToptitle>
            <AlbumImg
                src={process.env.PUBLIC_URL + `/${Data[0].albumImage}`}
                alt={`1위 앨범 커버 이미지`}
            />
            <MusicName>{Data[0].musicName}</MusicName>
            <ArtistName>{Data[0].artistName}</ArtistName>
            <ButtonBox 
            buttonImg1={`recommendStar.svg`} 
            buttonImg2={`playIcon.svg`} 
            buttonImg3={`addPlayListIcon.svg`}
            size={"35px"}
            justifycontent={"center"}
            marginLeft={"20px"}
            />
        </Wrapper>
    );

}

export default TopRanking