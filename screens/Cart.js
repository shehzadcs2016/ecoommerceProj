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
          <Text style={styles.headerSignOutText}>Cart</Text>
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
              backgroundColor: "#fff",
              marginTop: height * 0.015,
            }}
          >
            <Col style={{ flexDirection: "row" }}>
              <Image
                source={offerpercent}
                style={{
                  height: height * 0.025,
                  width: width * 0.05,
                  marginTop: width * 0.005,
                  marginRight: width * 0.015,
                }}
              />
              <Text
                style={{
                  fontSize: width * 0.045,
                  color: "#960019",
                  fontFamily: "MontserratLight",
                }}
              >
                Available Offers
              </Text>
            </Col>
            <Col
              style={{
                width: "90%",
                marginTop: height * 0.01,
                alignSelf: "center",
                // marginLeft: height * 0.02,
              }}
            >
              <Text
                style={{
                  fontSize: width * 0.035,
                  color: "#960019",
                  fontFamily: "MontserratLight",
                }}
              >
                10% Discount with credit cards and all. T&C
              </Text>
              <Text
                style={{
                  fontSize: width * 0.035,
                  color: "#960019",
                  fontFamily: "MontserratLight",
                  marginTop: height * 0.005,
                }}
              >
                Show More
              </Text>
            </Col>
          </Col>
          <Col
            style={{
              flexDirection: "row",
              //   width: "90%",
              //   alignSelf: "center",
              padding: 5,
              paddingLeft: 10,

              backgroundColor: "#fff",
              marginTop: height * 0.015,
            }}
          >
            <Image
              source={offerpercent}
              style={{
                height: height * 0.025,
                width: width * 0.05,
                marginTop: width * 0.005,
                marginRight: width * 0.015,
              }}
            />
            <Text
              style={{
                fontSize: width * 0.04,
                color: "#960019",
                fontFamily: "MontserratLight",
              }}
            >
              Shop for 100 more to avoid handling fee.
            </Text>
          </Col>
          <Col
            style={{
              backgroundColor: "#fff",
              padding: 20,
              paddingBottom: 10,
              marginTop: 10,
            }}
          >
            <Row>
              <Col style={{ width: "35%" }}>
                <Image
                  source={gallery2}
                  style={{ height: height * 0.2, width: "100%" }}
                />
              </Col>
              <Col style={{ paddingLeft: 10 }}>
                <Text style={styles.cartItemText}>Earnings</Text>
                <Text style={styles.cartItemsubText}>Female</Text>
                <Text style={styles.cartItemquantityText}>Quantity</Text>
                <Text style={styles.cartItemText}>Rs.500</Text>
                <Text style={styles.cartItemquantityText}>
                  30 Days Easy Return
                </Text>
              </Col>
            </Row>
            <Row style={{ width: "90%", alignSelf: "center", paddingTop: 10 }}>
              <Col style={{ width: "35%" }}>
                <Text style={styles.Remove}>Remove</Text>
              </Col>
              <Col style={{ marginLeft: 10 }}>
                <Text style={styles.wishlIst}>Move to WishList</Text>
              </Col>
            </Row>
          </Col>
          <Col
            style={{
              backgroundColor: "#fff",
              padding: 20,
              paddingBottom: 10,
              marginTop: 10,
            }}
          >
            <Row>
              <Col style={{ width: "35%" }}>
                <Image
                  source={gallery2}
                  style={{ height: height * 0.2, width: "100%" }}
                />
              </Col>
              <Col style={{ paddingLeft: 10 }}>
                <Text style={styles.cartItemText}>Earnings</Text>
                <Text style={styles.cartItemsubText}>Female</Text>
                <Text style={styles.cartItemquantityText}>Quantity</Text>
                <Text style={styles.cartItemText}>Rs.500</Text>
                <Text style={styles.cartItemquantityText}>
                  30 Days Easy Return
                </Text>
              </Col>
            </Row>
            <Row style={{ width: "90%", alignSelf: "center", paddingTop: 10 }}>
              <Col style={{ width: "35%" }}>
                <Text style={styles.Remove}>Remove</Text>
              </Col>
              <Col style={{ marginLeft: 10 }}>
                <Text style={styles.wishlIst}>Move to WishList</Text>
              </Col>
            </Row>
          </Col>
          <Col style={{ width: "90%", alignSelf: "center", marginTop: 5 }}>
            <Text
              style={{
                fontFamily: "SemiBold",
                fontSize: width * 0.04,
                color: "#4D4E4E",
              }}
            >
              Coupons
            </Text>
          </Col>
          <Col style={{ marginTop: 5, backgroundColor: "#fff" }}>
            <List
              style={{
                marginLeft: -width * 0.035,
                // width: "0%",
                // alignSelf: "center",
              }}
            >
              <ListItem
                style={styles.ListItem}
                selected
                onPress={() => navigation.navigate("Limits")}
              >
                <Left>
                  {/* <Icon1 name="tv" style={styles.chevronIcon} size={20} /> */}
                  <Text style={styles.text}>Apply Coupons</Text>
                </Left>
                <Right>
                  <Icons
                    name="chevron-right"
                    style={styles.chevronIconRight}
                    size={25}
                  />
                </Right>
              </ListItem>
            </List>
            <Col
              style={{ width: width, paddingLeft: 20, backgroundColor: "#fff" }}
            >
              <Text style={styles.cartItemsubText}>
                Login to see best Coupons
              </Text>
            </Col>
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
          <Row style={{ width: "90%", alignSelf: "center", marginTop: 15 }}>
            <Col onPress={() => navigation.navigate("MyTabs")}>
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
                <Text style={styles.SignOutText}>Continue Shopping</Text>
              </Button>
            </Col>
            <Col onPress={() => navigation.navigate("Checkout")}>
              <Button
                style={styles.SignOut}
                onPress={() => navigation.navigate("Checkout")}
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
                <Text style={styles.SignOutText}>Proceed To Checkout</Text>
              </Button>
            </Col>
          </Row>
          <Col style={{ width: "90%", alignSelf: "center", marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "SemiBold",
                fontSize: width * 0.04,
                color: "#4D4E4E",
              }}
            >
              Poeple Can also Buy this
            </Text>
          </Col>
          <Row
            style={{
              backgroundColor: "#fff",
              //   width: "95%",
              //   alignSelf: "center",
              padding: height * 0.005,
              paddingBottom: height * 0.01,

              marginBottom: 20,
            }}
          >
            {/* <ScrollView horizontal={true}> */}
            <Col
              style={{
                width: "27%",
                marginLeft: width * 0.02,
                // backgroundColor: "red",
              }}
            >
              <Image
                source={gallery2}
                style={{ height: height * 0.2, width: "100%" }}
              />
              <Text style={styles.cardTitleText}>Name</Text>
              <Text
                style={{
                  color: "#B98D34",
                  // alignSelf: "center",
                  fontFamily: "MontserratLight",

                  fontSize: width * 0.03,
                }}
              >
                Rs.500(20% off)
              </Text>
              <Text style={styles.AddTo}>ADD TO BAG</Text>
            </Col>
            <Col
              style={{
                width: "27%",
                marginLeft: width * 0.07,
                // backgroundColor: "green",
              }}
            >
              <Image
                source={gallery3}
                style={{ height: height * 0.2, width: "100%" }}
              />
              <Text style={styles.cardTitleText}>Name</Text>
              <Text
                style={{
                  color: "#B98D34",
                  // alignSelf: "center",
                  fontFamily: "MontserratLight",

                  fontSize: width * 0.03,
                }}
              >
                Rs.500(20% off)
              </Text>
              <Text style={styles.AddTo}>ADD TO BAG</Text>
            </Col>
            <Col style={{ width: "27%", marginLeft: width * 0.07 }}>
              <Image
                source={gallery4}
                style={{ height: height * 0.2, width: "100%" }}
              />
              <Text style={styles.cardTitleText}>Name</Text>
              <Text
                style={{
                  color: "#B98D34",
                  // alignSelf: "center",

                  fontFamily: "MontserratLight",

                  fontSize: width * 0.03,
                }}
              >
                Rs.500(20% off)
              </Text>
              <Text style={styles.AddTo}>ADD TO BAG</Text>
            </Col>
          </Row>
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
    paddingBottom: -12,
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
    fontSize: height * 0.018,
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
    // alignSelf: "center",
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
    left: "13%",
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
