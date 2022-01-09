import React from "react";
import styled from "styled-components/native";

import Avatar from "./Avatar";
import {Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons"

const Container = styled.View`
width:100%;
height:92px;
`
const Row = styled.View`
flex-direction:row;
background:#ffffff
width:100%;
padding:0 11px; 
align-items:center;
`
const Input = styled.TextInput`
height:50px;
width:100%;
padding:0 8px;
`
const BR = styled.View`
width:100%;
height:0.5px;
background:#F0F0F0;
`
const Separator = styled.View`
width:1px;
height:26px;
background:#f0f0f0;
`

const Menu = styled.View`
flex:1;
flex-direction:row;
align-items:center;
justify-content:center;
height:42px;

`
const MenuText = styled.Text`
padding-left:11px;
font-weight:500;
font-size:12px;
`
const Bottom = styled.View`
width:100%;
height:9px;
background:#F0F2F5;
`

export default function Toolbar(){
    return(
        <>
        <Container>
            <Row>
                <Avatar source={require("../asset/user5.jpg")}/>
                <Input placeholder="o que você esta pensando"/>
            </Row>
            <BR/>
            <Row>
                <Menu>
                    <Ionicons name="ios-videocam" size={22} color={"#f44337"}/>
                    <MenuText>Live</MenuText>
                </Menu>

                <Separator />

                <Menu>
                    <MaterialIcons name="photo-size-select-actual" size={20} color={"#4caf50"}/>
                    <MenuText>Foto</MenuText>
                </Menu>
                
                <Separator />
                
                <Menu>
                    <MaterialCommunityIcons name="video-plus" size={22} color={"#E141FC"}/>
                    <MenuText>Sala</MenuText>
                </Menu>
            </Row>
        </Container>
        <Bottom />
        </>
    );
}