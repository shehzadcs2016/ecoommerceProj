import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer"
import React from "react"
import HomeScreen from "../screens/Home"
// import CategoryScreen from "../screens/Portfolio"
// import OfferScreen from "../screens/Offer"

import drawerSignup from "../assets/drawerSignup.png"
import drawerSignin from "../assets/drawerSignin.png"

import { HomeStackScreen } from "../stackScreens"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native"
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Input,
  Item,
  Card,
  CardItem,
  List,
  ListItem,
  Footer,
  Container,
  Content,
} from "native-base"

const { width, height } = Dimensions.get("window")
import { Row, Grid, Col } from "react-native-easy-grid"

import FilterScreen from "./FilterScreen"
import MyAccount from "./MyAccount"

export default function SettingScreen({ navigation }) {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName="Filter"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Filter" component={FilterScreen} />
      <Drawer.Screen name="MyAccount" component={MyAccount} />
    </Drawer.Navigator>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Content>
          <Row
            style={{ borderBottomWidth: 1, width: "90%", alignSelf: "center" }}
          >
            <Col style={{ width: "70%" }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  marginTop: height * 0.016,
                  // marginLeft: width * 0.01,

                  fontFamily: "OpenSans",
                  // marginLeft: width * 0.07,
                  // alignSelf: "center",
                  // width: "50%",
                  // paddingBottom: 7,
                  // backgroundColor: "#F2DAED",
                  // opacity: 0.7,
                  color: "#B98A37",
                }}
              >
                Filter
              </Text>
            </Col>
            <Col>
              <Text
                style={{
                  fontSize: height * 0.015,
                  marginTop: height * 0.03,
                  marginLeft: width * 0.01,

                  fontFamily: "OpenSans",
                  // marginLeft: width * 0.07,
                  alignSelf: "center",
                  // width: "50%",
                  paddingBottom: 12,
                  // backgroundColor: "#F2DAED",
                  // opacity: 0.7,
                  color: "#BDBDBD",
                }}
              >
                CLEAR ALL
              </Text>
            </Col>
          </Row>
          <Col style={{ width: "90%", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: height * 0.025,
                marginTop: height * 0.02,
                marginLeft: width * 0.03,

                fontFamily: "OpenSans",
                // marginLeft: width * 0.07,
                // alignSelf: "center",
                // width: "50%",
                borderBottomWidth: 1,
                paddingBottom: 7,
                // backgroundColor: "#F2DAED",
                // opacity: 0.7,
                color: "#696969",
              }}
            >
              Newest
            </Text>
          </Col>
          <Col style={{ width: "90%", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: height * 0.025,
                marginTop: height * 0.02,
                marginLeft: width * 0.03,

                fontFamily: "OpenSans",
                // marginLeft: width * 0.07,
                // alignSelf: "center",
                // width: "50%",
                borderBottomWidth: 1,
                paddingBottom: 7,
                // backgroundColor: "#F2DAED",
                // opacity: 0.7,
                color: "#696969",
              }}
            >
              Price High to Low
            </Text>
          </Col>
          <Col style={{ width: "90%", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: height * 0.025,
                marginTop: height * 0.02,
                marginLeft: width * 0.03,

                fontFamily: "OpenSans",
                // marginLeft: width * 0.07,
                // alignSelf: "center",
                // width: "50%",
                borderBottomWidth: 1,
                paddingBottom: 7,
                // backgroundColor: "#F2DAED",
                // opacity: 0.7,
                color: "#696969",
              }}
            >
              Price Low to High
            </Text>
          </Col>
          <Col style={{ width: "90%", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: height * 0.025,
                marginTop: height * 0.02,
                marginLeft: width * 0.03,

                fontFamily: "OpenSans",
                // marginLeft: width * 0.07,
                // alignSelf: "center",
                // width: "50%",
                // borderBottomWidth: 1,
                // paddingBottom: 7,
                // backgroundColor: "#F2DAED",
                // opacity: 0.7,
                color: "#696969",
              }}
            >
              On Sale
            </Text>
          </Col>
        </Content>
      </Container>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  Homeheader: {
    backgroundColor: "#FFDB58",
    // height: 100,
    // width: width,
    // position: "absolute",
    // top: "50%",
    // left: 220,
    // Right: 220,

    // bottom: 0,
    // borderWidth: 5,
    borderColor: "#fff",
  },
  SignOut: {
    width: "34%",
    height: 39,
    // padding: "50%",
    // marginLeft: "20%",
    // borderWidth: 1,
    // borderRadius: 10,
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    // alignItems: "center",
    // alignContent: "center",
  },
  SignUp: {
    width: "60%",
    height: 44,
    // padding: "50%",
    marginTop: "44%",
    marginLeft: "20%",
    // borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",

    borderWidth: 0,
    backgroundColor: "#BDBDBD",

    // alignItems: "center",
    // alignContent: "center",
  },
  SignIn: {
    width: "60%",
    alignSelf: "center",
    height: 42,

    // height: 50,
    // padding: "50%",
    marginTop: "7%",
    marginLeft: "20%",
    // borderWidth: 1,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: "#BDBDBD",

    // backgroundColor: "#E8AF49",

    // alignItems: "center",
    // alignContent: "center",
  },
  SignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    left: "11%",
    position: "absolute",
    fontSize: width * 0.05,
  },
  SignText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    marginLeft: "10%",
    // padding: 12,
    fontSize: width * 0.05,
    // marginLeft: 20,
  },
  text: {
    fontWeight: "600",
    fontSize: height * 0.02,
    color: "#000",
    marginLeft: width * 0.03,
  },
  chevronIcon: {
    color: "grey",
  },
  chevronIconLeft: {
    color: "#B07908",
    fontSize: 20,
  },
  ListItem: {
    backgroundColor: "#fff",
    paddingLeft: 20,
  },
  listText: {
    fontSize: width * 0.05,
    marginTop: width * 0.02,
    color: "#696969",
  },
  ListIcon: {
    fontSize: 20,
    marginTop: 5,
    color: "#B07908",
  },
  IconText: {
    color: "#696969",
    // backgroundColor: "#EDD1EC",
    fontSize: width * 0.045,
    fontFamily: "OpenSans",
    lineHeight: 27,

    marginHorizontal: 11,
    // marginTop: 3,
  },
  listItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    borderBottomWidth: 0.3,
    paddingBottom: 10,
    marginTop: 5,
  },
})
