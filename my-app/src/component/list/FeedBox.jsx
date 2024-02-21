import React from "react";
import styled from "styled-components";
import FeedProfile from "../ui/FeedProfile";

const PlayButton = styled.button`
    position: absolute;
    z-index: 1;

    width: 80px;
    height: 80px;
    margin: 0;
    padding: 0;
    
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${process.env.PUBLIC_URL}/PlayButton.svg);
    

    outline: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    top: 450px;
    right: 30px;

    box-shadow: 1px 5px 5px #00000045;
    transition-duration: 200ms;

    &: hover{
        transform: translate(0, -3px);
    }
`;

const Wrapper = styled.div`
    width: 500px;
    margin-bottom : 30px;
    border-bottom: 1px solid #5a5a5a;
    position: relative;
`;

const FeedImg = styled.img`
    max-width: 500px;
    margin-bottom: 30px;
`;

const FeedParagraph = styled.p`
    white-space: pre-wrap;
    margin-bottom: 30px;
    line-height: 1.3;
`;

function FeedBox(props) {
    const {feedImgfile, text, thumbnail, recommendCount, userName, alt} = props;
    return(
        <Wrapper>
            <PlayButton></PlayButton>
            <FeedImg src={process.env.PUBLIC_URL + `/${feedImgfile}`} alt={alt}/>
            <FeedProfile thumbnails={thumbnail} recommendCount={recommendCount} userName={userName} />
            <FeedParagraph>{text}</FeedParagraph>
        </Wrapper>
    );
}

export default FeedBox;