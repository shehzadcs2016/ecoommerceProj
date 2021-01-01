import React, { Component } from "react"
import { Text, View, Dimensions, StyleSheet, Image } from "react-native"
import Carousel from "react-native-looped-carousel"
import Icon1 from "react-native-vector-icons/Feather"
import Icons from "react-native-vector-icons/FontAwesome5"
import img from "../assets/gallery2.jpg"
import gallery1 from "../assets/gallery1.jpg"
import gallery2 from "../assets/gallery2.jpg"

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
  Radio,
  List,
  ListItem,
  Footer,
  Container,
  Content,
} from "native-base"
import { Row, Grid, Col } from "react-native-easy-grid"

const { width, height } = Dimensions.get("window")

export default class CarouselExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      size: { width, height },
    }
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout
    this.setState({ size: { width: layout.width, height: layout.height } })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ccc",
          //   position: "absolute",
          //   //   top: height * 0.06,
          //   bottom: height * 0.01,
        }}
      >
        <Col
          style={{
            position: "absolute",
            // top: height * 0.2,
            // bottom: height * 0.3,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Carousel
            onLayout={this._onLayoutDidChange}
            delay={2000}
            style={this.state.size}
            autoplay
            pageInfo
            // onAnimateNextPage={(p) => console.log(p)}
          >
            <View style={[{ backgroundColor: "#848484" }, this.state.size]}>
              <Text>1</Text>
            </View>
            <View style={[{ backgroundColor: "#848484" }, this.state.size]}>
              <Text>2</Text>
            </View>
            <View style={[{ backgroundColor: "#848484" }, this.state.size]}>
              <Text>3</Text>
            </View>
          </Carousel>

          <Icon1
            onPress={() => this.props.navigation.goBack()}
            style={styles.Icon1}
            name="arrow-left-circle"
            size={25}
          />
          <Icon1
            //   onPress={() => navigation.goBack()}
            style={styles.Icon2}
            onPress={() => navigation.openDrawer()}
            name="arrow-right-circle"
            size={25}
          />
          <Icons
            style={styles.Icon3}
            //   onPress={() => navigation.goBack()}
            name="shopping-basket"
            size={25}
            // color={"#960019"}
          />
        </Col>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Icon1: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    // top: "0%",

    left: "7%",
    bottom: "18%",
    position: "absolute",
  },
  Icon2: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    // top: "0%",

    left: "74%",
    bottom: "18%",
    position: "absolute",
  },
  Icon3: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    // top: "0%",

    left: "87%",
    bottom: "18%",
    position: "absolute",
  },
})
