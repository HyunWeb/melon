import React from "react";
import styled from "styled-components";

const WrapItem = styled.li`
    width: 115px; 
    height: 130px;
`;
const ImgBox = styled.div`
    margin: 0 auto;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
`;

const ArtistImg = styled.img.attrs({
    alt:`추천하는 아티스트`
})`
    width: 70px;
    cursor: pointer;
    transition-duration: 400ms;
    &: hover{ 
        transform: scale(1.2);
    }
`;

const ArtistNames = styled.p`
    font-size: 16px;
    color: #fafafa;
    text-align: center;
    margin-top: 10px;
    white-space: nowrap;
`;

function ArtistListItem(props) {
    const { imgFile, artistName } = props;

    return (
        <WrapItem>
            <ImgBox>
                <ArtistImg 
                    src={process.env.PUBLIC_URL + `/${imgFile}`}
                />
            </ImgBox>

            <ArtistNames>{artistName}</ArtistNames>
        </WrapItem>
    );
}

export default ArtistListItem;