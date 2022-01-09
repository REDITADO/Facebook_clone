import React from "react";
import styled from "styled-components/native";
import {StatusBar, ScrollView} from "react-native"

import AppBar from "./components/AppBar";
import Toolbar from "./components/ToolBar";
import Users from "./components/Users"
import Story from "./components/Sotry";
import Feed from "./components/Feed";

const Container = styled.SafeAreaView`
flex: 1;
`
export default function App(){
  return( 
  <>
<StatusBar barStyle="dark-content"/>
  <Container>
    <ScrollView>
      <AppBar />
      <Toolbar />
      <Users />
      <Story />
      <Feed />
    </ScrollView>
  </Container> 
  </>
  )
}