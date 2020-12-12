import React, { memo } from "react"
import { Row, Grid, Col } from "react-native-easy-grid"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native"
const { width, height } = Dimensions.get("window")

export default function StaticBanner() {
  return (
    <Col
      style={{
        backgroundColor: "#C6C6C6",
        padding: width * 0.1,
        paddingTop: width * 0.15,

        height: height * 0.2,
        marginTop: height * 0.015,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: width * 0.065,
          // width: "47%",
          fontFamily: "OpenSans",
          alignSelf: "center",
          opacity: 0.9,
          // backgroundColor: "#EAD3EA",
        }}
      >
        STATIC BANNER
      </Text>
    </Col>
  )
}
