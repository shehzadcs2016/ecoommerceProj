import React from "react"
import { Row, Grid, Col } from "react-native-easy-grid"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native"
import Product from "./products"
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

export default function Collection({
  navigation,

  gallery2,
  gallery3,
  gallery4,
  productData,
  title,
}) {
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
          {title}
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
              {productData && productData.length > 0
                ? productData.map((dt, i) => {
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
                : ""}
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
