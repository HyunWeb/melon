import React from "react";
import styled, {keyframes} from "styled-components";
import ButtonBox from "./ButtonBox";

const runningCircleKeyframes = keyframes`
    to{
        left: 100%;
    }
`;
const runningStateKeyframes = keyframes`
    to{
        width: 100%
    }
`;

const Wrapper = styled.div`
    display: flex;
    width: 60%;
    padding-left: 4%;
`;
const RunningStateBox = styled.div`
    width: calc(100% - 170px);
    height: 50%;
    border-bottom: 5px solid #303030;
    position: relative;

    &::after{
        content:"";
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: #04E632;
        bottom: 0%;
        left: 0%;
        transform: translate(0, 65%);
        border-radius: 50%;
        animation: ${runningCircleKeyframes} 180s 1s infinite linear;
        animation-play-state: ${(props)=>props.$aniPlayState};
    }

    &::before{
        content: "";
        position: absolute;
        width: 0%;
        height: 5px;
        bottom: -8%;
        left: 0;
        background-color: #04E632;
        border-radius: 5px;
        animation: ${runningStateKeyframes} 180s infinite linear;
        animation-play-state: ${(props)=>props.$aniPlayState};
    }
`;


function PlayStateWrap (props) {
    const {IsRunning, setIsRunning} = props;
    return(
        <Wrapper>
            <ButtonBox 
                width={`170px`} 
                justifycontent={`center`}
                buttonImg1={`prevButton.svg`} 
                buttonImg2={`pauseButton.svg`} 
                buttonImg3={`nextButton.svg`}
                buttonImg4={`PlayingMusicButton.svg`}
                $alignItems={`center`}
                setIsRunning={setIsRunning}
            />
            <RunningStateBox $aniPlayState={IsRunning}></RunningStateBox>
        </Wrapper>  
    );
}

export default PlayStateWrap;