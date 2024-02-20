import React from "react";
import styled from "styled-components";
import ButtonBox from "../ui/ButtonBox";


const Wrapper = styled.li`
    font-size: 15px;
    display: flex;
    height: 86px;
    
    &:not(:last-child){border-bottom: 1px solid #707070;};
    white-space: nowrap;

    position: relative;
    display: ${(props)=>props.display};
`;

const IndexSpan = styled.span`
    line-height: 86px;
    font-size: 20px;
    font-weight: 900;
    width: 30px;
    text-align: center;
`;

const Imagespan = styled.span`
    display: block;
    width: 90px;
    height: 86px;
    background-image: url("${(props)=>props.ImageUrl}");
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: center;

`;

const MusicSpan = styled.span`
    display: block;
    line-height: 86px;
    width: 30%;

    text-overflow: ellipsis;
    overflow: hidden;


`;

const ArtistSpan = styled.span`
    display: block;
    line-height: 86px;
    width: 30%;

    text-overflow: ellipsis;
    overflow: hidden;

`;



function MelonChartListItem (props) {
    const {Image, artist, music, index, display} = props
    return(
        <Wrapper display={display}>
                <IndexSpan>{index}</IndexSpan>
                <Imagespan ImageUrl={Image}/>
                <MusicSpan>{music}</MusicSpan>
                <ArtistSpan>{artist}</ArtistSpan>
            <ButtonBox 
            buttonImg1={`recommendStar.svg`} 
            buttonImg2={`playIcon.svg`} 
            buttonImg3={`addPlayListIcon.svg`}
            size={"35px"}
            justifyContent={"center"}
            marginLeft={"10px"}
            position={"absolute"}
            height={"86px"}
            alignItems={"center"}
            />
        </Wrapper>
    );

}

export default MelonChartListItem;