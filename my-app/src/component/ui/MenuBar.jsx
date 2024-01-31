import React from "react";
import styled from "styled-components";
import MenuList from '../list/MenuList';
import menuData from '../../menuData.json';
import LogoBox from '../ui/LogoBox';


const Menubars = styled.div`
    position: fixed;
    width: 340px;
    height: 100%;
    background-color: #121212;
`;

function MenuBar () {
    return(
        <Menubars>
            <LogoBox logoImg={"logoSVG.svg"}/>

            <MenuList
                menuInfos={ menuData }
            />
        </Menubars>
    );
}

export default MenuBar;