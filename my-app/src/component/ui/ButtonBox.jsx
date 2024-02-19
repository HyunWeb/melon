import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: ${(props) => props.width};
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.position};
`;
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
    margin-left: ${(props) => props.widelength || "10px"}
`;
const Button3 = styled(Button1)`
    margin-left: ${(props) => props.widelength || "10px"}
`;

function ButtonBox (props) {
    const {buttonImg1, buttonImg2, buttonImg3, width, position, marginLeft} = props
    return(
        <Wrapper width={width} position={position}>
            <Button1 url={process.env.PUBLIC_URL + `/${buttonImg1}`}/>
            <Button2 url={process.env.PUBLIC_URL + `/${buttonImg2}`} widelength={marginLeft}/>
            <Button3 url={process.env.PUBLIC_URL + `/${buttonImg3}`} widelength={marginLeft}/>
        </Wrapper>
    );
}

export default ButtonBox;