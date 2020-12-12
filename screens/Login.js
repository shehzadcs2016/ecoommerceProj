import React, { useState } from "react"
import { Text, View, StyleSheet, Dimensions, Image } from "react-native"
import axios from "axios"
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
import Icon1 from "react-native-vector-icons/Entypo"

import Image1 from "../assets/Ass1.png"
import Image2 from "../assets/Ass2.png"
import Image3 from "../assets/Ass3.png"
import Sign from "../assets/Sign.png"
import necklace from "../assets/necklace.png"

const { width, height } = Dimensions.get("window")
export default function Login({ navigation }) {
  // states***********
  const loginData = {
    user_email: "abdulahmed@gmail.com",
    password: "4657",
  }
  const [formData, setFormData] = useState(loginData)

  // ************

  // handle Email Change
  const handleEmail = (e) => {
    console.log(e)
    setFormData({ ...formData, user_email: e })
  }
  // handle Password Change
  const handlePassword = (e) => {
    setFormData({ ...formData, password: e })
  }
  const Login = () => {
    console.log("hello from onSubmit", formData)
    try {
      axios
        .post(
          "https://project3.solutionsplayers.com/index.php/api/login",
          formData
        )
        .then((res) => {
          // console.log(res, "response")
          // alert("hello")
          setFormData(loginData)
          navigation.navigate("MyTabs")
        })
        .catch((err) => console.log(" error =>", err.response.data))
    } catch (error) {
      alert("err")
      console.log(error, "error catch")
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,

          // bottom: 0,
        }}
      >
        <Container>
          <Content>
            <Row>
              <Col
                style={{
                  backgroundColor: "#fff",
                  width: "50%",
                  // height: height * 0.13,
                  // position: "absolute",
                  // left: 0,
                  // right: 0,
                  // top: "10%",
                  marginBottom: height * 0.03,
                }}
              >
                <Image
                  source={Image1}
                  style={{
                    height: height * 0.23,
                    width: width * 0.4,
                    // alignSelf: "center",
                    marginTop: height * 0.01,
                    transform: [{ rotate: "2deg" }],

                    left: "4%",
                  }}
                />
              </Col>
              <Col
                style={{
                  backgroundColor: "#fff",
                  width: "50%",
                  // height: height * 0.13,
                  // position: "absolute",
                  // left: 0,
                  // right: 0,
                  // top: "10%",
                }}
              >
                <Image
                  source={Image2}
                  style={{
                    height: height * 0.23,
                    width: width * 0.4,
                    alignSelf: "center",
                    left: "5%",
                    marginTop: height * 0.01,
                  }}
                />
              </Col>
            </Row>
            <Row
              style={{
                width: "89%",
                alignSelf: "center",
                position: "absolute",
                // left: "0%",

                right: 0,
                top: "35%",
              }}
            >
              <Col
                style={{
                  backgroundColor: "#fff",
                  width: "50%",
                  // height: height * 0.13,
                  // position: "absolute",
                  flexDirection: "row",
                  // left: 0,
                  // right: 0,
                  // top: "10%",
                  // position: "absolute",
                  // left: "0%",
                  // right: 0,
                  // top: "40%",
                }}
              >
                <Image
                  source={Image3}
                  style={{
                    height: height * 0.15,
                    width: width * 0.15,
                    alignSelf: "center",
                    // marginTop: height * 0.05,
                  }}
                />
                <Image
                  source={Image3}
                  style={{
                    height: height * 0.15,
                    width: width * 0.15,
                    alignSelf: "center",
                    // marginLeft: width * 0.05,
                    transform: [{ rotate: "30deg" }],
                    position: "absolute",
                    left: "47%",
                    right: 0,
                    bottom: "15%",
                    // top: "35%",
                  }}
                />
              </Col>
              <Col
                style={{
                  backgroundColor: "#fff",
                  width: "50%",
                  // height: height * 0.13,
                  // position: "absolute",
                  // left: "50%",
                  // right: 0,
                  // top: "30%",
                }}
              >
                <Image
                  source={necklace}
                  style={{
                    // height: height * 0.15,
                    // width: width * 0.3,

                    height: height * 0.135,
                    width: width * 0.28,
                    alignSelf: "center",
                    position: "absolute",
                    left: "33%",
                    right: 0,
                    top: "45%",
                    // bottom: "33%",
                    // marginLeft: width * 0.09,
                    // marginTop: height * 0.05,
                  }}
                />
              </Col>
            </Row>
            <Col style={styles.section}>
              <Col style={styles.sectionHeading}>
                <Text style={styles.sectionHeadingText}>Welcome Home!</Text>
                <Text style={styles.sectionsubHeadingText}>
                  Sign in to manage your devices & accessories
                </Text>
              </Col>
              <Col>
                <Item style={styles.TextBox}>
                  <Input
                    placeholder="Email"
                    style={styles.input}
                    name="user_email"
                    onChangeText={handleEmail}
                    value={formData.user_email}
                  />
                  <Icon1
                    name="mail"
                    color="#B07908"
                    size={18}
                    style={{ marginRight: width * 0.03 }}
                  />
                </Item>
              </Col>
              <Col
                style={{
                  paddingBottom: height * 0.02,
                }}
              >
                <Item style={styles.TextBox}>
                  <Input
                    placeholder="Password"
                    style={styles.input}
                    name="password"
                    onChangeText={handlePassword}
                    value={formData.password}
                  />
                  <Icon
                    name="unlock-alt"
                    color="#B07908"
                    size={18}
                    style={{ marginRight: width * 0.03 }}
                  />
                </Item>
              </Col>
              <Col
                onPress={Login}
                style={{
                  width: "60%",
                  position: "absolute",
                  left: "15%",
                  right: 0,
                  bottom: 0,
                  top: "75%",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                {/* <Button
                  style={styles.SignIn}
                  onPress={() => navigation.navigate("MyTabs")}
                >
                  <Text style={styles.SignText}>Sign In</Text>
                </Button> */}
                <Button onPress={Login}>
                  <Image
                    source={Sign}
                    style={{
                      height: height * 0.075,
                      width: width * 0.45,
                      alignSelf: "center",
                      borderRadius: 8,
                      // marginTop: height * 0.01,
                    }}
                  />
                </Button>
              </Col>
            </Col>
            <Col
              style={{
                width: "50%",
                //   backgroundColor: "red",
                alignSelf: "center",
                paddingTop: 15,
                left: "5%",
              }}
            >
              <Text style={styles.sectionloginsubHeadingText}>
                Dont have an account yet?
              </Text>
            </Col>
            <Col
              style={{
                width: "45%",
                alignSelf: "center",
                left: "6%",
              }}
            >
              <Text
                style={{
                  color: "#75A9BE",
                  fontWeight: "bold",
                  // fontSize: width * 0.03,
                }}
                onPress={() => navigation.navigate("Register")}
              >
                Create an account
              </Text>
            </Col>
          </Content>
        </Container>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
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
    marginTop: height * 0.15,

    marginBottom: height * 0.02,
  },
  sectionHeading: {
    padding: 18,
    paddingTop: 8,
    alignSelf: "center",
    width: "70%",
  },
  sectionHeadingText: {
    color: "#B07908",
    fontSize: width * 0.05,
    // fontWeight: "bold",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // backgroundColor: "#EDD3AE",
  },
  sectionsubHeadingText: {
    color: "#B3CDD7",
    fontSize: width * 0.036,
    width: "100%",
    lineHeight: 15,
    alignSelf: "center",
    marginTop: width * 0.01,

    // backgroundColor: "#EDD1EC",
    marginLeft: 5,
  },
  sectionloginsubHeadingText: {
    color: "#75A9BE",
    fontSize: width * 0.03,
    width: "90%",
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    // borderWidth: 1,
    color: "#B3CDD7",

    fontSize: 11,
  },
  SignIn: {
    width: "100%",
    height: 50,
    // padding: "50%",
    marginTop: 10,
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#E8AF49",

    // alignItems: "center",
    // alignContent: "center",
  },
  SignText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    marginLeft: "33%",
    // padding: 12,
    fontSize: 20,
    // marginLeft: 20,
  },
})
