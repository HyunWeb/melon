import React, {useState} from "react";
import styled from "styled-components";
import NewAlbumData from "../../NewAlbumData.json";
import POP_NewAlbumData from "../../POP_NewAlbumData.json";
import NationChangeButton from "../ui/NationChangeButton";
import NewAlbumList from "../list/NewAlbumList";

const Wrapper = styled.div`
    width: calc(100% - 340px);
    margin-left: 340px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function NewAlbumPage() {
    const[ChangeState, setChangeState] = useState(true);

    return(
        <Wrapper>
            <NationChangeButton state={ChangeState} onClick={setChangeState}/>
            <NewAlbumList NewAlbumData={ChangeState ? NewAlbumData : POP_NewAlbumData}/>
        </Wrapper>
    );
};

export default NewAlbumPage;