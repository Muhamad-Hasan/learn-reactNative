import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Platform
} from "react-native";

import { Header, Body, Left, Right } from "native-base";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class GlobalHeader extends Component {
  render() {
    return (
      <Header
        style={{
          backgroundColor: this.props.backgroundColor,
          alignItems: "center",
          elevation: 0
        }}
      >
        {this.props.left ? (
          <Left
            style={{
              flex: 2,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5
            }}
          >
            <TouchableOpacity
              style={{ width: "20%", height: "100%" }}
              onPress={() => this.props.navigation.goBack()}
            >
              {this.props.backArrow === true ? (
                <Image
                  source={require("../icons/back.png")}
                  style={[
                    {
                      width: 10,
                      height: 15,
                      tintColor: this.props.backArrowColor
                    },
                    Platform.OS == "ios" ? { marginLeft: 10 } : null
                  ]}
                />
              ) : null}
            </TouchableOpacity>
            <Text
              style={{
                color: this.props.headingTextColor,
                fontSize: RFPercentage(3.3),
                fontWeight: this.props.fontWeight ? this.props.fontWeight : null
              }}
            >
              {this.props.headingText}
            </Text>
          </Left>
        ) : null}

        <Right style={{ flex: 1, justifyContent: "flex-end", marginRight: 10 }}>
          {this.props.drawer ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Image
                source={require("../icons/Drawer.png")}
                style={[{ width: 20, height: 25, tintColor: "#9fa7b7" }]}
              />
            </TouchableOpacity>
          ) : this.props.historyText ? (
            <TouchableOpacity>
              <Text style={{ color: "#758fd4", fontSize: RFPercentage(2.5) }}>
                History
              </Text>
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
    );
  }
}

// import React, {Component} from 'react';
// import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Dimensions, TextInput, ScrollView, Alert,Image} from 'react-native';
// import {  Header, Left, Body, Right, Button, Title , Icon } from 'native-base';
// class GlobalHeader extends Component {
//     static navigationOptions = ({ navigation }) => {
//         return {
//             header: null
//         };

//     };

//     constructor(props){
//         super(props);
//         this.state = {
//             value : 0,
//             user: '',
//             password: '',
//             error:"",
//             isLoading: false,
//             userType: 'Organisation'

//         }

//     }

//     userNameChange=(name)=>{
//         this.setState({
//             user: name,
//             error: ''
//         });
//     }

//     passwordChange=(password)=>{
//         this.setState({ password: password });
//     }

//     handleSubmit=()=> {
//         this.props.navigation.navigate("DelieverySchedule")
//     }

//     showAlert=()=>{
//         this.props.navigation.navigate("Registration")
//     }

//     Goback=()=>{
//         this.props.navigation.goBack()
//     }

//     render() {
//     return (
//         <Header style={{backgroundColor:this.props.backgroundColor,borderWidth:0,elevation:this.props.elevation}}>
//           <Left style={{flexDirection:"row",alignItems:"center",marginLeft:7,overflow:"visible"}}>
//                 <Button transparent onPress={this.Goback}>
//                 <Icon style={{color:this.props.color,fontSize:20}} name='arrow-back' />
//                 </Button>
//             </Left>
//                 <Body style={{backgroundColor:'blue',}}>
//                               <Title style={{fontSize:15,fontWeight:"300",color:this.props.color,marginLeft:0,textAlign:"left"}}>{this.props.heading}</Title>
//                 </Body>

//             {this.props.Iconvisible==true ? (
//           <Right style={{backgroundColor:'red',}}>

//           <Image source={require('../icons/back.png')} style={{ height: 25, width: 28,marginRight:15 }} resizeMode="contain" />

//           </Right>
//              ):null }
//         </Header>
//     );
// }
// }

// const styles = StyleSheet.create({

// });

// export default GlobalHeader;
