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
import gallery2 from "../assets/darkImage.png"
import gallery3 from "../assets/darkImage.png"
import gallery4 from "../assets/darkImage.png"
import gallery5 from "../assets/darkImage.png"

export default function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignContent: "center" }}>
      <Container style={{ backgroundColor: "#E0E8F1" }}>
        <Header style={styles.Homeheader}>
          <Image
            source={signout}
            style={{
              height: height * 0.08,
              width: width,
              // alignSelf: "center",
              // borderRadius: 5,
              // marginLeft: width * 0.01,
            }}
          />
          <Text style={styles.headerSignOutText}>Payment</Text>
        </Header>
        <Content>
          <Row
            style={{
              paddingLeft: width * 0.03,
              paddingRight: width * 0.03,

              backgroundColor: "#4D4E4E",
            }}
          >
            <Col
              style={{
                width: "14%",

                // justifyContent: "center",
                backgroundColor: "#4D4E4E",
              }}
            >
              <Slider />
            </Col>
            <Col
              style={{
                width: "10%",
                backgroundColor: "#4D4E4E",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  marginTop: height * 0.013,
                  marginLeft: width * 0.01,

                  fontSize: width * 0.035,
                  fontFamily: "Montserrat",
                }}
              >
                Bag
              </Text>
            </Col>
            <Col
              style={{
                // justifyContent: "center",
                width: "20%",
                paddingTop: 1,
                backgroundColor: "#4D4E4E",
              }}
            >
              <Slider />
            </Col>
            <Col
              style={{
                backgroundColor: "#4D4E4E",
                width: "17%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  marginTop: height * 0.015,

                  marginLeft: width * 0.01,

                  fontSize: width * 0.035,
                  fontFamily: "Montserrat",
                }}
              >
                Address
              </Text>
            </Col>
            <Col
              style={{
                // justifyContent: "center",
                width: "20%",
                paddingTop: 2,

                backgroundColor: "#4D4E4E",
              }}
            >
              <Slider />
            </Col>
            <Col
              style={{
                backgroundColor: "#4D4E4E",
                width: "19%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  marginTop: height * 0.014,

                  marginLeft: width * 0.01,

                  fontSize: width * 0.035,
                  fontFamily: "Montserrat",
                }}
              >
                Payment
              </Text>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "#fff", padding: 7, marginTop: 10 }}>
            <Col>
              <Text
                style={{
                  fontFamily: "MontserratLight",
                  fontSize: width * 0.035,
                  color: "#4D4E4E",
                  alignSelf: "center",
                  paddingLeft: 5,
                }}
              >
                Secure Payments
              </Text>
            </Col>
            <Col>
              <Text
                style={{
                  fontFamily: "MontserratLight",
                  fontSize: width * 0.035,
                  color: "#4D4E4E",
                  alignSelf: "center",
                  paddingLeft: 10,
                }}
              >
                Easy Returns
              </Text>
            </Col>
            <Col>
              <Text
                style={{
                  fontFamily: "MontserratLight",
                  fontSize: width * 0.035,
                  color: "#4D4E4E",
                  alignSelf: "center",
                  // paddingLeft: 1,
                }}
              >
                Fast Refunds
              </Text>
            </Col>
          </Row>
          <Col style={{ width: "90%", alignSelf: "center", marginTop: 5 }}>
            <Text
              style={{
                fontFamily: "MontserratLight",
                fontSize: width * 0.04,
                color: "#AE7A2B",
              }}
            >
              Payment Options
            </Text>
          </Col>
          <Col
            style={{
              marginTop: 10,
              width: "95%",
              alignSelf: "center",
              //   backgroundColor: "red",
            }}
          >
            <List style={{ marginLeft: -width * 0.035 }}>
              <ListItem
                style={styles.ListItem}
                selected
                onPress={() => navigation.navigate("Limits")}
              >
                <Left>
                  <Text style={styles.text}>Razorpay</Text>
                </Left>
                <Right>
                  <Radio
                    selected={true}
                    selectedColor={"#606060"}
                    style={styles.radioButton}
                  />
                </Right>
              </ListItem>
              <ListItem
                style={styles.ListItem}
                selected
                onPress={() => navigation.navigate("Limits")}
              >
                <Left>
                  <Text style={styles.text}>Paypal</Text>
                </Left>
                <Right>
                  <Radio
                    selected={false}
                    selectedColor={"#606060"}
                    // style={styles.radioButton}
                  />
                </Right>
              </ListItem>
              <ListItem
                style={{
                  paddingBottom: 5,
                  paddingTop: 5,
                  backgroundColor: "#fff",
                  paddingLeft: 20,
                }}
                selected
                onPress={() => navigation.navigate("Limits")}
              >
                <Left>
                  <Text style={styles.text}>COD</Text>
                </Left>
                <Right>
                  <Radio
                    selected={false}
                    selectedColor={"#606060"}
                    // style={styles.radioButton}
                  />
                </Right>
              </ListItem>
            </List>
          </Col>
          <Col style={{ marginTop: 10, backgroundColor: "#fff", padding: 2 }}>
            <Text style={styles.priceDetail}>Price Details (1 item)</Text>
            <Row style={{ width: "80%", alignSelf: "center", marginTop: 5 }}>
              <Col>
                <Text style={styles.leftText}>Total MRP</Text>
              </Col>
              <Col>
                <Text style={styles.rightText}>1000</Text>
              </Col>
            </Row>

            <Row style={{ width: "80%", alignSelf: "center", marginTop: 5 }}>
              <Col>
                <Text style={styles.leftText}>Coupon Discount</Text>
              </Col>
              <Col>
                <Text style={styles.rightCouponText}>Apply Coupon</Text>
              </Col>
            </Row>
            <Row style={{ width: "80%", alignSelf: "center", marginTop: 5 }}>
              <Col>
                <Text style={styles.leftText}>Shipping Charge</Text>
              </Col>
              <Col>
                <Text style={styles.rightText}>50</Text>
              </Col>
            </Row>

            <Row
              style={{
                width: "80%",
                alignSelf: "center",
                marginTop: 10,
                paddingBottom: 10,
              }}
            >
              <Col>
                <Text style={styles.leftTotalText}>Total Amount</Text>
              </Col>
              <Col>
                <Text style={styles.rightTotalText}>1050</Text>
              </Col>
            </Row>
          </Col>

          <Col
            style={{
              width: "100%",
              // backgroundColor: "red",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Button
              style={styles.SignOut}
              onPress={() => navigation.navigate("Thanks")}
            >
              <Image
                source={signout}
                style={{
                  height: height * 0.055,
                  width: width * 0.36,
                  // alignSelf: "center",
                  borderRadius: 5,
                  // marginLeft: width * 0.01,
                }}
              />
              <Text style={styles.SignOutText}>Pay Now</Text>
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

  headerSignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    left: "8%",
    fontFamily: "Montserrat",
    position: "absolute",
    fontSize: width * 0.05,
  },
  cartItemText: {
    color: "#4D4E4E",
    fontSize: width * 0.05,
    marginTop: 5,
    fontFamily: "MontserratLight",
  },
  cartItemsubText: {
    color: "#A2661C",
    fontSize: width * 0.03,
    fontFamily: "MontserratLight",
    marginLeft: 3,
  },
  cartItemquantityText: {
    color: "#A2661C",
    fontSize: width * 0.035,
    fontFamily: "MontserratLight",
    marginLeft: 3,
    marginTop: 3,
  },
  wishlIst: {
    color: "#A2661C",
    fontSize: width * 0.045,
    marginTop: 5,
    fontFamily: "MontserratLight",
  },
  Remove: {
    color: "#A2661C",
    fontSize: width * 0.045,
    marginTop: 5,
    fontFamily: "MontserratLight",
  },
  chevronIconRight: {
    color: "#B07908",
    marginTop: height * 0.005,
  },
  chevronIcon: {
    color: "#B07908",
    // opacity: 0.7,
  },
  ListItem: {
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingBottom: 5,
    paddingTop: 5,

    // paddingBottom: -2,
    // paddingTop: -1,

    // marginBottom: 3,
  },
  listText: {
    fontSize: width * 0.04,
    marginTop: width * 0.02,
    fontFamily: "MontserratLight",
    color: "#B07908",
  },
  text: {
    // fontWeight: "600",
    fontFamily: "MontserratLight",
    fontSize: height * 0.019,
    color: "#B07908",
    marginLeft: width * 0.01,
  },
  priceDetail: {
    fontFamily: "SemiBold",
    fontSize: height * 0.018,
    color: "#B07908",
    marginLeft: width * 0.08,
  },
  leftText: {
    fontFamily: "MontserratLight",
    fontSize: height * 0.015,
    color: "#4D4E4E",
    // marginLeft: width * 0.01,
  },
  rightText: {
    fontFamily: "MontserratLight",
    fontSize: height * 0.015,
    color: "#4D4E4E",
    alignSelf: "flex-end",
    // marginLeft: width * 0.01,
  },
  rightCouponText: {
    fontFamily: "MontserratLight",
    fontSize: height * 0.015,
    color: "#A2661C",
    alignSelf: "flex-end",
  },
  SignOut: {
    width: "34%",
    height: 38,
    // padding: "50%",
    // marginLeft: "20%",
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "transparent",
    alignSelf: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
  SignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    fontFamily: "Montserrat",
    left: "25%",
    bottom: "40%",
    position: "absolute",
    fontSize: width * 0.045,
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
  cardTitleText: {
    color: "#B98D34",
    fontFamily: "MontserratLight",

    // alignSelf: "center",
    fontSize: width * 0.04,
  },
  AddTo: {
    color: "#4D4E4E",
    fontFamily: "MontserratLight",

    // alignSelf: "center",
    padding: 4,
    fontSize: width * 0.027,
    borderWidth: 0.4,
    width: "80%",
    marginTop: 5,
    marginLeft: 3,
  },
  leftTotalText: {
    color: "#A2661C",
    fontFamily: "SemiBold",
    fontSize: height * 0.018,
    // alignSelf: "",
  },
  rightTotalText: {
    fontFamily: "MontserratLight",
    fontSize: height * 0.018,
    alignSelf: "flex-end",
    color: "#4D4E4E",
  },
})
