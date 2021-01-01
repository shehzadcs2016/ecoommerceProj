import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Dimensions, Image } from "react-native"
import { Container, Content, Input, Radio, Button, Item } from "native-base"
import { Grid, Row, Col } from "react-native-easy-grid"
import Icon from "react-native-vector-icons/FontAwesome5"
import Icon1 from "react-native-vector-icons/Entypo"
import * as ImagePicker from "expo-image-picker"
import Constants from "expo-constants"
const { width, height } = Dimensions.get("window")
import SignUpHeader from "../assets/SignUpHeader.png"
import Register from "../assets/register.png"
import signout from "../assets/signout.png"
import axios from "axios"
import { TouchableOpacity } from "react-native-gesture-handler"
export default function SignUp({ navigation }) {
  // const SignUpData = {
  //   user_email: "shehzadahmed@gmail.com",
  //   password: "465",
  //   user_name: "ssaee",
  //   user_mobile: "3123213",
  //   country: "asda",
  //   city: "ads",
  //   state: "das",
  //   delivery_address: "sda",
  //   pincode: "123",
  //   type: "sadsa",
  // }
  const SignUpData = {
    user_email: "",
    password: "",
    user_name: "",
    user_mobile: "",
    country: "",
    city: "",
    state: "",
    delivery_address: "",
    pincode: "",
    type: "",
  }

  const [formData, setFormData] = useState(SignUpData)
  const [image, setImage] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState("")

  const [aboutRequiredFields, setAboutRequiredFields] = useState({
    user_email: "",
    password: "",
    user_name: "",
    user_mobile: "",
    country: "",
    city: "",
    state: "",
    delivery_address: "",
    pincode: "",
    type: "",
  })
  const validateISignupData = () => {
    const reqFields = {}
    Object.keys(formData).forEach((key) => {
      const hasKey = aboutRequiredFields.hasOwnProperty([key])
      if (hasKey && !formData[key].trim().length) {
        reqFields[key] = "Required"
      }
    })
    // console.log(reqFields)
    setAboutRequiredFields(Object.assign(reqFields))
  }
  // handle User name
  const handleUserName = (e) => {
    // console.log(e)
    setFormData({ ...formData, user_name: e })
  }
  const handleEmail = (e) => {
    // console.log(e)
    setFormData({ ...formData, user_email: e })
  }
  const handlePassword = (e) => {
    // console.log(e)
    setFormData({ ...formData, password: e })
  }

  const handlePhone = (e) => {
    // console.log(e)
    setFormData({ ...formData, user_mobile: e })
  }
  const handleCountry = (e) => {
    // console.log(e)
    setFormData({ ...formData, country: e })
  }
  const handleCity = (e) => {
    // console.log(e)
    setFormData({ ...formData, city: e })
  }
  const handleState = (e) => {
    // console.log(e)
    setFormData({ ...formData, state: e })
  }
  const handleAddress = (e) => {
    // console.log(e)
    setFormData({ ...formData, delivery_address: e })
  }
  const handlePinCode = (e) => {
    // console.log(e)
    setFormData({ ...formData, pincode: e })
  }
  const handletype = (e) => {
    setFormData({ ...formData, type: e })
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    // console.log(result)

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }
  const SignUp = () => {
    setisLoading(true)
    validateISignupData()
    // console.log(image, "image")
    // console.log(formData, "image")

    const form_data = new FormData()
    form_data.append("user_name", formData.user_name)
    form_data.append("user_email", formData.user_email)
    form_data.append("password", formData.password)
    form_data.append("user_mobile", formData.user_mobile)
    form_data.append("country", formData.country)
    form_data.append("city", formData.city)
    form_data.append("state", formData.state)
    form_data.append("delivery_address", formData.delivery_address)
    form_data.append("pincode", formData.pincode)
    form_data.append("type", formData.type)
    form_data.append("image", image)
    try {
      axios
        .post(
          "https://project3.solutionsplayers.com/index.php/api/signup",
          form_data,
          {
            headers: {
              "Content-Type": "multipart/form-data; ",
            },
          }
        )
        .then((res) => {
          // console.log(res, "response")
          // alert("hello")
          if (res.data.error) {
            setError(res.data.error)
          } else {
            setError(res.data.message)
            navigation.navigate("Login")
          }
          setisLoading(false)

          // setFormData(loginData)
        })
        .catch((err) => {
          setisLoading(false)

          // console.log(" error =>", err.response.data)
        })
    } catch (error) {
      // alert("err")
      // console.log(error, "error catch")
    }
  }
  // console.log(aboutRequiredFields, "image")

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!")
        }
      }
    })()
  }, [])

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
                  onChangeText={handleUserName}
                />
                <Icon1
                  name="mail"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.user_name
                  ? aboutRequiredFields.user_name
                  : ""}
              </Text>
            </Col>
            <Col>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Email"
                  style={styles.input}
                  value={formData.user_email}
                  onChangeText={handleEmail}
                />
                <Icon1
                  name="mail"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.user_email
                  ? aboutRequiredFields.user_email
                  : ""}
              </Text>
            </Col>

            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Password"
                  style={styles.input}
                  value={formData.password}
                  onChangeText={handlePassword}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.password
                  ? aboutRequiredFields.password
                  : ""}
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Phone"
                  style={styles.input}
                  value={formData.user_mobile}
                  onChangeText={handlePhone}
                />
                <Icon
                  name="phone"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.user_mobile
                  ? aboutRequiredFields.user_mobile
                  : ""}
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Button
                style={{
                  backgroundColor: "#ccc",
                  width: width * 0.4,
                  borderRadius: 2,
                  marginBottom: width * 0.05,
                  marginLeft: width * 0.05,
                }}
                onPress={pickImage}
              >
                <Text
                  style={{
                    color: "#fff",
                    left: "70%",
                  }}
                >
                  Upload Image
                </Text>
              </Button>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Country"
                  style={styles.input}
                  value={formData.country}
                  onChangeText={handleCountry}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.country ? aboutRequiredFields.country : ""}
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="City"
                  style={styles.input}
                  value={formData.city}
                  onChangeText={handleCity}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.city ? aboutRequiredFields.city : ""}
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="State"
                  style={styles.input}
                  value={formData.state}
                  onChangeText={handleState}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.state ? aboutRequiredFields.state : ""}
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Address"
                  style={styles.input}
                  value={formData.delivery_address}
                  onChangeText={handleAddress}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.delivery_address
                  ? aboutRequiredFields.delivery_address
                  : ""}
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Pin Code"
                  style={styles.input}
                  value={formData.pincode}
                  onChangeText={handlePinCode}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.pincode ? aboutRequiredFields.pincode : ""}
              </Text>
            </Col>
            <Col style={styles.inputSection}>
              <Item style={styles.TextBox}>
                <Input
                  placeholder="Type"
                  style={styles.input}
                  value={formData.type}
                  onChangeText={handletype}
                />
                <Icon
                  name="unlock-alt"
                  color="#B07908"
                  size={18}
                  style={{ marginRight: width * 0.03 }}
                />
              </Item>
              <Text
                style={{
                  color: "red",
                  width: "100%",
                  marginTop: -width * 0.02,
                  marginLeft: width * 0.04,
                  marginBottom: width * 0.02,
                }}
              >
                {aboutRequiredFields.type ? aboutRequiredFields.type : ""}
              </Text>
            </Col>
            <Text
              style={{
                color: "red",
                width: "100%",
                marginTop: -width * 0.02,
                marginLeft: width * 0.04,
                marginBottom: width * 0.02,
                fontSize: width * 0.025,
              }}
            >
              {error ? error : ""}
            </Text>
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
              // onPress={SignUp}
              style={{
                width: "60%",
                position: "absolute",
                left: "28%",
                right: 0,
                bottom: 0,
                top: "101.5%",
                alignSelf: "center",
                alignItems: "center",
              }}
            >
              {isLoading === true ? (
                <TouchableOpacity>
                  <Image
                    source={signout}
                    style={{
                      height: height * 0.053,
                      width: width * 0.32,
                      // alignSelf: "center",
                      borderRadius: 5,
                      // marginLeft: width * 0.01,
                    }}
                  />

                  <Text style={styles.SignOutText}>Loading...</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={SignUp}>
                  <Image
                    source={signout}
                    style={{
                      height: height * 0.053,
                      width: width * 0.32,
                      // alignSelf: "center",
                      borderRadius: 5,
                      // marginLeft: width * 0.01,
                    }}
                  />

                  <Text style={styles.SignOutText}>Register</Text>
                </TouchableOpacity>
              )}
              {/* <Button
                style={styles.SignIn}
                onPress={() => navigation.navigate("MyTabs")}
              >
                <Text style={styles.SignText}>Sign In</Text>
              </Button> */}
              {/* <Image
                onPress={SignUp}
                source={Register}
                style={{
                  height: height * 0.06,
                  width: width * 0.35,
                  alignSelf: "center",
                  borderRadius: 8,
                  // marginTop: height * 0.01,
                }}
              /> */}
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
  SignOut: {
    // width: "30%",
    // height: 38,
    // padding: "50%",
    // marginLeft: "8%",
    // borderWidth: 1,
    // borderRadius: 10,
    // backgroundColor: "transparent",
    // alignSelf: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
  SignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    position: "absolute",
    left: "25%",
    top: "20%",
    // padding: 12,
    fontFamily: "Montserrat",

    fontSize: width * 0.04,
  },
})
