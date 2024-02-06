import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Button1 = styled.button`
    width: 35px;
    height: 35px; 
    margin: 0;
    padding: 0;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
    border: none;
    cursor: pointer;
    fill: green;
    transition-duration: 400ms;

    background-image: url("${(props) => props.url}");

    &: hover{
        transform: scale(1.1);
    };
`;
const Button2 = styled(Button1)`
    margin-left: 10px;
`;
const Button3 = styled(Button1)`
    margin-left: 10px;
`;

function ButtonBox (props) {
    return(
        <Wrapper>
            <Button1 url={process.env.PUBLIC_URL + `/recommendStar.svg`}/>
            <Button2 url={process.env.PUBLIC_URL + `/commentIcon.svg`}/>
            <Button3 url={process.env.PUBLIC_URL + `/addPlayListIcon.svg`}/>
        </Wrapper>
    );
}

export default ButtonBox;