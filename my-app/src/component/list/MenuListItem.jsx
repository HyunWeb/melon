import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const SMenuListItem = styled.li`
    border-radius: 20px;
    transition-duration: 200ms;
    height: 80px;
    line-height: 80px;
    background-image: url("${(props) => props.url}");
    background-size: 35px;
    background-repeat: no-repeat;
    background-position: 45px center;
    &: hover{
        background-color: #1c1c1c;
        background-size: 38px;
    }
`;

const SListItemButton = styled.button`
    width: 100%;
    height: 100%;
    font-size: inherit;
    font-family: inherit;
    color: ${(props) => props.color};
    text-align: left;

    display: block;
    cursor: pointer;
    padding: 0;
    padding-left: 110px;
    border: none;
    outline: none;
    background-color: transparent;
`;

function MenuListItem(props) {
    const {imgFile, menuName, settingcurrentMenu, colors, elementIndex, widthChange, goPath} = props;
    const navigate = useNavigate();


    const Clickmethods =
        () => {
            settingcurrentMenu(elementIndex);
            navigate(goPath);
        }
    const ChangeWidthFunc = () => {
        if(elementIndex == 2)
        widthChange((prevIsConfirmed) => !prevIsConfirmed);
        else {
        widthChange(false);
        }
    }
    

    return (
        <SMenuListItem url={process.env.PUBLIC_URL + `/${imgFile}`} onClick={ChangeWidthFunc}>
            <SListItemButton color={colors} onClick={Clickmethods}>
                { menuName }
            </SListItemButton>
        </SMenuListItem>
    );
}

export default MenuListItem;