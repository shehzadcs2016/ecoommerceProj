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
import logout from "../assets/logout.png"
import Path2 from "../assets/Path2.png"
import tvbox from "../assets/tvbox.png"
import gallery5 from "../assets/darkImage.png"
export default function SearchScreen() {
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
          <Icons size={30} style={styles.leftChevron} name="chevron-left" />
          <Text style={styles.headerSignOutText}>Earnings</Text>
          <Text style={styles.headerSignOutsubText}>70 Items</Text>
          <Icons
            size={25}
            style={styles.rightHeart}
            name="heart"
            color={"#fff"}
          />
        </Header>
        <Content></Content>
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
    top: "20%",

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
