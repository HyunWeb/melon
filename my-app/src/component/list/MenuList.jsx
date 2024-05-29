import React, {useContext} from "react";
import MenuContext from "../context/MenuContext";

import styled from "styled-components";
import MenuListItem from "./MenuListItem";

const SMenuList = styled.ul`
    color: #fafafa;
    font-size: 18px;
    font-family: 'GmarketSansMedium', sans-serif;
`;

function MenuList(props) {
    const { menuInfos, setIsSearch } = props;
    const { currentMenu, setcurrentMenu } = useContext(MenuContext);


    const whiteColor = `#fafafa`;
    const greenColor = `#04E632`;
    const pathURL = ["/",undefined ,"/MelonChart", "/NewAlbum", "/MyPage"]


    return (
        <SMenuList>
            {menuInfos && menuInfos.map((menuInfo) => {
                return (
                    <MenuListItem
                        key={menuInfo.id}
                        imgFile={menuInfo.id === currentMenu ? menuInfo.SelectedimgFile : menuInfo.imgFile}
                        menuName={menuInfo.menuName}
                        settingcurrentMenu={setcurrentMenu}
                        elementIndex={menuInfo.id}
                        colors={menuInfo.id === currentMenu ? greenColor : whiteColor}
                        setIsSearch={setIsSearch}
                        goPath={pathURL[menuInfo.id-1]}
                    />
                )
            })}
        </SMenuList>
    );
}

export default MenuList;