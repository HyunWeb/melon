import React, {useState} from "react";
import styled from "styled-components";
import NationChangeButton from "../ui/NationChangeButton";
import MelonChartBlock from "../list/MelonChartBlock";

const Wrapper = styled.div`
    width: calc(100% - 340px);
    margin-left: 340px;
    height: 100vh;
`;

function MelonChart (props) {
    const[ChangeState, setChangeState] = useState(true);

    return(
        <Wrapper>
            <NationChangeButton state={ChangeState} onClick={setChangeState}/>
            <MelonChartBlock state={ChangeState}/>
        </Wrapper>
    );

}

export default MelonChart