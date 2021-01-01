import React from "react"
import { View, Text } from "react-native"

export default function FestiveDeal({
  CardItem,
  Row,
  Col,
  gallery1,
  width,
  height,
  Image,
  userImage,
  i,
}) {
  let Image_Http_URL = {
    uri: `https://project3.solutionsplayers.com/uploads/products/${userImage}`,
  }
  return (
    <Row
      key={i}
      style={{
        paddingLeft: width * 0.08,
        paddingTop: width * 0.07,
        alignSelf: "center",
      }}
    >
      <Col>
        <Image
          source={userImage !== "" ? Image_Http_URL : gallery1}
          style={{
            height: height * 0.15,
            width: width * 0.33,
            borderRadius: 4,
          }}
        />
      </Col>
    </Row>
  )
}
