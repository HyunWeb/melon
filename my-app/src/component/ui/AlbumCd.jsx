import React from 'react';
import styled, {keyframes} from "styled-components";

const rotateCD = keyframes`
    to{
        transform: rotate(360deg);
    }
`;


const Wrapper = styled.div`
    padding: 10px;


`;

const AlbumImg = styled.div`
    width: ${(props) => props.radius};
    height: ${(props) => props.radius};
    border-radius: 50%;
    background-image: ${({ $url }) => `url(${process.env.PUBLIC_URL}/${$url})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${(props) => props.radius};
    position: relative;
    animation: ${rotateCD} 10s infinite linear;
    animation-play-state: ${(props) => props.$IsRotate};
`;

const CdHole = styled.div`
    position: absolute;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 50%;
    background-color: #121212;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;



function AlbumCd (props) {

    const { radius, imgFile, width, height, IsRotate } = props;
    return(
    <Wrapper>
        <AlbumImg radius={radius} $url={imgFile} $IsRotate={IsRotate} >
            <CdHole width={width} height={height}></CdHole>
        </AlbumImg>
    </Wrapper>

    );
}

export default AlbumCd;