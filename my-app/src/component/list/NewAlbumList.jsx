import React from "react";
import styled from "styled-components";
import NewAlbumListItem from "./NewAlbumListItem";

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;

    padding-bottom: 150px;
`;

function NewAlbumList(props) {
    const {NewAlbumData} = props
    return(
        <Wrapper>
            {NewAlbumData && NewAlbumData.map((DataInfo)=>{
                return(
                    <NewAlbumListItem
                        key={DataInfo.id}
                        albumImage={DataInfo.albumImage}
                        kindOfAlbum={DataInfo.kindOfAlbum}
                        albumName={DataInfo.albumName}
                        artistName={DataInfo.artistName}
                        date={DataInfo.date}
                        countOfLike={DataInfo.countOfLike}
                        alt={DataInfo.alt}
                    />
                );
            })}
        </Wrapper>
    );
};

export default NewAlbumList;