import React, { useState } from "react"
import { Text, View, StyleSheet, Dimensions, Image } from "react-native"
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Input,
  Radio,
  Button,
  Item,
} from "native-base"
import { Grid, Row, Col } from "react-native-easy-grid"
import Icon from "react-native-vector-icons/FontAwesome5"
import Icon1 from "react-native-vector-icons/Entypo"

const { width, height } = Dimensions.get("window")
import SignUpHeader from "../assets/SignUpHeader.png"
import Register from "../assets/register.png"

export default function SignUp({ navigation }) {
  const SignUpData = {
    email: "",
    password: "",
    user_name: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    delivery_address: "",
    pincode: "",
    type: "",
  }
  const [formData, setFormData] = useState(SignUpData)
  return (
    <View style={styles.container}>
      <Container>
        <Content>
          <Col
            style={{
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <Image
              source={SignUpHeader}
              style={{
                height: height * 0.27,
                width: width * 0.85,
                alignSelf: "center",
                marginTop: height * 0.035,
              }}
            />
          </Col>
          <Col style={styles.section}>
            <Col style={styles.sectionHeading}>
              <Text style={styles.sectionHeadingText}>Create Your Account</Text>
              <Text style={styles.sectionsubHeadingText}>
                Sign up to get started
              </Text>
            </Col>
            <Col>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="User Name"
                  style={styles.input}
                  value={formData.user_name}
                />
                <Icon1
                  name="mail"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Col>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Email"
                  style={styles.input}
                  value={formData.email}
                />
                <Icon1
                  name="mail"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>

            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Password"
                  style={styles.input}
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
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Phone"
                  style={styles.input}
                  value={formData.phone}
                />
                <Icon
                  name="phone"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  type="file"
                  // placeholder="Type"
                  // style={styles.input}
                  // value={formData.type}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Country"
                  style={styles.input}
                  value={formData.country}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="City"
                  style={styles.input}
                  value={formData.city}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="State"
                  style={styles.input}
                  value={formData.state}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Address"
                  style={styles.input}
                  value={formData.delivery_address}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Pin Code"
                  style={styles.input}
                  value={formData.pincode}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
            </Col>
            <Row
              style={{
                paddingBottom: height * 0.03,
                marginTop: -height * 0.015,

                width: "90%",
                alignSelf: "center",
              }}
            >
              <Col style={{ flexDirection: "row" }}>
                <Radio
                  selected={true}
                  selectedColor={"#B07908"}
                  style={styles.radioButton}
                />

                <Text
                  style={{
                    marginLeft: width * 0.013,
                    // backgroundColor: "#EDD1EC",
                    color: "#B07908",
                    fontWeight: "bold",
                    fontSize: width * 0.04,
                  }}
                >
                  Customer
                </Text>
              </Col>
              <Col style={{ flexDirection: "row", marginLeft: -width * 0.07 }}>
                <Radio
                  selected={false}
                  color={"#B07908"}
                  style={styles.radioButton}
                />

                <Text
                  style={{
                    marginLeft: width * 0.013,
                    // backgroundColor: "#EDD1EC",
                    color: "#B07908",
                    fontWeight: "bold",
                    fontSize: width * 0.04,
                  }}
                >
                  Re-seller
                </Text>
              </Col>
            </Row>
            {/* <Col
              style={{
                width: "60%",
                position: "absolute",
                left: "30%",
                right: 0,
                bottom: 0,
                top: "100%",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={styles.SignIn}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.SignText}>Sign Up</Text>
              </Button>
            </Col> */}
            <Col
              style={{
                width: "60%",
                position: "absolute",
                left: "28%",
                right: 0,
                bottom: 0,
                top: "102%",
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
              <Image
                source={Register}
                style={{
                  height: height * 0.06,
                  width: width * 0.35,
                  alignSelf: "center",
                  borderRadius: 8,
                  // marginTop: height * 0.01,
                }}
              />
            </Col>
          </Col>

          <Col
            style={{
              // width: "52%",
              // backgroundColor: "red",
              alignSelf: "center",
              paddingTop: height * 0.05,
              alignContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ color: "#75A9BE", fontSize: width * 0.032 }}>
              Already have an account?
            </Text>
          </Col>

          <Col
            style={{
              width: "50%",
              alignSelf: "center",
              // paddingTop: height * 0.004,
              // backgroundColor: "red",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "#75A9BE",
                fontSize: width * 0.034,
                fontWeight: "bold",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              Sign in
            </Text>
          </Col>
        </Content>
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingTop: 12,
    marginTop: height * 0.02,

    // marginBottom: height * 0.01,
  },
  sectionHeading: {
    marginBottom: "7%",
    alignSelf: "center",
  },
  sectionHeadingText: {
    color: "#B07908",
    fontSize: width * 0.04,
    // backgroundColor: "#EDD1EC",

    // fontWeight: "bold",
    alignSelf: "center",
    // backgroundColor: "#EDD3AE",
  },
  sectionsubHeadingText: {
    color: "#B3CDD7",
    fontSize: width * 0.03,
    width: "90%",
    alignSelf: "center",
    marginTop: width * 0.005,
    // backgroundColor: "#EDD1EC",
  },
  TextBox: {
    width: "90%",
    alignSelf: "center",
    borderColor: "#B07908",
    marginBottom: height * 0.015,
    borderLeftWidth: 2.5,
    borderRightWidth: 2.5,
    borderBottomWidth: 2.5,
    borderTopWidth: 2.5,
    borderRadius: 10,
    height: "70%",
    paddingLeft: 10,
    paddingLeft: 10,
  },
  inputSection: {
    marginTop: -height * 0.01,
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
    backgroundColor: "#B07908",

    // alignItems: "center",
    // alignContent: "center",
  },
  SignText: {
    color: "#fff",
    padding: 3,
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    marginLeft: "30%",
    // padding: 12,
    fontSize: 16,
    // marginLeft: 20,
  },
  radioButton: {
    marginLeft: width * 0.05,
    // fontSize: 2,
  },
})
