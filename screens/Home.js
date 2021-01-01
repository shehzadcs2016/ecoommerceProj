import React, { useState, useEffect } from "react"
import axios from "axios"
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
  Form,
} from "native-base"
import Icon1 from "react-native-vector-icons/Feather"
import { Row, Grid, Col } from "react-native-easy-grid"
import StoryComponent from "../components/Story"
import Discount from "../components/Discount"
import Collection from "../components/Collection"
import Icons from "react-native-vector-icons/FontAwesome5"
import gallery2 from "../assets/darkImage.png"
import gallery1 from "../assets/darkImage.png"
import AsyncStorage from "@react-native-async-storage/async-storage"

import gallery3 from "../assets/darkImage.png"
import gallery4 from "../assets/darkImage.png"
import gallery5 from "../assets/gallery5.jpg"
import MyDrawer from "../MyDrawer/myDrawer"

const { width, height } = Dimensions.get("window")
import StaticBanner from "../components/StaticBanner"
import TopCategory from "../components/TopCategory"
import FestiveDeal from "../components/FestiveDeal"
export default function Home({ navigation }) {
  const [data, setData] = useState("")
  const [productData, setProducData] = useState("")
  const [dealproductData, setDealProducData] = useState("")

  useEffect(() => {
    fetchCategoryData()
    fetchProductsData()
    fetchDealProducts()
  }, [])
  const fetchCategoryData = async () => {
    try {
      await axios
        .get(
          "https://project3.solutionsplayers.com/index.php/api/get_categories"
        )
        .then((res) => {
          setData(res.data.data)
        })
        .catch((err) => console.log(" error =>", err.response.data))
    } catch (error) {}
  }
  const fetchProductsData = async () => {
    try {
      await axios
        .get("https://project3.solutionsplayers.com/index.php/api/getProducts")
        .then((res) => {
          setProducData(res.data.products)
        })
        .catch((err) => console.log(" error =>", err.response.data))
    } catch (error) {}
  }
  const fetchDealProducts = async () => {
    const formData = new FormData()
    formData.append("dealproduct", "hdbf")
    try {
      await axios
        .post(
          "https://project3.solutionsplayers.com/index.php/api/get_all_deal_product",
          formData
        )
        .then((res) => {
          setDealProducData(res.data.Deal_of_the_day)
        })
        .catch((err) => console.log(" error =>", err.response.data))
    } catch (error) {}
  }
  // console.log(AsyncStorage.getItem("@user"), "hello")
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
            <Body style={{ marginLeft: width * 0.18 }}>
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
                <Text>
                  {data && data.length > 0
                    ? data.map((dt, i) => {
                        // console.log(dt, "dt")
                        return (
                          <View key={`${dt.id}+_product_`}>
                            <StoryComponent
                              i={i}
                              gallery1={gallery1}
                              userImage={dt.image}
                              title={dt.title}
                              navigation={navigation}
                            />
                          </View>
                        )
                      })
                    : ""}
                </Text>
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
              title={`Collection of ${
                data ? (data[0].title ? data[0].title : "Daal") : ""
              }`}
              gallery2={gallery2}
              gallery3={gallery3}
              productData={productData}
              gallery4={gallery4}
              navigation={navigation}
            />
            <Collection
              width={width}
              height={height}
              productData={productData}
              title={`Collection of ${
                data ? (data[1].title ? data[1].title : "Daal") : ""
              }`}
              gallery2={gallery2}
              gallery3={gallery3}
              gallery4={gallery4}
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
            <Col
              style={{
                backgroundColor: "#fff",
                width: width,

                alignSelf: "center",
                paddingBottom: height * 0.01,
              }}
            >
              <Row>
                <Text>
                  {data && data.length > 0
                    ? data.map((dt, i) => {
                        return (
                          <View key={`${dt.id}+_product_`}>
                            <TopCategory
                              CardItem={CardItem}
                              Col={Col}
                              Row={Row}
                              userImage={dt.image}
                              Image={Image}
                              gallery2={gallery2}
                              width={width}
                              height={height}
                            />
                          </View>
                        )
                      })
                    : ""}
                </Text>
              </Row>
            </Col>
            {/* <CardItem
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
            </CardItem> */}

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
            <Col
              style={{
                backgroundColor: "#fff",
                width: width,

                alignSelf: "center",
                paddingBottom: height * 0.01,
              }}
            >
              <Row>
                <Text>
                  {dealproductData && dealproductData.length > 0
                    ? dealproductData.map((dt, i) => {
                        return (
                          <View key={`${dt.product_id}+_product_`}>
                            <FestiveDeal
                              CardItem={CardItem}
                              Row={Row}
                              Col={Col}
                              i={i}
                              gallery1={gallery1}
                              width={width}
                              height={height}
                              Image={Image}
                              userImage={dt.product_image}
                            />
                          </View>
                        )
                      })
                    : ""}
                </Text>
              </Row>
            </Col>

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
            <Collection
              width={width}
              height={height}
              title={`Collection of ${
                data ? (data[0].title ? data[2].title : "Daal") : ""
              }`}
              gallery2={gallery2}
              gallery3={gallery3}
              productData={productData}
              gallery4={gallery4}
              navigation={navigation}
            />
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
