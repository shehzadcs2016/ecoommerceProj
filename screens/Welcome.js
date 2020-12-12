import React from "react"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native"
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Input,
  Button,
  Item,
} from "native-base"
import { Grid, Row, Col } from "react-native-easy-grid"
import Icon from "react-native-vector-icons/FontAwesome5"
import gallery2 from "../assets/AssetMens.png"
import gallery3 from "../assets/AssetwoMen.png"
import Icon1 from "react-native-vector-icons/FontAwesome5"
import Icon2 from "react-native-vector-icons/Entypo"
import Image1 from "../assets/login.png"
import signup from "../assets/signup.png"
import skip from "../assets/skip.png"
import WelcomeHome from "../assets/WelcomeHome.png"

import promise from "../assets/promise.png"

const { width, height } = Dimensions.get("window")
export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={WelcomeHome} style={styles.image}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 3 }}>
          <Container style={{ backgroundColor: "transparent" }}>
            <Content>
              <Col>
                <Image
                  source={gallery2}
                  style={{
                    height: height * 0.12,
                    width: width * 0.2,
                    alignSelf: "center",
                    //   marginTop: height * 0.02,
                  }}
                />
              </Col>
              <Col>
                <Image
                  source={gallery3}
                  style={{
                    height: height * 0.057,
                    width: width * 0.58,
                    alignSelf: "center",
                    marginTop: height * 0.01,
                    // marginBottom: height * 0.02,
                  }}
                />
              </Col>
              <Col>
                <Image
                  source={promise}
                  style={{
                    height: height * 0.025,
                    width: width * 0.48,
                    alignSelf: "center",
                    marginTop: height * 0.01,
                    marginBottom: height * 0.02,
                  }}
                />
              </Col>
              <Col
                onPress={() => navigation.navigate("Login")}
                style={{
                  marginTop: height * 0.03,
                }}
              >
                <Image
                  source={Image1}
                  style={{
                    height: height * 0.078,
                    width: width * 0.58,
                    alignSelf: "center",
                    marginTop: height * 0.05,
                  }}
                />
              </Col>
              <Col
                onPress={() => navigation.navigate("Register")}
                style={{
                  marginTop: height * 0.01,
                }}
              >
                {/* <Col
                style={{ width: "75%" }}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={{ color: "#fff", fontSize: width * 0.06 }}>
                  Sign In
                </Text>
              </Col>
              <Col
                style={{
                  alignItems: "center",
                  backgroundColor: "#fff",
                  padding: 5,
                  borderRadius: 40,
                }}
              >
                <Icon2
                  onPress={() => navigation.navigate("Login")}
                  name="arrow-with-circle-right"
                  color="#B07908"
                  size={25}
                />
              </Col> */}
                <Image
                  source={signup}
                  style={{
                    height: height * 0.078,
                    width: width * 0.58,
                    alignSelf: "center",
                    // marginTop: height * 0.01,
                  }}
                />
              </Col>
              {/* <Row
              style={{
                width: "50%",
                alignSelf: "center",
                backgroundColor: "#E8AF49",
                padding: width * 0.04,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 30,
                borderTopRightRadius: 30,
                marginTop: height * 0.02,
              }}
            >
              <Col
                style={{ width: "75%" }}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={{ color: "#fff", fontSize: width * 0.06 }}>
                  Sign Up
                </Text>
              </Col>
              <Col
                style={{
                  alignItems: "center",
                  backgroundColor: "#fff",
                  padding: 5,
                  borderRadius: 40,
                }}
              >
                <Icon1
                  onPress={() => navigation.navigate("Register")}
                  name="user-astronaut"
                  color="#B07908"
                  size={25}
                />
              </Col>
            </Row> */}
              <Col
                style={{
                  alignItems: "flex-end",
                  // backgroundColor: "red",
                  marginTop: height * 0.16,
                }}
              >
                <Image
                  source={skip}
                  style={{
                    height: height * 0.021,
                    width: width * 0.45,
                    // alignSelf: "center",
                    marginRight: width * 0.07,
                  }}
                />
              </Col>
            </Content>
          </Container>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "transparent",

    // alignItems: "center",
    // justifyContent: "center",
  },
  section: {
    // backgroundColor: "red",
    width: "80%",
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#B07908",
    borderRadius: 5,
    padding: 18,
    marginBottom: height * 0.02,
  },
  sectionHeading: {
    padding: 18,
    alignSelf: "center",
  },
  sectionHeadingText: {
    color: "#B07908",
    fontSize: width * 0.05,
    fontWeight: "bold",
    alignSelf: "center",
    // backgroundColor: "#EDD3AE",
  },
  sectionsubHeadingText: {
    color: "#B07908",
    fontSize: width * 0.03,
    padding: 3,

    // width: "90%",
    backgroundColor: "#F2DAED",
    alignSelf: "center",
    marginTop: width * 0.02,
  },
  TextBox: {
    width: "90%",
    alignSelf: "center",
    borderColor: "#B07908",
    marginBottom: height * 0.02,
    borderLeftWidth: 2.5,
    borderRightWidth: 2.5,
    borderBottomWidth: 2.5,
    borderTopWidth: 2.5,
    borderRadius: 10,
    padding: 4,
  },
  input: {
    // borderWidth: 1,
    color: "#B3CDD7",

    fontSize: 10,
  },
  SignIn: {
    width: "100%",
    height: 60,
    // padding: "50%",

    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#B07908",

    // alignItems: "center",
    // alignContent: "center",
  },
  SignText: {
    color: "#fff",
    alignSelf: "center",
    backgroundColor: "#EDD1EC",
    marginLeft: "40%",
    // padding: 12,
    fontSize: 16,
    // marginLeft: 20,
  },
  image: {
    flex: 1,
    // alignSelf: "center",
  },
})
