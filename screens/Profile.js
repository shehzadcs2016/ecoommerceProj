import React, { memo } from "react"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native"
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Input,
  Item,
  Card,
  CardItem,
  Radio,
  List,
  ListItem,
  Footer,
  Container,
  Content,
} from "native-base"
import { Row, Grid, Col } from "react-native-easy-grid"
const { width, height } = Dimensions.get("window")
import offerpercent from "../assets/offerpercent.png"
import Icons from "react-native-vector-icons/Feather"
import Icon1 from "react-native-vector-icons/FontAwesome5"
import signout from "../assets/path/Path.png"
import Slider from "../components/Slider"
import logout from "../assets/logout.png"
import Path2 from "../assets/signout.png"
import tvbox from "../assets/tvbox.png"
import gallery5 from "../assets/darkImage.png"

export default function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignContent: "center" }}>
      <Container style={{ backgroundColor: "#E0E8F1" }}>
        <Header style={styles.Homeheader}>
          <Image
            source={signout}
            style={{
              height: height * 0.25,
              width: width,
              // alignSelf: "center",
              // borderRadius: 5,
              // marginLeft: width * 0.01,
            }}
          />
          <Icons size={30} style={styles.leftChevron} name="chevron-left" />
          <Text style={styles.headerSignOutText}>Dashboard</Text>
          <Image
            source={logout}
            style={{
              height: height * 0.045,
              width: width * 0.2,
              // alignSelf: "center",
              borderRadius: 5,
              top: "40%",
              left: "80%",
              // fontFamily: "MontserratLight",
              position: "absolute",
              // marginLeft: width * 0.01,
            }}
          />
          <Text style={styles.headerWelcomeText}>Welcome</Text>
          <Text style={styles.headerDipayanText}>Dipayan</Text>
          <Image
            source={Path2}
            style={{
              height: height * 0.065,
              width: width * 0.13,
              // alignSelf: "center",
              borderRadius: 5,
              top: height * 0.11,
              left: "85%",
              // fontFamily: "MontserratLight",
              position: "absolute",
              // marginLeft: width * 0.01,
            }}
          />
        </Header>
        <Content>
          <Col
            style={{
              width: "80%",
              borderRadius: 5,
              alignSelf: "center",
              backgroundColor: "#fff",
              padding: 10,

              marginTop: height * 0.11,
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratLight",
                fontSize: width * 0.03,
                color: "#B07908",
              }}
            >
              Change Delivery Address
            </Text>
            <Text
              style={{
                fontFamily: "MontserratLight",
                fontSize: width * 0.025,
                color: "#606060",
                paddingLeft: 5,
              }}
            >
              Lorem Ipsum Dolor sit Amet
            </Text>
          </Col>
          <Col style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
            <Text
              style={{
                fontFamily: "MontserratLight",
                fontSize: width * 0.05,
                color: "#B07908",
              }}
            >
              Settings
            </Text>
          </Col>
          <Row
            style={{
              marginTop: 20,
              width: "80%",
              // backgroundColor: "red",
              alignSelf: "center",
            }}
          >
            <Col
              style={{
                backgroundColor: "#fff",
                height: 120,
                width: "40%",
                borderRadius: 5,
                marginLeft: 10,
                // marginRight: 30,
                // marginTop: 30,
              }}
            >
              <Col style={{ height: "30%", width: "100%", marginTop: 20 }}>
                <Image
                  source={tvbox}
                  style={{
                    width: width * 0.145,
                    height: height * 0.056,
                    // marginLeft: 10,
                    alignSelf: "center",
                  }}
                />
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#B07908",
                    fontSize: width * 0.035,
                    fontFamily: "MontserratLight",
                    color: "#21386b",
                    paddingTop: 10,
                  }}
                >
                  Orders
                </Text>
                <Text
                  style={{
                    color: "#B3CDD7",
                    fontWeight: "700",
                    fontSize: width * 0.025,
                    fontFamily: "MontserratLight",

                    paddingTop: 4,
                  }}
                >
                  Device setting
                </Text>
              </Col>
            </Col>
            <Col
              style={{
                backgroundColor: "#fff",
                height: 120,
                width: "40%",
                borderRadius: 5,
                marginLeft: 30,
                // marginTop: 30,
              }}
            >
              <Col style={{ height: "30%", width: "100%", marginTop: 20 }}>
                <Image
                  source={tvbox}
                  style={{
                    width: width * 0.145,
                    height: height * 0.056,
                    // marginLeft: 10,
                    alignSelf: "center",
                  }}
                />
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#B07908",
                    fontSize: width * 0.035,
                    fontFamily: "MontserratLight",
                    color: "#21386b",
                    paddingTop: 10,
                  }}
                >
                  Track Orders
                </Text>
                <Text
                  style={{
                    color: "#B3CDD7",
                    fontWeight: "700",
                    fontSize: width * 0.025,
                    fontFamily: "MontserratLight",

                    paddingTop: 4,
                  }}
                >
                  Device setting
                </Text>
              </Col>
            </Col>
          </Row>
          <Row style={{ marginTop: 20, width: "80%", alignSelf: "center" }}>
            <Col
              style={{
                backgroundColor: "#fff",
                height: 120,
                width: "40%",
                borderRadius: 5,
                marginLeft: 10,
                // marginTop: 30,
              }}
            >
              <Col style={{ height: "30%", width: "100%", marginTop: 20 }}>
                <Image
                  source={tvbox}
                  style={{
                    width: width * 0.145,
                    height: height * 0.056,
                    // marginLeft: 10,
                    alignSelf: "center",
                  }}
                />
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#B07908",
                    fontSize: width * 0.035,
                    fontFamily: "MontserratLight",
                    color: "#21386b",
                    paddingTop: 10,
                  }}
                >
                  Orders
                </Text>
                <Text
                  style={{
                    color: "#B3CDD7",
                    fontWeight: "700",
                    fontSize: width * 0.025,
                    fontFamily: "MontserratLight",

                    paddingTop: 4,
                  }}
                >
                  Device setting
                </Text>
              </Col>
            </Col>
            <Col
              style={{
                backgroundColor: "#fff",
                height: 120,
                width: "40%",
                borderRadius: 5,
                marginLeft: 30,
                // marginTop: 30,
              }}
            >
              <Col style={{ height: "30%", width: "100%", marginTop: 20 }}>
                <Image
                  source={tvbox}
                  style={{
                    width: width * 0.145,
                    height: height * 0.056,
                    // marginLeft: 10,
                    alignSelf: "center",
                  }}
                />
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#B07908",
                    fontSize: width * 0.035,
                    fontFamily: "MontserratLight",
                    color: "#21386b",
                    paddingTop: 10,
                  }}
                >
                  Track Orders
                </Text>
                <Text
                  style={{
                    color: "#B3CDD7",
                    fontWeight: "700",
                    fontSize: width * 0.025,
                    fontFamily: "MontserratLight",

                    paddingTop: 4,
                  }}
                >
                  Device setting
                </Text>
              </Col>
            </Col>
          </Row>
          <Row style={{ marginTop: 20, width: "80%", alignSelf: "center" }}>
            <Col
              style={{
                backgroundColor: "#fff",
                height: 120,
                width: "40%",
                borderRadius: 5,
                marginLeft: 10,
                // marginTop: 30,
              }}
            >
              <Col style={{ height: "30%", width: "100%", marginTop: 20 }}>
                <Image
                  source={tvbox}
                  style={{
                    width: width * 0.145,
                    height: height * 0.056,
                    // marginLeft: 10,
                    alignSelf: "center",
                  }}
                />
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#B07908",
                    fontSize: width * 0.035,
                    fontFamily: "MontserratLight",
                    color: "#21386b",
                    paddingTop: 10,
                  }}
                >
                  Orders
                </Text>
                <Text
                  style={{
                    color: "#B3CDD7",
                    fontWeight: "700",
                    fontSize: width * 0.025,
                    fontFamily: "MontserratLight",

                    paddingTop: 4,
                  }}
                >
                  Device setting
                </Text>
              </Col>
            </Col>
            <Col
              style={{
                backgroundColor: "#fff",
                height: 120,
                width: "40%",
                borderRadius: 5,
                marginLeft: 30,
                // marginTop: 30,
              }}
            >
              <Col style={{ height: "30%", width: "100%", marginTop: 20 }}>
                <Image
                  source={tvbox}
                  style={{
                    width: width * 0.145,
                    height: height * 0.056,
                    // marginLeft: 10,
                    alignSelf: "center",
                  }}
                />
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#B07908",
                    fontSize: width * 0.035,
                    fontFamily: "MontserratLight",
                    color: "#21386b",
                    paddingTop: 10,
                  }}
                >
                  Track Orders
                </Text>
                <Text
                  style={{
                    color: "#B3CDD7",
                    fontWeight: "700",
                    fontSize: width * 0.025,
                    fontFamily: "MontserratLight",

                    paddingTop: 4,
                  }}
                >
                  Device setting
                </Text>
              </Col>
            </Col>
          </Row>
        </Content>
      </Container>
    </View>
  )
}
const styles = StyleSheet.create({
  Homeheader: {
    backgroundColor: "transparent",
    // borderTopLeftRadius: 20,

    // borderWidth: 5,
    // borderColor: "#fff",
  },

  headerSignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    left: "40%",
    fontFamily: "MontserratLight",
    position: "absolute",
    fontSize: width * 0.05,
  },
  leftChevron: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    left: "4%",
    fontFamily: "Montserrat",
    position: "absolute",
    // fontSize: width * 0.05,
  },
  headerWelcomeText: {
    left: "50%",
    top: height * 0.1,
    fontFamily: "MontserratLight",
    position: "absolute",
    color: "#fff",
    fontSize: width * 0.065,
  },
  headerDipayanText: {
    left: "54%",
    top: height * 0.13,
    fontFamily: "MontserratLight",
    position: "absolute",
    color: "#fff",
    fontSize: width * 0.065,
  },
})
