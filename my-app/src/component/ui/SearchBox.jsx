import React, {useState, useCallback} from "react";
import styled from "styled-components";
import SearchForm from "./searchForm";
import RecentSearchList from "../list/RecentSearchList";

const Wrapper = styled.div`
    width: 460px;
    height: 100%;
    position: fixed;
    background-color: #121212;
    color: #fafafa;
    transition-duration: 400ms;
    left: ${(props) => props.left};
`;

const SearchTitle = styled.h2`
    font-size: 30px;
    font-weight: 900;
    padding-left: 130px;
    padding-top: 90px;
`;

function SearchBox (props) {
    const [musicName, setMusicName] = useState("");
    const [searchList, setsearchList] = useState([]);
    const { view } = props

    const deleteClick = () => {setsearchList([])}
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(musicName == "")return;

        setsearchList(searchList.concat(musicName));
        setMusicName("")
    };

    return(
        <Wrapper left={view}>
            <SearchTitle>검색</SearchTitle>
            <SearchForm musicNames={musicName} setMusicNames={setMusicName} handleSubmits={handleSubmit}/>
            <RecentSearchList musicNames={musicName} searchLists={searchList} ClickFunc={deleteClick}/>
        </Wrapper>
    );
}

export default SearchBox;