import React from "react";
import styled from "styled-components";
import ButtonBox from "../ui/ButtonBox";


const Wrapper = styled.li`
    font-size: 15px;
    display: flex;
    height: 65px;
    
    &:not(:last-child){border-bottom: 1px solid #707070;};
    white-space: nowrap;

    position: relative;
    display: ${(props)=>props.display};
`;

const IndexSpan = styled.span`
    line-height: 65px;
    font-size: 20px;
    font-weight: 900;
    width: 30px;
    text-align: center;
`;

const Imagespan = styled.span`
    display: block;
    width: 65px;
    height: 100%;
    background-image: ${({ $imagepath }) => `url(${process.env.PUBLIC_URL}/${$imagepath})`};
    
    
    background-size: 50px;
    background-repeat: no-repeat;
    background-position: center;

`;

const MusicSpan = styled.span`
    padding-left: 30px;
    display: block;
    line-height: 65px;
    width: 25%;

    text-overflow: ellipsis;
    overflow: hidden;


`;

const ArtistSpan = styled.span`
    display: block;
    padding-left: 10px;
    line-height: 65px;
    width: 20%;

    text-overflow: ellipsis;
    overflow: hidden;

`;



function MelonChartListItem (props) {
    const {Image, artist, music, index, display} = props
    return(
        <Wrapper display={display}>
                <IndexSpan>{index}</IndexSpan>
                <Imagespan $imagepath={Image}/>
                <MusicSpan>{music}</MusicSpan>
                <ArtistSpan>{artist}</ArtistSpan>
            <ButtonBox 
            buttonImg1={`recommendStar.svg`} 
            buttonImg2={`playIcon.svg`} 
            buttonImg3={`addPlayListIcon.svg`}
            size={"35px"}
            justifycontent={"center"}
            marginLeft={"10px"}
            position={"absolute"}
            height={"65px"}
            $alignItems={"center"}
            />
        </Wrapper>
    );

}

export default MelonChartListItem;