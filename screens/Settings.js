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
  List,
  ListItem,
  Footer,
  Container,
  Content,
} from "native-base"
import { Row, Grid, Col } from "react-native-easy-grid"
const { width, height } = Dimensions.get("window")
import gallery2 from "../assets/Asset.png"
import Icons from "react-native-vector-icons/Feather"
import Icon1 from "react-native-vector-icons/FontAwesome5"
import signout from "../assets/signout.png"

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
          <Text style={styles.headerSignOutText}>Profile</Text>
        </Header>
        <Content>
          <Col
            style={{
              backgroundColor: "#606060",
              height: height * 0.112,
            }}
          >
            <Col
              style={{
                backgroundColor: "#fff",
                width: "24%",
                height: height * 0.12,
                position: "absolute",
                left: 30,
                right: 0,
                top: "50%",
                borderRadius: 5,
              }}
            >
              <Image
                source={gallery2}
                style={{
                  height: height * 0.075,
                  width: width * 0.13,
                  alignSelf: "center",
                  marginTop: height * 0.02,
                }}
              />
            </Col>
          </Col>
          <Col
            style={{
              width: "50%",
              marginTop: height * 0.015,
              alignSelf: "flex-end",
              marginRight: "5%",
            }}
          >
            <Button
              style={styles.SignOut}
              onPress={() => props.navigation.navigate("Welcome")}
            >
              <Image
                source={signout}
                style={{
                  height: height * 0.048,
                  width: width * 0.4,
                  // alignSelf: "center",
                  borderRadius: 5,
                  // marginLeft: width * 0.01,
                }}
              />
              <Text style={styles.SignOutText}>Login/Signup</Text>
            </Button>
          </Col>
          <Col
            style={{
              marginTop: 25,
              width: width,
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
                  <Icon1 name="tv" style={styles.chevronIcon} size={20} />
                  <Text style={styles.text}>Orders</Text>
                </Left>
                <Right>
                  <Icons
                    name="chevron-right"
                    style={styles.chevronIconRight}
                    size={25}
                  />
                </Right>
              </ListItem>
              <ListItem
                style={styles.ListItem}
                onPress={() => navigation.navigate("Currencies")}
              >
                <Left>
                  <Icon1
                    name="user-astronaut"
                    style={styles.chevronIcon}
                    size={20}
                  />

                  <Text style={styles.text}>Help Center</Text>
                </Left>
                <Right>
                  <Icons
                    name="chevron-right"
                    size={25}
                    style={styles.chevronIconRight}
                  />
                </Right>
              </ListItem>
              <ListItem style={styles.ListItem}>
                <Left>
                  <Icons name="heart" style={styles.chevronIcon} size={20} />
                  <Text style={styles.text}>Wishlist</Text>
                </Left>
                <Right>
                  <Icons
                    name="chevron-right"
                    size={25}
                    style={styles.chevronIconRight}
                  />
                </Right>
              </ListItem>
            </List>
          </Col>
          <Col
            style={{
              marginTop: 10,
              width: width,
              //   backgroundColor: "red",
            }}
          >
            <List style={{ marginLeft: -width * 0.035 }}>
              <ListItem
                style={styles.ListItem}
                onPress={() => navigation.navigate("financial")}
              >
                <Left>
                  <Icon1
                    name="user-astronaut"
                    style={styles.chevronIcon}
                    size={20}
                  />
                  <Text style={styles.text}>Scan for Coupon</Text>
                </Left>
                <Right>
                  <Icons
                    name="chevron-right"
                    size={25}
                    style={styles.chevronIconRight}
                  />
                </Right>
              </ListItem>
              <ListItem
                style={styles.ListItem}
                onPress={() => navigation.navigate("financial")}
              >
                <Left>
                  <Icon1
                    name="user-astronaut"
                    style={styles.chevronIcon}
                    size={20}
                  />
                  <Text style={styles.text}>Refer & Earn</Text>
                </Left>
                <Right>
                  <Icons
                    name="chevron-right"
                    size={25}
                    style={styles.chevronIconRight}
                  />
                </Right>
              </ListItem>
            </List>
          </Col>
          <Col
            style={{
              marginTop: 10,
              width: "100%",
              alignSelf: "center",
              backgroundColor: "#fff",
              marginBottom: height * 0.04,
              paddingBottom: height * 0.02,
            }}
          >
            <Col
              style={{
                width: "67%",
                alignSelf: "center",
              }}
            >
              <Text style={styles.listText}>FAQs</Text>
              <Text style={styles.listText}>About Us</Text>
              <Text style={styles.listText}>Terms Of Use</Text>
              <Text style={styles.listText}>Privacy Policy</Text>
            </Col>
          </Col>
          <Col
            style={{
              //   backgroundColor: "#C6C6C6",
              padding: width * 0.05,
              //   paddingTop: width * 0.24,

              height: height * 0.15,
              //   marginTop: height * 0.02,
            }}
          >
            <Text
              style={{
                color: "#B07908",
                fontSize: width * 0.035,
                // width: "47%",
                fontFamily: "Montserrat",

                alignSelf: "center",
                opacity: 0.9,
                // backgroundColor: "#EAD3EA",
              }}
            >
              APP VERSION XXXXXX
            </Text>
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
  SignOut: {
    width: "80%",
    height: 37,
    marginLeft: "10%",
    // padding: "50%",
    // marginLeft: "20%",
    // borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "transparent",
    alignSelf: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
  SignIn: {
    // width: "100%",
    height: 50,
    // padding: "50%",

    // borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: "#E8AF49",

    // alignItems: "center",
    // alignContent: "center",
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
  SignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    left: "15%",
    fontFamily: "Montserrat",
    position: "absolute",
    fontSize: width * 0.04,
  },
  SignText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    marginLeft: "22%",
    // padding: 12,
    fontSize: 16,
    // marginLeft: 20,
  },
  text: {
    // fontWeight: "600",
    fontFamily: "MontserratLight",
    fontSize: height * 0.025,
    color: "#B07908",
    marginLeft: width * 0.04,
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
    marginBottom: 3,
  },
  listText: {
    fontSize: width * 0.04,
    marginTop: width * 0.02,
    fontFamily: "MontserratLight",
    color: "#B07908",
  },
})
