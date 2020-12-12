import React from "react"
import { Row, Grid, Col } from "react-native-easy-grid"
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
export default function Collection({
  navigation,
  width,
  height,
  gallery2,
  gallery3,
  gallery4,

  title,
  styles,
}) {
  return (
    <>
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
          {title}
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
            onPress={() => navigation.navigate("SingleProduct")}
            source={gallery2}
            style={{ height: height * 0.25, width: "100%" }}
          />
          <Text
            style={styles.cardTitleText}
            onPress={() => navigation.navigate("SingleProduct")}
          >
            Name
          </Text>
          <Row style={{ alignSelf: "center" }}>
            <Text
              onPress={() => navigation.navigate("SingleProduct")}
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
          <Text
            style={styles.cardTitleText}
            onPress={() => navigation.navigate("Cart")}
          >
            Name
          </Text>
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
          <Text
            style={styles.cardTitleText}
            onPress={() => navigation.navigate("Cart")}
          >
            Name
          </Text>
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
    </>
  )
}
