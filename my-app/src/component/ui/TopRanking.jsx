import React from "react";
import styled from "styled-components";
import ButtonBox from "./ButtonBox";

const Wrapper = styled.div`
width: 35%;
height: 100%;
padding: 100px;

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
    const {KR_ChartData} = props;

    console.log(KR_ChartData[0].albumImage);
    return(
        <Wrapper>
            <RankingToptitle><Strong>1</Strong>위</RankingToptitle>
            <AlbumImg
                src={process.env.PUBLIC_URL + `/${KR_ChartData[0].albumImage}`}
            />
            <MusicName>{KR_ChartData[0].musicName}</MusicName>
            <ArtistName>{KR_ChartData[0].artistName}</ArtistName>
            <ButtonBox 
            buttonImg1={`recommendStar.svg`} 
            buttonImg2={`playIcon.svg`} 
            buttonImg3={`addPlayListIcon.svg`}
            size={"35px"}
            position={"center"}
            marginLeft={"20px"}
            />
        </Wrapper>
    );

}

export default TopRanking