import React from "react";
import styled from "styled-components";

const SLogodiv = styled.div`
    padding: 30px 45px;
`;

const SLogoA = styled.a`
    display: block;
    cursor: pointer;
    height: 41px;
`;

const SLogoImg = styled.img`
    display: block;
`;

function LogoBox(props) {
    const {logoImg} = props;
    return(
        <SLogodiv>
            <SLogoA>
                <SLogoImg src={process.env.PUBLIC_URL + `/${logoImg}`} alt={'멜론 로고'}/>
            </SLogoA>
        </SLogodiv>
    );
}

export default LogoBox;