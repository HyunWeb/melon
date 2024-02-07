import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    // flex-grow: 1;
    padding: 10px;
    display:flex;
    justify-content: center;
`;

const AlbumImg = styled.div`
    width: ${(props) => props.radius};
    height: ${(props) => props.radius};
    border-radius: 50%;
    background-image: url("${(props) => props.url}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: ${(props) => props.radius};
    position: relative;

    &::after{
        content: "";
        position: absolute;
        width: ${(props) => props.cdHole};
        height: ${(props) => props.cdHole};
        border-radius: 50%;
        background-color: #121212;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;


function AlbumCd (props) {
    const { radius,imgFile, cdHole } = props;
    return(
    <Wrapper>
        <AlbumImg radius={radius} url={process.env.PUBLIC_URL + `/${imgFile}`} cdHole={cdHole}>
        </AlbumImg>
    </Wrapper>

    );
}

export default AlbumCd;