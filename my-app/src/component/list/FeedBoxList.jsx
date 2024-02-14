import React from "react";
import styled from "styled-components";
import FeedBox from "./FeedBox";
import feedData from "../../feedData.json";
const Wrapper = styled.div`
    margin-left: 35%;

    color: #fafafa;
    font-size: 17px;
`;

function FeedBoxList () {
    return(
        <Wrapper>
            { feedData && feedData.map((dataInfo) => {
                return(
                    <FeedBox
                        key={dataInfo.id}
                        feedImgfile={dataInfo.feedImgfile}
                        text={dataInfo.text}
                        thumbnail={dataInfo.thumbnail}
                        recommendCount={dataInfo.recommendCount}
                        userName={dataInfo.userName}
                    />
                );
            })}
        </Wrapper>
    );
}

export default FeedBoxList;