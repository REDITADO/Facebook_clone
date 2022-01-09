import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
width: 45px;
height:45px;
position:relative;
`
const User = styled.Image`
width:45px;
height:45px;
border-radius:20px;
border-color:#1777f2;
border-width:${props=>(props.story ? "3px": 0)};
`
const UserActive = styled.View`
width:15px;
height:15px;
border-radius:8px;
background:#4bcb1f;
position:absolute;
bottom:-2px;
right:-2px;
border: 2px solid #ffffff ;
`


export default function Avatar({source, online, story}){
    return(
        <Container>
            <User source={source} story={story}/>
            {online && <UserActive />}

        </Container>
    );
}