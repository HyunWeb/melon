import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: ${(props) => props.width};
    height: ${(props)=>props.height || ""};

    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.$justifycontent};
    align-items: ${({ $alignItems }) => $alignItems || "normal"};
    
    position: ${(props)=>props.$position || "static"};
    
    right: 0;
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

    background-image: ${({ $url }) => `url(${process.env.PUBLIC_URL}/${$url})`};
    &: hover{
        transform: scale(1.1);
    };
`;
const Button2 = styled(Button1)`
    margin-left: ${(props) => props.$widelength || "10px"}
`;
const Button3 = styled(Button1)`
    margin-left: ${(props) => props.$widelength || "10px"}
`;

function ButtonBox (props) {
    const {buttonImg1, buttonImg2, buttonImg3, width ,height , justifycontent, $alignItems, marginLeft, position} = props
    return(
        <Wrapper width={width} height={height} $justifycontent={justifycontent} $alignItems={$alignItems} $position={position}>
            <Button1 $url={buttonImg1}/>
            <Button2 $url={buttonImg2} $widelength={marginLeft}/>
            <Button3 $url={buttonImg3} $widelength={marginLeft}/>
        </Wrapper>
    );
}

export default ButtonBox;