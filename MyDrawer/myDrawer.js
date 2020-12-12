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
import Icon from "react-native-vector-icons/Ionicons"
import Icons from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/AntDesign"
import Icon4 from "react-native-vector-icons/Entypo"

const { width, height } = Dimensions.get("window")
import { Row, Grid, Col } from "react-native-easy-grid"
import gallery2 from "../assets/Asset.png"
import signout from "../assets/signout.png"

import Icon1 from "react-native-vector-icons/FontAwesome5"

export default function MyDrawer({ navigation }) {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ drawerLabel: "Home" }}
      />
    </Drawer.Navigator>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Content>
          <Col
            style={{
              backgroundColor: "#BDBDBD",
              height: height * 0.27,
            }}
          >
            <Row>
              <Col
                style={{
                  backgroundColor: "#fff",
                  width: width * 0.28,
                  height: height * 0.13,
                  borderRadius: 60,
                  // position: "absolute",
                  left: 15,
                  // right: 0,
                  top: "18%",
                }}
              >
                <Image
                  source={gallery2}
                  style={{
                    height: height * 0.09,
                    width: width * 0.15,
                    alignSelf: "center",
                    marginTop: height * 0.015,
                  }}
                />
                <Text
                  style={{
                    fontSize: height * 0.03,
                    marginTop: height * 0.03,
                    marginLeft: width * 0.05,

                    fontFamily: "OpenSans",
                    // marginLeft: width * 0.04a,
                    alignSelf: "center",
                    width: "78%",
                    // backgroundColor: "#F2DAED",
                    // opacity: 0.7,
                    color: "#fff",
                  }}
                >
                  Name
                </Text>
              </Col>
              <Col>
                <Button
                  style={styles.SignUp}
                  onPress={() => props.navigation.navigate("Register")}
                >
                  <Image
                    source={drawerSignup}
                    style={{
                      height: height * 0.06,
                      width: width * 0.3,
                      alignSelf: "center",
                      borderRadius: 8,
                      // marginLeft: width * 0.01,
                    }}
                  />
                </Button>
                <Button
                  style={styles.SignIn}

                  // onPress={() => props.navigation.navigate("Login")}
                >
                  <Image
                    source={drawerSignin}
                    style={{
                      height: height * 0.06,
                      width: width * 0.3,
                      alignSelf: "center",
                      // marginLeft: width * 0.01,

                      borderRadius: 8,
                      // marginTop: height * 0.01,
                    }}
                  />
                  {/* <Text style={styles.SignText}>Sign In</Text> */}
                </Button>
              </Col>
            </Row>
          </Col>
          {/* <Col
            style={{
              marginTop: 10,
              // width: width,
              //   backgroundColor: "red",
            }}
          >
            <List style={{ marginLeft: -width * 0.035 }}>
              <ListItem
                style={styles.ListItem}
                onPress={() => navigation.navigate("financial")}
              >
                <Left>
                  <Icon1 name="list" style={styles.chevronIconLeft} size={15} />
                  <Text style={styles.text}>Categories</Text>
                </Left>
                <Right>
                  <Icons
                    name="chevron-down"
                    size={30}
                    style={styles.chevronIcon}
                  />
                </Right>
              </ListItem>
            </List>
          </Col> */}
          <Grid
            style={{
              // width: "100%",
              // alignSelf: "center",
              marginTop: 10,
            }}
          >
            <Row
              style={{
                // flexDirection: "row",
                paddingHorizontal: 20,
                borderBottomWidth: 0.3,
                paddingBottom: 10,
                // marginTop: 5,
              }}
            >
              <Col>
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  // onPress={() => props.navigation.navigate("Archieve")}
                >
                  <Icon1 name="list" style={styles.ListIcon} />
                  <Text style={styles.IconText}>Categories</Text>
                </TouchableOpacity>
              </Col>
              <Col
                style={{
                  width: "15%",
                }}
              >
                <Icons
                  name="chevron-down"
                  size={30}
                  style={{
                    marginTop: height * 0.005,
                    color: "grey",
                    marginRight: width * 0.01,
                  }}
                />
              </Col>
            </Row>
            <Col style={styles.listItem}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                // onPress={() => props.navigation.navigate("Archieve")}
              >
                <Icon name="ios-timer" style={styles.ListIcon} />
                <Text style={styles.IconText}>My Orders</Text>
              </TouchableOpacity>
            </Col>
            <Col style={styles.listItem}>
              <Icons name="phone" style={styles.ListIcon} />
              <Text style={styles.IconText}>Contact Us</Text>
            </Col>
            <Col style={styles.listItem}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                // onPress={() => props.navigation.navigate("Saved")}
              >
                <Icon3 name="sharealt" style={styles.ListIcon} />
                <Text style={styles.IconText}>Rate Us on Play Store</Text>
              </TouchableOpacity>
            </Col>
            <Col style={styles.listItem}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                // onPress={() => props.navigation.navigate("Saved")}
              >
                <Icon4 name="share" style={styles.ListIcon} />
                <Text style={styles.IconText}>Share Us</Text>
              </TouchableOpacity>
            </Col>
            <Col style={styles.listItem}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                // onPress={() => props.navigation.navigate("Saved")}
              >
                <Icons name="bookmark" style={styles.ListIcon} />
                <Text style={styles.IconText}>Terms of Use</Text>
              </TouchableOpacity>
            </Col>
            <Col style={styles.listItem}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                // onPress={() => props.navigation.navigate("Saved")}
              >
                <Icons name="bookmark" style={styles.ListIcon} />
                <Text style={styles.IconText}>Privacy Policies</Text>
              </TouchableOpacity>
            </Col>
            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                // borderBottomWidth: 0.3,
                paddingBottom: 10,
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                // onPress={() => props.navigation.navigate("Saved")}
              >
                <Icons name="bookmark" style={styles.ListIcon} />
                <Text style={styles.IconText}>
                  Shipping & Return {"\n"} Policies
                </Text>
              </TouchableOpacity>
            </Col>
            {/*             
            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 13,
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => props.navigation.navigate("Discover")}
              >
                <Icon3 name="people" style={styles.ListIcon} />
                <Text style={styles.IconText}>Discover People</Text>
              </TouchableOpacity>
            </Col>

            <Col
              style={{
                flexDirection: "row",
                paddingHorizontal: 13,
                marginTop: 5,
              }}
            >
              <Icons name="facebook" style={{ fontSize: 30, marginTop: 5 }} />
              <Text
                style={{ fontSize: 15, paddingHorizontal: 11, marginTop: 10 }}
              >
                Open Facebook
              </Text>
            </Col> */}
            <Col
              style={{
                width: "90%",
                marginTop: "13%",

                alignSelf: "center",
              }}
            >
              <Button
                style={styles.SignOut}
                onPress={() => props.navigation.navigate("Welcome")}
              >
                <Image
                  source={signout}
                  style={{
                    height: height * 0.052,
                    width: width * 0.24,
                    // alignSelf: "center",
                    borderRadius: 5,
                    // marginLeft: width * 0.01,
                  }}
                />
                <Text style={styles.SignOutText}>Sign Out</Text>
              </Button>
            </Col>
            <Col
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: "5%",
              }}
            >
              <Text
                style={{
                  color: "#696969",
                  fontSize: width * 0.05,
                  // width: "47%",

                  // fontWeight: "bold",
                  alignSelf: "center",
                  opacity: 0.9,
                  // backgroundColor: "#EAD3EA",
                }}
              >
                APP VERSION 2.08
              </Text>
            </Col>
          </Grid>
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
