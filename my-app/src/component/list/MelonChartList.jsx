import React from "react";
import styled from "styled-components";
import TopRanking from "../ui/TopRanking";
import MelonChartListItem from "./MelonChartListItem";
import KR_melonChartData from "../../KR_melonChartData.json"

const Wrapper = styled.div`
    width: 100%;
    height: clac(100% - 115px;);
    display: flex;
`;



function MelonChartList (props) {

    return(
        <Wrapper>
            <TopRanking KR_ChartData={KR_melonChartData}/>
            <MelonChartListItem/>
        </Wrapper>
    );

}

export default MelonChartList