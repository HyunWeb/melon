import React from "react";
import styled from "styled-components";
import SearchListItem from "./SearchListItem";

const Wrapper = styled.div`
    width: 300px;
    height: 300px;
    margin-left: 135px;
    margin-top: 30px;
    border-top: 1px solid #707070;
`;
const Container = styled.div`
    position: relative;
`;
const Title = styled.h3`
    font-size: 20px;
    font-weight: 500;
    line-height: 70px;
    padding-left: 10px;
    box-sizing: border-box;
`;
const Sbutton = styled.button`
    width: 81px;
    height: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #04E632;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 27px;
    right: 5px;
`;
const List = styled.ul`
    cursor: pointer;
    
`;

function RecentSearchList (props) {
    const { searchLists, ClickFunc} = props
    return(
        <Wrapper>
            <Container>
                <Title>최근 검색 항목</Title>
                <Sbutton type="button" onClick={ClickFunc}>모두 지우기</Sbutton>
            </Container>
            <List>
                {searchLists && searchLists.map((name,index) => {
                    return(
                        <SearchListItem
                            key={index}
                            names={name}
                        />
                    )
                })}
            </List>
        </Wrapper>
    );
}

export default RecentSearchList;