import React, { useState } from "react";
import styled from "styled-components";
import MenuList from '../list/MenuList';
import menuData from '../../menuData.json';
import LogoBox from '../ui/LogoBox';


const Menubars = styled.div`
    transition-duration: 400ms;
    white-space: nowrap;
    overflow: hidden;
    position: fixed;
    // width: 340px;
    width: ${(props) => props.width};
    height: 100%;
    background-color: #121212;
`;

function MenuBar () {
    const[isSearch, setIsSearch] = useState(false);

    const handleConfirm = () => {
        setIsSearch((prevIsConfirmed) => !prevIsConfirmed);
    }

    return(
        <Menubars width={isSearch ? `110px` : `340px`}>
            <LogoBox logoImg={isSearch ? "miniLogo.svg": "logoSVG.svg"}/>

            <MenuList
                menuInfos={ menuData }
                widthChange={setIsSearch}
            />
        </Menubars>
    );
}

export default MenuBar;