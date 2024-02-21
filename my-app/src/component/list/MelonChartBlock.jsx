import React from "react";
import styled from "styled-components";
import TopRanking from "../ui/TopRanking";
import MelonChartList from "./MelonChartList";
import KR_melonChartData from "../../KR_melonChartData.json"
import POP_melonChartData from "../../POP_melonChartData.json";


const Wrapper = styled.div`
    width: 100%;
    height: calc(100% - 115px);
    display: flex;
`;



function MelonChartBlock (props) {
    const {state} = props;

    return(
        <Wrapper>
            <TopRanking Data={state ? KR_melonChartData : POP_melonChartData}/>
            <MelonChartList Data={state ? KR_melonChartData : POP_melonChartData}/>
        </Wrapper>
    );

}

export default MelonChartBlock;