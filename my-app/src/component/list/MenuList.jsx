import React from "react";
import styled from "styled-components";
import MenuListItem from "./MenuListItem";

const SMenuList = styled.ul`
    color: #fafafa;
    font-size: 18px;
    font-family: 'GmarketSansMedium', sans-serif;
`;

function MenuList(props) {
    const { menuInfos } = props;

    return (
        <SMenuList>
            {menuInfos && menuInfos.map((menuInfo) => {
                return (
                    <MenuListItem
                        key={menuInfo.id}
                        imgFile={menuInfo.imgFile}
                        menuName={menuInfo.menuName}
                    />
                )
            })}
        </SMenuList>
    );
}

export default MenuList;