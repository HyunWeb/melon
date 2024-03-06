import React, {useState, useContext, useEffect}  from "react";
import styled from "styled-components";
import MusicStateWrap from "./MusicStateWrap";
import PlayStateWrap from "./PlayStateWrap";
import MenuContext from "../context/MenuContext";

const Wrapper = styled.div`
    position: fixed;
    z-index: 9;
    bottom: ${(props)=>props.$bottomPosition}
    right: 1%;
    width: calc(100% - 380px);
    height: 117px;
    background-color: #121212;
    border-radius: 18px;
    transition-duration: 400ms;
    display: flex;
`;

function BottomMusicPlayer () {
    const { currentMenu} = useContext(MenuContext);
    const [IsRunning, setIsRunning] = useState("running")
    const [bottomPosition, setbottomPosition] = useState("5px;")

    useEffect(() => {
        setbottomPosition(currentMenu === 1 ? "-117px;" : currentMenu === 2 ? "-117px;" : "5px;");
    }, [currentMenu]);

    return(
        <Wrapper $bottomPosition={bottomPosition}>
            <MusicStateWrap IsRunning={IsRunning}/>
            <PlayStateWrap IsRunning={IsRunning} setIsRunning={setIsRunning}/>
        </Wrapper>  
    );
}

export default BottomMusicPlayer;