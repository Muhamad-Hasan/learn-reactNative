import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Icon,
  Radio,
  Button
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
// import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import GlobalHeader from "../GlobalHeader/GlobalHeader";

export default class ProductCard extends Component {
  state = {
    add: 0,
    quantity: 1
  };

  subbottle = () => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  addbottle = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  render() {
    return (
      <Card style={styles.FirstCard} key={this.props.itemsObject.dealKey}>
        <CardItem style={{ backgroundColor: "white", height: 110, padding: 0 }}>
          <Left>
            <View style={styles.Left}>
              <ImageBackground
                source={this.props.itemsObject.image}
                style={{ height: 70, width: 80 }}
                resizeMode="contain"
              />
            </View>
          </Left>
          <Body
            style={{
              height: 70,
              width: "100%",
              alignSelf: "center",
              marginRight: 15,
              borderRightWidth: 1,
              borderRightColor: "#e3e3eb"
            }}
          >
            <View style={{ width: "100%", marginRight: 17, borderWidth: 0 }}>
              <Text style={styles.CardFontHeading}>
                {this.props.itemsObject.bottleSize}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                color: "#778cc3",
                marginTop: 2,
                fontWeight: "bold"
              }}
            >
              Sr.{this.props.itemsObject.price}
            </Text>
            <Text style={{ fontSize: 11, color: "#91a1ce", marginTop: 2 }}>
              {this.props.itemsObject.total_bottle} bottles carton
            </Text>
          </Body>
          <Right
            style={{ height: 100, width: "100%", marginTop: 0, borderWidth: 0 }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                height: 40
              }}
            >
              <TouchableOpacity onPress={this.subbottle}>
                <Icon
                  name="minuscircleo"
                  type="AntDesign"
                  size={20}
                  color="#bbbfc8"
                />
              </TouchableOpacity>
              <View>
                <Text style={{ fontSize: 18, color: "black" }}>
                  0{this.state.quantity}
                </Text>
              </View>
              <TouchableOpacity onPress={this.addbottle}>
                <AntDesign name="pluscircleo" size={20} color="#bbbfc8" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 50,
                width: "100%",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../icons/cart.png")}
                style={{ height: 25, width: 28 }}
              />
            </View>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  CardFontHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#060608"
  },
  FirstCard: {
    height: 120,
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
    // shadowColor: "#000",
    marginBottom: 15,
    elevation: 1.5,
    borderColor: "#e3e4e9"
  },
  Left: {
    height: 70,
    width: 80,
    borderRightWidth: 1,
    borderRightColor: "#e3e3eb",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 17
  }
});
