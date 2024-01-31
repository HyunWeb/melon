import React from "react";
import styled from "styled-components";
import ArtistList from "../list/ArtistList";
import artistData from "../../artistData.json";

const Wrapper = styled.div`
    width: 50%;
    margin-left: 35%;
    padding-top: 30px;
`;

const RecommendArtist = styled.h3`
    font-size: 20px;
    color: #04E632;
    margin-bottom: 30px;
    padding-left: 21px;
`;

function RecommendArtistBox () {
    return(
        <Wrapper>
            <RecommendArtist>
                    추천 아티스트
            </RecommendArtist>
            <ArtistList
            artistInfo ={ artistData }
            />
        </Wrapper>
    );
}

export default RecommendArtistBox;