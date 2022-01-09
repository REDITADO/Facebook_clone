import React from "react"
import styled from "styled-components/native"

import {ScrollView} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Avatar from "./Avatar"

const Container = styled.View`
    width:100%;
    height:58px;
    flex-direction:row;
    align-items:center;
`
const Room = styled.TouchableOpacity`
    width:115px;
    height:40px;
    flex-direction:row;
    align-items:center;
    border-radius:20px;
    border:1px solid #82b1ff;
    padding:0 15px;
    margin-right:12px;
    `
    const Text = styled.Text`
    color:#1777f2;
    font-size:12px;
    padding-left:6px;
    `
    const User= styled.View`
    margin-right:13px;
    `

export default function Users(){
    return(
        <Container>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:11}}>
                <Room>
                    <MaterialCommunityIcons name="video-plus" size={26} color={"#E141FC"} />
                    <Text>Criar sala</Text>
                </Room>
                <User>
                    <Avatar source={require("../asset/user1.jpg")} online={true}/>
                </User>
                <User>
                    <Avatar source={require("../asset/user2.jpg")} online={true}/>
                </User> 
                <User>
                    <Avatar source={require("../asset/user3.jpg")} online={true}/>
                </User> 
                <User>
                    <Avatar source={require("../asset/user4.jpg")} />
                </User>
                <User>
                    <Avatar source={require("../asset/user5.jpg")} />
                </User>
            </ScrollView>
        </Container>
    );
}