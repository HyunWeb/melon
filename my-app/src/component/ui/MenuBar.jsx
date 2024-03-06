import React, { useState } from "react";
import styled from "styled-components";
import MenuList from '../list/MenuList';
import menuData from '../../menuData.json';
import LogoBox from '../ui/LogoBox';
import SearchBox from "./SearchBox";


const Menubars = styled.div`
    transition-duration: 400ms;
    white-space: nowrap;
    overflow: hidden;
    position: fixed;
    z-index: 2;
    width: ${(props) => props.width};
    height: 100%;
    background-color: #121212;
    border-right: 1px solid #303030;
`;

function MenuBar () {
    const[isSearch, setIsSearch] = useState(false);

    return(
        < >
        <Menubars width={isSearch ? `110px` : `340px`}>
            <LogoBox logoImg={isSearch ? "miniLogo.svg": "logoSVG.svg"}/>

            <MenuList
                menuInfos={ menuData }
                setIsSearch={setIsSearch}
            />
        </Menubars>

        <SearchBox view={isSearch ? "0":"-460px"}/>
        </>
    );
}

export default MenuBar;