import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

import styled from "styled-components/native";
import Avatar from "./Avatar";

const Container = styled.View`
    flex:1;
`
const Header = styled.View`
    height:50px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-top:6px;
    padding:0 11px;
`
const Row = styled.View`
    align-items:center;
    flex-direction:row;
`
const User = styled.Text`
    font-size:15px;
    font-weight:bold;
    color:#222121;
`
const Time = styled.Text`
    font-size:9px;
    color:#747476;
`
const Post = styled.Text`
    font-size:15px;
    color:#222121;
    line-height:16px;
    padding:0 11px;
`
const Photo = styled.Image`
    margin-top:9px;
    width:100%;
    height:400px;

`
const Footer = styled.View`
    padding:0 11px;
`
const FooterCount = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:9px 0;
`
const IcontCount = styled.View`
    background:#1878f3;
    width:20px;
    height:20px;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    margin-right:6px;
`
const TextCount = styled.Text`
    font-size:13px;
    color:#424040;
`
const Separator = styled.View`
    width:100%;
    height:1px;
    background:#F9F9F9;
`
const FooterMenu = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding:9px 0;
`
const Button = styled.TouchableOpacity`
    flex-direction:row;
`
const Icon = styled.View`
    margin-right:6px;
`
const Text = styled.Text`
    font-size:12px;
    color:#424040;
`
const Bottom = styled.View`
width:100%;
height:9px;
background:#F0F2F5;
`
export default function Feed(){
    return(
        <>
            <Container>
                <Header>
                    <Row>
                        <Avatar source={require("../asset/user5.jpg")} />
                        <View style={{paddingLeft:10}}>
                            <User>Regi P.</User>
                            <Row>
                                <Time>9m</Time>
                                <Entypo name="dot-single" size={12} color={"#747476"}/>
                                <Entypo name="globe" size={12} color={"#747476"}/>
                            </Row>
                        </View>
                    </Row>
                    <Entypo name="dots-three-horizontal" size={15} color={"#222121"}/>
                </Header>

                <Post>
                    Crie na prartica um app com React Native.
                </Post>
                <Photo source={require("../asset/post1.jpg")}/>

                <Footer>
                    <FooterCount>
                        <Row>
                            <IcontCount>
                                <AntDesign name="like1" size={12} color={"#FFFFFF"}/>
                            </IcontCount>
                                <TextCount>
                                    113 likes
                                </TextCount>
                        </Row>
                        <TextCount>2K comments</TextCount>
                    </FooterCount>
                    <Separator />

                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign name="like2" size={20} color={"#424040"}/>
                            </Icon>
                                <Text>Like</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="comment-outline" size={20} color={"#424040"}/>
                            </Icon>
                                <Text>Comment</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="share-outline" size={20} color={"#424040"}/>
                            </Icon>
                                <Text>Share</Text>
                        </Button>
                    </FooterMenu>
                </Footer>
                <Bottom />
            </Container>    
            
            <Container>
                <Header>
                    <Row>
                        <Avatar source={require("../asset/user4.jpg")} />
                        <View style={{paddingLeft:10}}>
                            <User>Regi P.</User>
                            <Row>
                                <Time>9m</Time>
                                <Entypo name="dot-single" size={12} color={"#747476"}/>
                                <Entypo name="globe" size={12} color={"#747476"}/>
                            </Row>
                        </View>
                    </Row>
                    <Entypo name="dots-three-horizontal" size={15} color={"#222121"}/>
                </Header>

                <Post>
                    Crie na prartica um app com React Native.
                </Post>
                <Photo source={require("../asset/post2.jpg")}/>

                <Footer>
                    <FooterCount>
                        <Row>
                            <IcontCount>
                                <AntDesign name="like1" size={12} color={"#FFFFFF"}/>
                            </IcontCount>
                                <TextCount>
                                    113 likes
                                </TextCount>
                        </Row>
                        <TextCount>2K comments</TextCount>
                    </FooterCount>
                    <Separator />

                    <FooterMenu>
                        <Button>
                            <Icon>
                                <AntDesign name="like2" size={20} color={"#424040"}/>
                            </Icon>
                                <Text>Like</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="comment-outline" size={20} color={"#424040"}/>
                            </Icon>
                                <Text>Comment</Text>
                        </Button>

                        <Button>
                            <Icon>
                                <MaterialCommunityIcons name="share-outline" size={20} color={"#424040"}/>
                            </Icon>
                                <Text>Share</Text>
                        </Button>
                    </FooterMenu>
                </Footer>
                <Bottom />
            </Container> 
        </>
    )
}