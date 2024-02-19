import React from "react";
import styled from "styled-components";
import NationChangeButton from "../ui/NationChangeButton";
import MelonChartList from "../list/MelonChartList";

const Wrapper = styled.div`
    width: calc(100% - 340px);
    margin-left: 340px;
    height: 100vh;
`;

function MelonChart (props) {
    return(
        <Wrapper>
            <NationChangeButton/>
            <MelonChartList/>
        </Wrapper>
    );

}

export default MelonChart