import React from 'react';
import styled from "styled-components";

function Main(props) {
    return(
        <SBlock width="100vw" height="100vh" backgroundcolor="#303030">
            <SBlock width="340px" height="100%" backgroundcolor="#121212">
                <SLogodiv>
                    <SLogoA>
                        <SLogoImg src={process.env.PUBLIC_URL + '/logoSVG.svg'}/>
                    </SLogoA>
                </SLogodiv>

                <SMenuList>
                    <SMenuListItem url={process.env.PUBLIC_URL + '/homeIcon.svg'}>
                        <SListItemA>
                            홈
                        </SListItemA>
                    </SMenuListItem>

                    <SMenuListItem url={process.env.PUBLIC_URL + '/searchIcon.svg'}>
                        <SListItemA>
                            검색
                        </SListItemA>
                    </SMenuListItem>

                    <SMenuListItem url={process.env.PUBLIC_URL + '/chartIcon.svg'}>
                        <SListItemA>
                            멜론차트
                        </SListItemA>
                    </SMenuListItem>

                    <SMenuListItem url={process.env.PUBLIC_URL + '/cdIcon.svg'}>
                        <SListItemA>
                            최신앨범
                        </SListItemA>
                    </SMenuListItem>

                    <SMenuListItem url={process.env.PUBLIC_URL + '/profile_img.png'}>
                        <SListItemA>
                            마이뮤직
                        </SListItemA>
                    </SMenuListItem>
                </SMenuList>
            </SBlock>
        </SBlock>
    );
}

const SBlock = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundcolor};
`;

const SLogodiv = styled.div`
    padding: 30px 45px;
`;

const SLogoA = styled.a`
    display: block;
    cursor: pointer;
    height: 41px;
`;

const SLogoImg = styled.img.attrs({ alt:'멜론 로고'})`
    display: block;
`;

const SListItemA = styled.a`
    display: block;
    cursor: pointer;
    padding-left: 110px;
`;

const SMenuListItem = styled.li`
    border-radius: 20px;
    transition-duration: 400ms;
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

const SMenuList = styled.ul`
    color: #fafafa;
    font-size: 18px;
    font-family: 'GmarketSansMedium', sans-serif;
`;

export default Main;