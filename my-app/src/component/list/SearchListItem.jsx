import React from "react";
import styled from "styled-components";


const Item = styled.li`
    width: 300px;
    height: 70px;
    border-radius: 8px;
    background-image: url(${process.env.PUBLIC_URL}/searchListIcon.png);
    background-repeat: no-repeat;
    background-size: 48px;
    background-position: 15px center;

    line-height: 70px;
    padding-left: 80px;
    font-size: 16px;
    box-sizing: border-box;

    &: hover{
        background-color: #1c1c1c;
    }
`;

function SearchListItem (props) {
    const {names} = props
    return(
        <Item>
            {names}
        </Item>
    );
}

export default SearchListItem;