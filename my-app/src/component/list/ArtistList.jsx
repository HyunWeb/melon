import React from "react";
import styled from "styled-components";
import ArtistListItem from "./ArtistIListtem";

const ArtistListUl = styled.ul`
    display: flex;
`;

function ArtistList(props) {
    const { artistInfo } = props;

    return (
        < >
            <ArtistListUl>
                {artistInfo && artistInfo.map((artistInfo) => {
                    return(
                        <ArtistListItem
                            key={artistInfo.id}
                            imgFile={artistInfo.imgFile}
                            artistName={artistInfo.artistName}
                        />
                    )
                })}
            </ArtistListUl>
        </>
    );
}

export default ArtistList;