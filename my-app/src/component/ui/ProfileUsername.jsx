import React from "react";
import styled from "styled-components";
import ButtonBox from "./ButtonBox";

const Wrapper = styled.div`
    margin-left: 20px;
`;
const Name = styled.h3`
    font-weight: 900;
`;
const Recommend = styled.p`
    line-height: 40px;
`;
const Strong = styled.strong`
    font-size: 16px;
    font-weight: 900;
    color: #04E632;
`;

const Span = styled.span`
font-size: 14px;
font-weight: 900;
color: #04E632;
`;

const TextWrap = styled.div`
    width: 185px;
    display: flex;
    justify-content: space-between;
`;

function ProfileUsername (props) {
    const {userName, recommendCount} = props
    return(
        <Wrapper>
            <TextWrap><Name>{userName}</Name> <Span>{`1hour`}</Span></TextWrap>
            <Recommend>{`추천해요`} <Strong>{recommendCount}</Strong>{`개`}</Recommend>
            <ButtonBox/>
        </Wrapper>
    );
}

export default ProfileUsername;