import React from "react"
import { View, Text } from "react-native"

export default function TopCategory({
  CardItem,
  Col,
  Row,
  Image,
  gallery2,
  width,
  height,
  userImage,
  i,
}) {
  let Image_Http_URL = {
    uri: `https://project3.solutionsplayers.com/uploads/category/${userImage}`,
  }
  return (
    <Row
      key={i}
      style={{
        paddingLeft: width * 0.07,
        // paddingRight: width * 0.07,
        paddingTop: width * 0.07,
      }}
    >
      <Col>
        <Image
          source={userImage ? Image_Http_URL : gallery2}
          style={{
            height: height * 0.1,
            width: width * 0.2,
            borderRadius: 5,
          }}
        />
      </Col>
    </Row>
  )
}
