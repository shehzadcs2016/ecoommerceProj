import React, { useState } from "react"
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Picker,
  Image,
  ScrollView,
} from "react-native"
import Carosoul from "../shared/MainCarosoul"
import Icon1 from "react-native-vector-icons/Feather"
import img from "../assets/gallery2.jpg"
import gallery1 from "../assets/gallery1.jpg"
import gallery2 from "../assets/gallery2.jpg"

import Icons from "react-native-vector-icons/FontAwesome5"
import { Row, Grid, Col } from "react-native-easy-grid"
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
  Thumbnail,
  Container,
  Content,
} from "native-base"
const { width, height } = Dimensions.get("window")
import signout from "../assets/signout.png"

export default function SingleProduct({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("java")
  return (
    <View style={{ flex: 1, backgroundColor: "#E0E8F1" }}>
      <Carosoul />
      <View style={{ flex: 3 }}>
        <ScrollView>
          <Col
            style={{
              width: "100%",
              backgroundColor: "#fff",
              // alignSelf: "center",
              // alignItems: "center",
              // marginBottom: 10,
              marginTop: 12,
              height: height * 0.14,
              // padding: 40,
            }}
          >
            <Col
              style={{
                //   marginLeft: width * 0.08,
                width: width * 0.82,
                alignSelf: "center",
                marginTop: 5,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,

                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "SemiBold",
                  color: "#757575",
                }}
              >
                Earings
              </Text>

              <Text
                style={{
                  fontSize: height * 0.018,
                  marginTop: width * 0.02,
                  marginLeft: width * 0.02,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                Female
              </Text>
            </Col>
            <Col
              style={{
                width: width * 0.82,
                alignSelf: "center",
                //   marginTop: width * 0.005,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.017,
                  //   marginTop: width * 0.02,
                  // marginLeft: width * 0.02,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                SKU ANS001
              </Text>
            </Col>
            <Col
              style={{
                width: width * 0.82,
                alignSelf: "center",
                marginTop: width * 0.01,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.0165,
                  //   marginTop: width * 0.02,
                  // marginLeft: width * 0.02,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#757575",
                }}
              >
                Lorem ipsum dolar sit amet, chole li siete mi donot lesut ko
                liete sie tile chises ipi.
              </Text>
            </Col>
          </Col>
          <Row
            style={{
              //   marginLeft: width * 0.08,
              width: width * 0.95,
              alignSelf: "center",
              // marginTop: 5,

              // flexDirection: "row",
              height: 40,
            }}
          >
            <Col
              style={{
                width: "40%",
                //   padding: 0,
                //   backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.021,
                  marginTop: width * 0.03,
                  marginLeft: width * 0.01,

                  fontFamily: "OpensansSemiBold",
                  color: "#757575",
                }}
              >
                Product variation
              </Text>
            </Col>
            <Col
              style={{
                width: "28%",
                backgroundColor: "#DABB58",
                marginLeft: width * 0.01,
                height: 35,
                marginTop: width * 0.01,
              }}
            >
              <Picker
                note
                mode="dropdown"
                style={{
                  width: 110,
                  height: 35,
                  color: "#fff",
                }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Col>
            <Col
              style={{
                width: "28%",
                backgroundColor: "#DABB58",
                marginLeft: width * 0.02,
                height: 35,
                marginTop: width * 0.01,
              }}
            >
              <Picker
                note
                mode="dropdown"
                style={{ width: 110, height: 35, color: "#fff" }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Col>
          </Row>
          <Col
            style={{
              width: "100%",
              backgroundColor: "#fff",
              // alignSelf: "center",
              // alignItems: "center",
              // marginBottom: 10,
              marginTop: 12,
              height: height * 0.08,
              // padding: 40,
            }}
          >
            <Col
              style={{
                //   marginLeft: width * 0.08,
                width: width * 0.87,
                alignSelf: "center",
                marginTop: 5,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,

                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "SemiBold",
                  color: "#757575",
                }}
              >
                <Text style={{ color: "#B98D34" }}> RS</Text> 600
              </Text>

              <Text
                style={{
                  fontSize: height * 0.028,
                  // marginTop: width * 0.02,
                  marginLeft: width * 0.02,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                500
              </Text>
              <Text
                style={{
                  fontSize: height * 0.028,
                  // marginTop: width * 0.02,
                  marginLeft: width * 0.02,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                (20% OFF)
              </Text>
            </Col>
            <Col
              style={{
                width: width * 0.82,
                alignSelf: "center",
                //   marginTop: width * 0.005,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.017,
                  //   marginTop: width * 0.02,
                  // marginLeft: width * 0.02,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  //   fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                inclusive of gst
              </Text>
            </Col>
          </Col>
          <Row
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 15,
              height: height * 0.06,
              // backgroundColor: "red",
            }}
          >
            <Col onPress={() => navigation.navigate("Cart")}>
              <Button
                style={styles.SignOut}
                onPress={() => navigation.navigate("Cart")}
              >
                <Image
                  source={signout}
                  style={{
                    height: height * 0.053,
                    width: width * 0.43,
                    // alignSelf: "center",
                    borderRadius: 5,
                    // marginLeft: width * 0.01,
                  }}
                />
                <Row
                  style={{
                    left: "25%",
                    position: "absolute",
                  }}
                >
                  <Icons
                    style={{
                      color: "#fff",
                      alignSelf: "center",
                      // backgroundColor: "#EDD1EC",
                      marginRight: 15,
                      // padding: 12,
                      // left: "13%",
                      // position: "absolute",
                    }}
                    name="shopping-basket"
                    size={20}
                    color={"#960019"}
                  />
                  <Text style={styles.SignOutText}>ADD TO BAG</Text>
                </Row>
              </Button>
            </Col>
            <Col onPress={() => navigation.navigate("Checkout")}>
              <Button
                style={styles.SignOut}
                onPress={() => navigation.navigate("Checkout")}
              >
                <Image
                  source={signout}
                  style={{
                    height: height * 0.053,
                    width: width * 0.43,
                    // alignSelf: "center",
                    borderRadius: 5,
                    // marginLeft: width * 0.01,
                  }}
                />
                <Row
                  style={{
                    left: "15%",
                    position: "absolute",
                  }}
                >
                  <Icons
                    style={{
                      color: "#fff",
                      alignSelf: "center",
                      marginRight: 15,

                      // backgroundColor: "#EDD1EC",
                      // marginLeft: "10%",
                      // padding: 12,
                      // left: "13%",
                      // position: "absolute",
                    }}
                    name="shopping-basket"
                    size={20}
                    color={"#960019"}
                  />
                  <Text style={styles.SignOutText}>BUY NOW</Text>
                </Row>
              </Button>
            </Col>
          </Row>
          <Col style={{ backgroundColor: "#fff", width: width, marginTop: 10 }}>
            <Col
              style={{
                width: width * 0.9,
                alignSelf: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                Recent Product Reviews
              </Text>
            </Col>
            <Col
              style={{
                width: width * 0.9,
                //   alignSelf: "center",
                //   alignItems: "center",
                //   padding: 10,
              }}
            >
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={img} />
                  </Left>
                  <Body>
                    <Text
                      style={{
                        fontSize: height * 0.02,

                        // backgroundColor: "#fff",
                        // opacity: 0.4,
                        //   fontWeight: "bold",
                        fontFamily: "SemiBold",
                        color: "#B98D34",
                      }}
                    >
                      Kumar Pratik
                    </Text>
                    <Text
                      note
                      style={{
                        fontSize: height * 0.016,

                        // backgroundColor: "#fff",
                        // opacity: 0.4,
                        //   fontWeight: "bold",
                        fontFamily: "OpenSans",
                        color: "#B98D34",
                      }}
                    >
                      Doing what you like will always keep you happy . .
                    </Text>
                  </Body>
                </ListItem>
              </List>
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={img} />
                  </Left>
                  <Body>
                    <Text
                      style={{
                        fontSize: height * 0.02,

                        // backgroundColor: "#fff",
                        // opacity: 0.4,
                        //   fontWeight: "bold",
                        fontFamily: "SemiBold",
                        color: "#B98D34",
                      }}
                    >
                      Kumar Pratik
                    </Text>
                    <Text
                      note
                      style={{
                        fontSize: height * 0.016,

                        // backgroundColor: "#fff",
                        // opacity: 0.4,
                        //   fontWeight: "bold",
                        fontFamily: "OpenSans",
                        color: "#B98D34",
                      }}
                    >
                      Doing what you like will always keep you happy . .
                    </Text>
                  </Body>
                </ListItem>
              </List>
              <List>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={img} />
                  </Left>
                  <Body>
                    <Text
                      style={{
                        fontSize: height * 0.02,

                        // backgroundColor: "#fff",
                        // opacity: 0.4,
                        //   fontWeight: "bold",
                        fontFamily: "SemiBold",
                        color: "#B98D34",
                      }}
                    >
                      Kumar Pratik
                    </Text>
                    <Text
                      note
                      style={{
                        fontSize: height * 0.016,

                        // backgroundColor: "#fff",
                        // opacity: 0.4,
                        //   fontWeight: "bold",
                        fontFamily: "OpenSans",
                        color: "#B98D34",
                      }}
                    >
                      Doing what you like will always keep you happy . .
                    </Text>
                  </Body>
                </ListItem>
              </List>
            </Col>
          </Col>
          <Col
            style={{
              width: width * 0.9,
              alignSelf: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: height * 0.028,
                // backgroundColor: "#fff",
                // opacity: 0.4,
                fontWeight: "bold",
                fontFamily: "OpenSans",
                color: "#B98D34",
              }}
            >
              Related Products
            </Text>
          </Col>
          <Col
            style={{
              width: width * 0.9,
              alignSelf: "center",
              paddingBottom: 20,
              paddingTop: 0,
            }}
          >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
              <Row
                style={
                  {
                    // paddingLeft: width * 0.07,
                    // paddingRight: width * 0.07,
                  }
                }
              >
                <Col style={{ alignItems: "center" }}>
                  <Image
                    source={gallery1}
                    style={{
                      height: height * 0.12,
                      width: width * 0.24,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "OpenSans",
                      fontWeight: "bold",
                      fontSize: width * 0.03,
                      color: "#B98D34",
                    }}
                  >
                    Loream ipsum
                  </Text>
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.05 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.12,
                      width: width * 0.24,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "OpenSans",
                      fontWeight: "bold",
                      fontSize: width * 0.03,
                      color: "#B98D34",
                    }}
                  >
                    Loream ipsum
                  </Text>
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.05 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.12,
                      width: width * 0.24,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "OpenSans",
                      fontWeight: "bold",
                      fontSize: width * 0.03,
                      color: "#B98D34",
                    }}
                  >
                    Loream ipsum
                  </Text>
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.05 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.12,
                      width: width * 0.24,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "OpenSans",
                      fontWeight: "bold",
                      fontSize: width * 0.03,
                      color: "#B98D34",
                    }}
                  >
                    Loream ipsum
                  </Text>
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.05 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.12,
                      width: width * 0.24,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "OpenSans",
                      fontWeight: "bold",
                      fontSize: width * 0.03,
                      color: "#B98D34",
                    }}
                  >
                    Loream ipsum
                  </Text>
                </Col>
                <Col style={{ alignItems: "center", marginLeft: width * 0.05 }}>
                  <Image
                    source={gallery2}
                    style={{
                      height: height * 0.12,
                      width: width * 0.24,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "OpenSans",
                      fontWeight: "bold",
                      fontSize: width * 0.03,
                      color: "#B98D34",
                    }}
                  >
                    Loream ipsum
                  </Text>
                </Col>
              </Row>
            </ScrollView>
          </Col>
          <Col style={{ width: width, backgroundColor: "#fff" }}>
            <Col
              style={{
                width: width * 0.9,
                alignSelf: "center",
                alignItems: "center",
                padding: 10,
                // paddingBottom: 0,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.028,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  fontWeight: "bold",
                  fontFamily: "OpenSans",
                  color: "#B98D34",
                }}
              >
                Write Your Review
              </Text>
            </Col>
            <Col
              style={{
                width: width * 0.8,
                alignSelf: "center",
                // alignItems: "flex-end",
                // padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: height * 0.018,
                  // backgroundColor: "#fff",
                  // opacity: 0.4,
                  fontFamily: "OpensansSemiBold",
                  color: "#B98D34",
                }}
              >
                If you have purchased this product, please let us know how you
                feel about this product.
              </Text>
            </Col>
            <Col
              style={{
                width: width * 0.9,
                alignSelf: "center",
                // alignItems: "flex-end",
                padding: 10,
                marginTop: 15,
              }}
            >
              <Input
                placeholder="Write your review"
                style={styles.input}
                value="Write your review"
              />
            </Col>
            <Col
              style={{
                width: width * 0.8,
                alignSelf: "center",
                // alignItems: "flex-end",
                padding: 10,
                marginTop: 15,
              }}
            >
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "#B98D34",
                  borderRadius: 5,
                  height: width * 0.1,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    alignSelf: "center",
                    left: width * 0.06,
                    fontSize: width * 0.055,
                    fontFamily: "OpenSans",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Text>
              </Button>
            </Col>
          </Col>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Homeheader: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    top: height * 0.2,
    // bottom: height * 0.01,

    // borderTopLeftRadius: 20,

    // borderWidth: 5,
    // borderColor: "#fff",
  },
  input: {
    borderWidth: 1,
    color: "#B98D34",
    height: width * 0.09,
    borderRadius: 100,
    // fontSize: 11,
  },
  SignOut: {
    width: "34%",
    height: 38,
    // padding: "50%",
    // marginLeft: "20%",
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "transparent",
    // alignSelf: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
  SignOutText: {
    color: "#fff",
    alignSelf: "center",
    // backgroundColor: "#EDD1EC",
    // marginLeft: "10%",
    // padding: 12,
    fontFamily: "Montserrat",

    fontSize: width * 0.035,
  },
})
