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
import signout from "../assets/signout.png"
import Slider from "../components/Slider"
import ok from "../assets/ok.png"
import Path2 from "../assets/Path2.png"
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
              height: height * 0.076,
              width: width,
              // alignSelf: "center",
              // borderRadius: 5,
              // marginLeft: width * 0.01,
            }}
          />
          <Icons
            size={30}
            style={styles.leftChevron}
            name="chevron-left"
            onPress={() => navigation.navigate("MyTabs")}
          />
          <Text style={styles.headerSignOutText}>Back To Home</Text>
        </Header>
        <Content>
          <Col
            style={{
              width: "80%",
              alignSelf: "center",
              marginTop: height * 0.07,
            }}
          >
            <Image
              source={ok}
              style={{
                height: height * 0.15,
                width: width * 0.32,
                alignSelf: "center",
                // borderRadius: 5,
                // marginLeft: width * 0.01,
              }}
            />
          </Col>
          <Col
            style={{
              width: "80%",
              alignSelf: "center",
              marginTop: height * 0.02,
            }}
          >
            <Text style={styles.headerWelcomeText}>Thank You...</Text>
          </Col>
          <Col
            style={{
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#fff",
              borderRadius: 10,
              paddingLeft: 40,
              marginTop: 60,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratLight",
                color: "#AE7A2B",
                fontSize: width * 0.045,
                alignSelf: "center",
              }}
            >
              Hi Johny, Thank you for placing your order with{" "}
              <Text style={{ fontWeight: "700" }}> Indianaa</Text>
            </Text>
            <Text
              style={{
                fontFamily: "MontserratLight",
                color: "#AE7A2B",
                fontSize: width * 0.045,
                alignSelf: "center",
                paddingTop: 20,
              }}
            >
              We have also sent you an email with the details of your order.
            </Text>
            <Button
              style={styles.SignOut}
              onPress={() => navigation.navigate("MyTabs")}
            >
              <Image
                source={signout}
                style={{
                  height: height * 0.053,
                  width: width * 0.43,
                  // alignSelf: "center",
                  borderRadius: 5,
                  // marginLeft: width * 0.01,
                }}
              />
              <Text style={styles.SignOutText}>Go To Order Section</Text>
            </Button>
          </Col>
        </Content>
      </Container>
    </View>
  )
}
const styles = StyleSheet.create({
  Homeheader: {
    backgroundColor: "#fff",
    // borderTopLeftRadius: 20,

    // borderWidth: 5,
    // borderColor: "#fff",
  },
  rightHeart: {
    // height: height * 0.045,
    // width: width * 0.2,
    // alignSelf: "center",
    // borderRadius: 5,
    top: "30%",
    left: "80%",
    // fontFamily: "MontserratLight",
    position: "absolute",
  },
  headerSignOutsubText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    top: "60%",
    left: "16%",
    fontFamily: "MontserratLight",
    position: "absolute",
    fontSize: width * 0.028,
  },
  headerSignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    top: "28%",

    left: "15%",
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
    fontFamily: "SemiBold",
    color: "#AE7A2B",
    fontSize: width * 0.065,
    alignSelf: "center",
  },
  headerDipayanText: {
    left: "54%",
    top: height * 0.13,
    fontFamily: "MontserratLight",
    position: "absolute",
    color: "#fff",
    fontSize: width * 0.065,
  },
  SignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    fontFamily: "Montserrat",
    left: "13%",
    position: "absolute",
    fontSize: width * 0.035,
  },
  SignOut: {
    width: "34%",
    height: 38,
    // padding: "50%",
    marginLeft: "20%",
    marginTop: "8%",

    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "transparent",
    // alignSelf: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
})
