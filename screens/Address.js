import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Picker,
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
  const [selectedValue, setSelectedValue] = useState("java")

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
          <Col
            style={{
              paddingLeft: 15,
              paddingTop: 5,
              paddingBottom: 8,
              //   backgroundColor: "t",
              marginTop: height * 0.015,
            }}
          >
            <Text
              style={{
                fontSize: width * 0.045,
                color: "#AE7A2B",
                fontFamily: "MontserratLight",
              }}
            >
              Address Details
            </Text>
          </Col>
          <Col
            style={{
              width: "90%",
              backgroundColor: "#fff",
              //   marginLeft: width * 0.01,
              //   height: 35,
              //   marginTop: width * 0.01,
              alignSelf: "center",
              padding: 10,
            }}
          >
            <Col
              style={{
                width: "100%",
                backgroundColor: "#F2F1F1",
                //   marginLeft: width * 0.01,
                //   height: 35,
                //   marginTop: width * 0.01,
                alignSelf: "center",
              }}
            >
              <Picker
                note
                mode="dropdown"
                style={{
                  width: "100%",
                  height: 40,
                  color: "#AE7A2B",
                  //   backgroundColor: "#707070",
                  fontFamily: "MontserratLight",
                }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item
                  label="Choose from saved Address"
                  style={{
                    fontFamily: "MontserratLight",
                  }}
                  value="key0"
                />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Col>
          </Col>
          <Col style={{ width: "90%", alignSelf: "center" }}>
            <Text
              style={{
                fontSize: width * 0.045,
                color: "#AE7A2B",
                fontFamily: "MontserratLight",
                alignSelf: "center",
                paddingTop: 3,
              }}
            >
              OR
            </Text>
          </Col>
          <Col
            style={{
              width: "93%",
              alignSelf: "center",
              backgroundColor: "#fff",
              marginBottom: width * 0.05,
              paddingBottom: width * 0.04,

              marginTop: width * 0.02,
            }}
          >
            <Row
              style={{
                paddingLeft: 7,
                paddingRight: 7,
                paddingTop: 10,
                // paddingBottom: 10,
              }}
            >
              <Col>
                <Item regular style={styles.TextBox}>
                  <Input
                    placeholder="First Name*"
                    value="First Name*"
                    style={styles.input}
                  />
                </Item>
              </Col>
              <Col>
                <Item regular style={styles.TextBox}>
                  <Input
                    value="Last Name*"
                    placeholder="Last Name*"
                    style={styles.input}
                  />
                </Item>
              </Col>
            </Row>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input
                  value="Email Address*"
                  placeholder="Email Address*"
                  style={styles.input}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input
                  value="Contact Number*"
                  placeholder="Contact Number*"
                  style={styles.input}
                />
              </Item>
            </Col>
            <Col
              style={{
                paddingLeft: 18,
                // paddingTop: 5,
                paddingBottom: 8,
                //   backgroundColor: "t",
                // marginTop: height * 0.015,
              }}
            >
              <Text
                style={{
                  fontSize: width * 0.04,
                  color: "#AE7A2B",
                  fontFamily: "OpensansSemiBold",
                }}
              >
                Address
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input placeholder="Address Line 1*" style={styles.input} />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input placeholder="Nearby Landmark*" style={styles.input} />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input placeholder="City*" style={styles.input} />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input placeholder="State*" style={styles.input} />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input placeholder="ZipCode*" style={styles.input} />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input
                  placeholder="Country*"
                  value="Country*"
                  style={styles.input}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item regular style={styles.TextBox}>
                <Input
                  placeholder="Order Notes*"
                  value="Order Notes*"
                  style={styles.input}
                />
              </Item>
            </Col>
          </Col>
          <Col
            onPress={() => navigation.navigate("Checkout")}
            style={{
              marginBottom: width * 0.02,
              width: "90%",
              alignSelf: "center",
              //   alignItems: "flex-end",
              //   backgroundColor: "red",
            }}
          >
            <Button
              style={styles.SignOut}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Image
                source={signout}
                style={{
                  height: height * 0.045,
                  width: width * 0.43,
                  // alignSelf: "center",
                  borderRadius: 5,
                  // marginLeft: width * 0.01,
                }}
              />
              <Text style={styles.SignOutText}>Proceed To Checkout</Text>
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
    fontSize: width * 0.04,
  },

  SignOut: {
    width: "34%",
    height: 32,
    // padding: "50%",
    marginLeft: "35%",
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
    left: "10%",
    position: "absolute",
    fontSize: width * 0.035,
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
  TextBox: {
    width: "90%",
    alignSelf: "center",
    borderColor: "#F2F1F1",
    borderRadius: 0.5,
    // marginBottom: height * 0.015,
    // borderLeftWidth: 2.5,
    // borderRightWidth: 2.5,
    // borderBottomWidth: 2.5,
    // borderTopWidth: 2.5,
    // borderRadius: 10,
    height: "70%",
    // paddingLeft: 10,
    // paddingLeft: 10,
    backgroundColor: "#F2F1F1",
  },
  inputSection: {
    // marginTop: -height * 0.005,
  },
  input: {
    // borderWidth: 1,
    color: "#AE7A2B",

    fontSize: 11,
  },
})
