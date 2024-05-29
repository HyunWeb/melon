import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 60%;
    margin-left: 30%;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    width: 150px;
    font-size: 18px;
    font-weight: bold;
    background-color: transparent;
    outline: none;
    color: #04E632;
    border: none;
    cursor: pointer;
    line-height: 50px;
`;

function MyPageButton () {
    
    return(
        <Wrapper>
            <Button>추천해요</Button>
            <Button>플레이리스트</Button>
            <Button>최근 들은 곡</Button>
        </Wrapper>
    );
}
 
export default MyPageButton