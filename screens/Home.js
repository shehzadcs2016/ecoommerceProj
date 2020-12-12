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
import Icon1 from "react-native-vector-icons/Feather"
import { Row, Grid, Col } from "react-native-easy-grid"
import StoryComponent from "../components/Story"
import Discount from "../components/Discount"
import Collection from "../components/Collection"
import Icons from "react-native-vector-icons/FontAwesome5"
import gallery2 from "../assets/darkImage.png"
import gallery1 from "../assets/darkImage.png"

import gallery3 from "../assets/darkImage.png"
import gallery4 from "../assets/darkImage.png"
import gallery5 from "../assets/gallery5.jpg"
import MyDrawer from "../MyDrawer/myDrawer"

const { width, height } = Dimensions.get("window")
import StaticBanner from "../components/StaticBanner"
export default function Home({ navigation }) {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Container style={{ backgroundColor: "#E0E8F1" }}>
          <Header style={styles.Homeheader}>
            <Left>
              <Icon1
                //   onPress={() => navigation.goBack()}
                onPress={() => navigation.openDrawer()}
                name="menu"
                size={30}
                color={"#960019"}
              />
            </Left>
            <Body style={{ marginLeft: width * 0.2 }}>
              <Text
                style={{
                  fontSize: width * 0.06,
                  color: "#960019",
                  fontFamily: "OpenSans",
                }}
              >
                INDIANAA
              </Text>
            </Body>
            <Right>
              <Icon1
                style={{ marginRight: width * 0.03 }}
                //   onPress={() => navigation.goBack()}
                name="search"
                size={20}
                color={"#960019"}
              />
              <Icon1
                style={{ marginRight: width * 0.03 }}
                //   onPress={() => navigation.goBack()}
                name="heart"
                size={20}
                color={"#960019"}
              />
              <Icons
                style={{ marginRight: width * 0.03 }}
                onPress={() => navigation.navigate("Cart")}
                name="shopping-basket"
                size={20}
                color={"#960019"}
              />
            </Right>
          </Header>
          <Content>
            <Col
              style={{
                backgroundColor: "#fff",
                width: width,
                padding: 10,
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: 10,

                // PaddingTop: height * 0.1,
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <StoryComponent
                  userImage={require("../assets/darkImage.png")}
                  title={"Offers"}
                />
                <StoryComponent
                  userImage={require("../assets/darkImage.png")}
                  title={"Earnings"}
                />
                <StoryComponent
                  userImage={require("../assets/darkImage.png")}
                  title={"Earnings"}
                />
                <StoryComponent
                  userImage={require("../assets/darkImage.png")}
                  title={"Earnings"}
                />
                <StoryComponent
                  userImage={require("../assets/darkImage.png")}
                  title={"Necklace"}
                />
                <StoryComponent
                  userImage={require("../assets/darkImage.png")}
                  title={"New Arrivals"}
                />
              </ScrollView>
            </Col>

            <Col
              style={{
                backgroundColor: "#BDBDBD",
                padding: width * 0.1,
                paddingTop: width * 0.24,

                height: height * 0.3,
                // marginTop: height * 0.02,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: width * 0.06,
                  width: "70%",
                  alignSelf: "center",
                  marginLeft: "13%",
                  fontFamily: "OpenSans",
                  // opacity: 0.9,
                  // backgroundColor: "#EAD3EA",
                }}
              >
                SLIDER BANNER
              </Text>
            </Col>
            <Collection
              width={width}
              height={height}
              title={"Collection of Earnings"}
              gallery2={gallery2}
              gallery3={gallery3}
              gallery4={gallery4}
              styles={styles}
              navigation={navigation}
            />
            <Collection
              width={width}
              height={height}
              title={"Collection of Necklaces"}
              gallery2={gallery2}
              gallery3={gallery3}
              gallery4={gallery4}
              styles={styles}
              navigation={navigation}
            />
            <StaticBanner />

            <Col
              style={{
                width: width,
                backgroundColor: "#fff",
                alignSelf: "center",
                alignItems: "center",
                // marginBottom: 10,
                marginTop: 12,
                height: height * 0.06,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,
                  marginTop: 10,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                Best Offers on Top Categories
              </Text>
            </Col>
            <CardItem style={{ width: width, alignSelf: "center" }}>
              <Row
                style={{
                  paddingLeft: width * 0.07,
                  paddingRight: width * 0.07,
                }}
              >
                <Col style={{ alignItems: "center" }}>
                  <Image
                    source={gallery1}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
              </Row>
            </CardItem>
            <CardItem
              style={{
                width: width,
                alignSelf: "center",
                marginTop: -height * 0.01,
              }}
            >
              <Row
                style={{
                  paddingLeft: width * 0.07,
                  paddingRight: width * 0.07,
                }}
              >
                <Col style={{ alignItems: "center" }}>
                  <Image
                    source={gallery1}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.1,
                      width: width * 0.2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
              </Row>
            </CardItem>

            <Col
              style={{
                width: width,
                backgroundColor: "#fff",
                alignSelf: "center",
                alignItems: "center",
                // marginBottom: 10,
                marginTop: 12,
                height: height * 0.06,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,
                  marginTop: 10,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                Festive Deals
              </Text>
            </Col>
            <CardItem
              style={{
                width: width,
                alignSelf: "center",
                marginTop: -height * 0.01,
              }}
            >
              <Row
                style={{ paddingLeft: width * 0.1, paddingRight: width * 0.1 }}
              >
                <Col style={{ alignItems: "center" }}>
                  <Image
                    source={gallery1}
                    style={{
                      height: height * 0.15,
                      width: width * 0.33,
                      borderRadius: 4,
                    }}
                  />
                </Col>

                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.15,
                      width: width * 0.33,
                      borderRadius: 4,
                    }}
                  />
                </Col>
              </Row>
            </CardItem>
            <CardItem
              style={{
                width: width,
                alignSelf: "center",
                marginTop: -height * 0.01,
              }}
            >
              <Row
                style={{ paddingLeft: width * 0.1, paddingRight: width * 0.1 }}
              >
                <Col style={{ alignItems: "center" }}>
                  <Image
                    source={gallery1}
                    style={{
                      height: height * 0.15,
                      width: width * 0.33,
                      borderRadius: 4,
                    }}
                  />
                </Col>

                <Col style={{ alignItems: "center", marginLeft: width * 0.2 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.15,
                      width: width * 0.33,
                      borderRadius: 4,
                    }}
                  />
                </Col>
              </Row>
            </CardItem>
            <Col
              style={{
                width: width,
                backgroundColor: "#fff",
                alignSelf: "center",
                alignItems: "center",
                // marginBottom: 10,
                marginTop: 12,
                height: height * 0.06,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,
                  marginTop: 10,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                Discounts
              </Text>
            </Col>
            <Col
              style={{
                width: width,
                // marginTop: height * 0.02,
                backgroundColor: "#fff",
                paddingRight: width * 0.02,
                flexDirection: "row",
              }}
            >
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
            </Col>
            <Col
              style={{
                width: width,
                marginTop: -height * 0.02,

                backgroundColor: "#fff",
                paddingRight: width * 0.02,
                flexDirection: "row",
              }}
            >
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
              <Discount
                userImage={require("../assets/darkImage.png")}
                title={""}
              />
            </Col>
            <Col
              style={{
                width: width,
                backgroundColor: "#fff",
                alignSelf: "center",
                alignItems: "center",
                paddingBottom: 20,
                paddingTop: 5,

                marginTop: 9,
                height: height * 0.08,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,
                  marginTop: 5,
                  // backgroundColor: "#F2DAED",
                  // opacity: 0.4,
                  fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                Collection of Earnings
              </Text>
            </Col>
            <Row
              style={{
                backgroundColor: "#fff",
                width: "95%",
                alignSelf: "center",
                paddingBottom: height * 0.01,
                // marginBottom: 20,
              }}
            >
              {/* <ScrollView horizontal={true}> */}
              <Col style={{ width: "35%", marginLeft: width * 0.01 }}>
                <Image
                  source={gallery2}
                  style={{ height: height * 0.25, width: "100%" }}
                />
                <Text style={styles.cardTitleText}>Name</Text>
                <Row style={{ alignSelf: "center" }}>
                  <Text
                    style={{
                      color: "#B98D34",
                      alignSelf: "center",
                      fontFamily: "SemiBold",

                      // fontSize: width * 0.05,
                    }}
                  >
                    $500
                  </Text>
                  <Text
                    style={{
                      color: "#B98D34",
                      fontFamily: "SemiBold",

                      alignSelf: "center",
                      marginLeft: width * 0.03,
                      // fontSize: width * 0.05,
                    }}
                  >
                    $600
                  </Text>
                </Row>
              </Col>
              <Col style={{ width: "35%", marginLeft: width * 0.1 }}>
                <Image
                  source={gallery3}
                  style={{ height: height * 0.25, width: "100%" }}
                />
                <Text style={styles.cardTitleText}>Name</Text>
                <Row style={{ alignSelf: "center" }}>
                  <Text
                    style={{
                      color: "#B98D34",
                      alignSelf: "center",
                      fontFamily: "SemiBold",

                      // fontSize: width * 0.05,
                    }}
                  >
                    $500
                  </Text>
                  <Text
                    style={{
                      color: "#B98D34",
                      alignSelf: "center",
                      marginLeft: width * 0.03,
                      fontFamily: "SemiBold",

                      // fontSize: width * 0.05,
                    }}
                  >
                    $600
                  </Text>
                </Row>
              </Col>
              <Col style={{ width: "30%", marginLeft: width * 0.1 }}>
                <Image
                  source={gallery4}
                  style={{ height: height * 0.25, width: "100%" }}
                />
                <Text style={styles.cardTitleText}>Name</Text>
                <Row style={{ alignSelf: "center" }}>
                  <Text
                    style={{
                      color: "#B98D34",
                      alignSelf: "center",
                      fontFamily: "SemiBold",

                      // fontSize: width * 0.05,
                    }}
                  >
                    $500
                  </Text>
                  <Text
                    style={{
                      color: "#B98D34",
                      alignSelf: "center",
                      marginLeft: width * 0.03,
                      fontFamily: "SemiBold",
                      // fontSize: width * 0.05,
                    }}
                  >
                    $600
                  </Text>
                </Row>
              </Col>
            </Row>
            <Col
              style={{
                backgroundColor: "#fff",
                marginTop: width * 0.04,
                PaddingBottom: width * 0.05,
              }}
            >
              <Col
                style={{
                  width: "80%",
                  alignSelf: "center",
                  fontFamily: "OpensansSemiBold",
                  padding: 10,
                }}
              >
                <Text style={{ color: "#B98D34", fontSize: width * 0.04 }}>
                  “lorem ipsum dolor sit amet ul is del kim liuche any te kimu
                  si dolor setu chi ka pu.”
                </Text>
              </Col>
            </Col>
          </Content>
        </Container>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Homeheader: {
    backgroundColor: "#FFDB58",
    // borderTopLeftRadius: 20,

    // borderWidth: 5,
    borderColor: "#fff",
  },
  cardTitleText: {
    color: "#B98D34",
    fontFamily: "SemiBold",

    alignSelf: "center",
    fontSize: width * 0.05,
  },
})
