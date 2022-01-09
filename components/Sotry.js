import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from 'react-native'
import styled from "styled-components/native";
import Avatar from "./Avatar";

const Container = styled.View`
    width:100%;
    height:192px;
    flex-direction:row;
    align-items:center;
`
const Card = styled.View`
    width:106px;
    height:170px;
    position:relative;
    margin-right: 8px;
`
const CardStory = styled.Image`
    width:100%;
    height:170px;
    border-radius:12px;
`
const CardUser = styled.View`
    position:absolute;
    top:8px;
    left:8px;
    background:#FFFFFF;
    border-radius:20px;
    width:39px;
    height:39px;
    align-items:center;
    justify-content:center;
`
const CardFooter = styled.View`
    width:100%;
    position:absolute;
    bottom:12px;
    left:9px;
`
const Bottom = styled.View`
width:100%;
height:9px;
background:#F0F2F5;
`

const Text = styled.Text`
font-size:13px;
font-weight:bold;
color:#FFFFFF;
text-shadow:1px 1px 1px rgba(0,0,0,0.4);
`

export default function Story(){
    return(
        <>
        <Container>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:11}}>
                <Card>
                    <CardStory source={require("../asset/story1.jpg")}/>
                    <CardUser>
                        <AntDesign name="plus" size={24} color={"#1777f2"}/>
                    </CardUser>
                <CardFooter>
                    <Text>
                        Add to story
                    </Text>
                </CardFooter>
                </Card>
                <Card>
                        <CardStory source={require("../asset/story2.jpg")} story={true}/>
                        <CardUser>
                          <Avatar source={require("../asset/user2.jpg")} story={true}/>  
                        </CardUser>
                        <CardFooter>
                            <Text>Melissa j.</Text>
                        </CardFooter>                       
                </Card>
                <Card>
                        <CardStory source={require("../asset/story3.jpg")} story={true}/>
                        <CardUser>
                          <Avatar source={require("../asset/user3.jpg")} story={true}/>  
                        </CardUser>
                        <CardFooter>
                            <Text>Rony Pesca</Text>
                        </CardFooter>                         
                </Card>
                <Card>
                        <CardStory source={require("../asset/story4.jpg")} story={true}/>
                        <CardUser>
                          <Avatar source={require("../asset/user4.jpg")} story={true}/>  
                        </CardUser>
                        <CardFooter>
                            <Text>Pedro A.</Text>
                        </CardFooter>                         
                </Card>
            </ScrollView>
        </Container>
        <Bottom />
        </>
    )
}