import React,{ useState } from "react";
import styled from "styled-components";

const Sform = styled.form`
    padding-left: 130px;
    margin-top: 20px;
`;
const Slabel = styled.label`
    display: block;
    position: relative;
`;
const Sinput = styled.input`
    width: 315px;
    height: 50px;
    border-radius: 8px;
    background-color: #303030;
    border: none;
    font-size: 25px;
    padding-left: 15px;
    color: #fafafa;
    box-sizing: border-box;
    outline: none;
`;

const Sbutton = styled.button`
    background-image: url("${(props) => props.url}");
    width: 25px;
    height: 25px;
    background-size: 25px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 12px;
    right: 30px;
`;

function SearchForm (props) {
    // const [musicName, setMusicName] = useState("");
    const {musicNames, setMusicNames, handleSubmits} = props

    const handleChangeName = (event) => {
        setMusicNames(event.target.value);
    };

    const handleClick = () => {setMusicNames("")};

    return(
        <Sform onSubmit={handleSubmits}>
            <Slabel >
                <Sinput placeholder="검색" type="text" value={musicNames} onChange={handleChangeName}/>
                <Sbutton type="button" url={process.env.PUBLIC_URL + `/deleteButton.svg`} onClick={handleClick}></Sbutton>
            </Slabel>
        </Sform>
    );
}

export default SearchForm;