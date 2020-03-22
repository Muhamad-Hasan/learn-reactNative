import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity 
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "#3acfd5",
          width: this.props.width ? this.props.width : "80%",
          height: this.props.height ? this.props.height : 50,
          borderRadius: this.props.borderRadius ? this.props.borderRadius : 8,
          alignItems: "center",
          justifyContent: "center",
          //   borderColor: this.props.borderColor ? this.props.borderColor : null,
          //   borderWidth: this.props.borderWidth ? this.props.borderWidth : null,
          marginBottom: this.props.marginBottom
            ? this.props.marginBottom
            : null,
          marginTop: this.props.marginTop ? this.props.marginTop : null,
          alignSelf: this.props.alignSelf ? this.props.alignSelf : null
        }}
        onPress={() =>
          this.props.submit
            ? this.props.submit()
            : this.props.navigation.navigate(this.props.navigateTo)
        }
      >
        <Text
          style={{
            color: this.props.textColor ? this.props.textColor : "white",
            textAlign: "center",
            fontSize: RFPercentage(2.8),
            fontWeight: this.props.fontWeight ? this.props.fontWeight : null
          }}
        >
          {this.props.text}
        </Text>
        {this.props.secondtext ? (
          <Text
            style={{
              color: this.props.textColor ? this.props.textColor : "white",
              textAlign: "center",
              fontSize: RFPercentage(2.5),
              fontWeight: this.props.fontWeight ? this.props.fontWeight : null
            }}
          >
            {this.props.secondtext}
          </Text>
        ) : null}
      </TouchableOpacity>
    );
  }
}
