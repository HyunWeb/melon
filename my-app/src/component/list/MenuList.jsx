import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuListItem from "./MenuListItem";

const SMenuList = styled.ul`
    color: #fafafa;
    font-size: 18px;
    font-family: 'GmarketSansMedium', sans-serif;
`;

function MenuList(props) {
    const { menuInfos } = props;
    const[currentMenu, setcurrentMenu] = useState(1);

    const whiteColor = `#fafafa`;
    const greenColor = `#04E632`;


    return (
        <SMenuList>
            {menuInfos && menuInfos.map((menuInfo) => {
                return (
                    <MenuListItem
                        key={menuInfo.id}
                        imgFile={menuInfo.id == currentMenu ? menuInfo.SelectedimgFile : menuInfo.imgFile}
                        menuName={menuInfo.menuName}
                        Clickmethod={() => {
                            setcurrentMenu(menuInfo.id);
                        }}
                        colors={menuInfo.id == currentMenu ? greenColor : whiteColor}
                    />
                )
            })}
        </SMenuList>
    );
}

export default MenuList;

/*
    첫로딩이 될때는 홈 버튼만 초록색인 상태다.
    이후 버튼을 클릭하면 
    모든 버튼의 색흰색으로 바꾸고
    눌린 버튼의 색만 바꾼다. 
*/