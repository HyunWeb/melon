import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 10px;
    display:flex;
    justify-content: center;
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
    const { radius,imgFile, width, height } = props;
    return(
    <Wrapper>
        <AlbumImg radius={radius} $url={imgFile} >
            <CdHole width={width} height={height}></CdHole>
        </AlbumImg>
    </Wrapper>

    );
}

export default AlbumCd;