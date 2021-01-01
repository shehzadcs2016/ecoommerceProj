import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export default function products({
  navigation,
  Row,
  Col,
  Text,
  Image,
  dt,
  i,
  gallery2,
  userImage,
}) {
  let Image_Http_URL = {
    uri: `https://project3.solutionsplayers.com/uploads/products/${userImage}`,
  }
  return (
    <Row
      style={{
        // width: width * 0.9,
        // backgroundColor: "red",
        alignSelf: "center",
        // position: "absolute",
        // bottom: height * 0.05,
        // marginTop: -height * 0.1,
      }}
    >
      <Col
        style={{
          marginLeft: i == 0 ? width * 0.01 : width * 0.1,
          width: width * 0.32,
          // backgroundColor: "red",
        }}
      >
        <Image
          onPress={() => navigation.navigate("SingleProduct")}
          source={userImage !== "" ? Image_Http_URL : gallery2}
          style={{ height: height * 0.25, width: "100%" }}
        />
        <Text
          style={styles.cardTitleText}
          onPress={() => navigation.navigate("SingleProduct")}
        >
          {dt.product_name}
        </Text>
        <Row style={{ alignSelf: "center" }}>
          <Text
            onPress={() => navigation.navigate("SingleProduct")}
            style={{
              color: "#B98D34",
              alignSelf: "center",
              //   fontFamily: "SemiBold",

              // fontSize: width * 0.05,
            }}
          >
            ${dt.price[0]}
          </Text>
          <Text
            style={{
              color: "#B98D34",
              //   fontFamily: "SemiBold",

              alignSelf: "center",
              marginLeft: width * 0.03,
              // fontSize: width * 0.05,
            }}
          >
            ${dt.price[2] ? dt.price[2] : dt.price[0]}
          </Text>
        </Row>
      </Col>
    </Row>
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
