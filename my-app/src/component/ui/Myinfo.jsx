import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 60%;
    height: 250px;
    margin-left: 30%;
    border-bottom: 1px solid #707070;
    color: #fafafa;
    background-image: url(/profile_img.png);
    background-size: 155px;
    background-repeat: no-repeat;
    background-position: 35% center; 
`;
const Name = styled.h3`
    width: 50%;
    margin-left: 50%;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-top: 120px;
`;

const ListBox = styled.ul`
    width: 50%;
    margin-left: 50%;
    display: flex;
`;
const ListItem = styled.li`
    font-size: 16px;
    margin-right: 30px;
`;
const Bold = styled.b`
    font-weight: bold;
    font-size: 17px;
`;
const ButtonWrapper = styled.div`
`;

function Myinfo () {
    
    return(
        <Wrapper>
            <Name>황종현</Name>
            <ListBox>
                <ListItem>추천해요 <Bold>13</Bold></ListItem>
                <ListItem>재생목록 <Bold>5</Bold></ListItem>
                <ListItem>친구 <Bold>0</Bold></ListItem>
            </ListBox>
        </Wrapper>
    );
}
 
export default Myinfo