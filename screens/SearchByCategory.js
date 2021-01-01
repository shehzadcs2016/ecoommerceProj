import React, { useEffect, useState } from "react"
import { Row, Grid, Col } from "react-native-easy-grid"
import Product from "../components/products"

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
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
const { width, height } = Dimensions.get("window")
import axios from "axios"
export default function Collection({
  navigation,
  route,
  gallery2,
  gallery3,
  gallery4,
  productData,
  title,
}) {
  const { category_name } = route.params
  const [categoryData, setcategoryData] = useState("")

  useEffect(() => {
    const form_data = new FormData()
    form_data.append("category_name", category_name)

    try {
      axios
        .post(
          "https://project3.solutionsplayers.com/index.php/api/getProducts",
          form_data
        )
        .then((res) => {
          console.log(res.data, "response catgeory")
          setcategoryData(res.data.products)
          // alert("hello")

          // setFormData(loginData)
        })
        .catch((err) => {
          // console.log(" error =>", err)
        })
    } catch (error) {
      // alert("err")
      // console.log(error, "error catch")
    }
  }, [])
  console.log(categoryData, "categoryData")
  return (
    <>
      <Col
        style={{
          width: width,
          backgroundColor: "#fff",
          alignSelf: "center",
          alignItems: "center",
          // paddingBottom: -width * 0.5,
          paddingTop: 5,
          // backgroundColor: "red",
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
          {category_name}
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
          {/* <ScrollView horizontal={true}> */}

          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              // backgroundColor: "#000",
              // maxHeight: height * 0.5,
              paddingTop: 0,
              marginTop: -width * 0.23,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
          >
            <Text>
              {categoryData && categoryData.length > 0
                ? categoryData.map((dt, i) => {
                    return (
                      <View key={`${dt.product_id}+_product_`}>
                        <Product
                          navigation={navigation}
                          Row={Row}
                          Col={Col}
                          i={i}
                          Text={Text}
                          Image={Image}
                          width={width}
                          gallery2={gallery2}
                          height={height}
                          userImage={dt.product_image[0]}
                          dt={dt}
                        />
                      </View>
                    )
                  })
                : "hello"}
            </Text>
          </ScrollView>
        </Row>
      </Col>
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
