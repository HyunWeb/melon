import React from "react";
import styled from "styled-components";
import ProfileUsername from "./ProfileUsername";

const Wrapper = styled.div`
    display:flex;
    margin-bottom: 30px;
`;

const ThumbnailImg = styled.img`
    width: 72px;
    margin: 0 auto;
    border-radius: 50%;
`;

const ImgWrap = styled.div``;


function FeedProfile (props) {
    const { thumbnails, recommendCount, userName } = props;

    return(
        <Wrapper>
            <ImgWrap>
                <ThumbnailImg src={process.env.PUBLIC_URL + `/${thumbnails}`} alt={`썸네일 이미지`}/>
            </ImgWrap>
            <ProfileUsername userName={userName} recommendCount={recommendCount}/>
        </Wrapper>
    );
}

export default FeedProfile;