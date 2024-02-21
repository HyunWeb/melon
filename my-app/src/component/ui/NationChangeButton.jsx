import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 115px;
`;

const ButtonOn = styled.button`
    font-size: 18px;
    font-weight: 900;
    color: #fafafa;
    font-family: inherit;
    
    width: 150px;
    height: 40px;
    background-color: #4D4D4D;
    
    margin: 34px 0;
    padding: 0;
    border: none;
    outline: none;
    border-radius: 10px;

    box-shadow: 2px 2px 3px #00000059;

    &: first-child {margin-left: 35%;}
    &: last-child {margin-left: 30px;}
`;

const ButtonOff = styled(ButtonOn)`
    background-color: #84848433;
    color: #848484;
    box-shadow: none;
    cursor: pointer;
`;

function NationChangeButton (props) {
    const {onClick, state} = props;
    const TurnOn = () => {
        onClick((prevState) => !prevState);
    }

    return(
        <Wrapper>
            { state ? <ButtonOn>국내</ButtonOn> : <ButtonOff onClick={TurnOn}>국내</ButtonOff>}
            { state ? <ButtonOff onClick={TurnOn}>해외</ButtonOff> : <ButtonOn>해외</ButtonOn>}
        </Wrapper>
    );
}

export default NationChangeButton