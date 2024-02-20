import React from "react";
import styled from "styled-components";
import MelonChartListItem from "./MelonChartListItem";
import KR_melonChartData from "../../KR_melonChartData.json";
import POP_melonChartData from "../../POP_melonChartData.json";

const Wrapper = styled.div`
width: 45%;

font-weight: 900;
color: #fafafa;
`;

const ChartTitle = styled.h2`
    font-size: 25px;
    
    border-bottom: 2px solid #707070;
    line-height: 2;
`;
const Strong = styled.strong`
    font-size: 20px;
    
    color: #04E632;
`;

const List = styled.ul``;

function MelonChartList (props) {

    return(
        <Wrapper>
            <ChartTitle>멜론차트 <Strong>TOP 10</Strong></ChartTitle>

            <List>
                { KR_melonChartData && KR_melonChartData.map((dataInfo)=>{
                    return(
                    <MelonChartListItem
                        key={dataInfo.id}
                        Image={dataInfo.albumImage}
                        artist={dataInfo.artistName}
                        music={dataInfo.musicName}
                        index={dataInfo.id}
                        display={dataInfo.id === 1 && "none"}
                    />
                    );
                })}
            </List>
        </Wrapper>
    );

}

export default MelonChartList;