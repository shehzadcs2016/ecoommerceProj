import React from "react"
import { View, Text } from "react-native"
import Icon1 from "react-native-vector-icons/FontAwesome5"

export default function EarningCard({
  navigation,
  Image,
  gallery5,
  width,
  height,
  Row,
  Col,
  Icons,
}) {
  return (
    <Col
      style={{
        marginLeft: 5,
        backgroundColor: "#fff",
        paddingBottom: 10,
        width: "50%",
      }}
    >
      <Image
        source={gallery5}
        style={{
          height: height * 0.3,
          width: width * 0.5,
          // borderRadius: 5,
        }}
      />
      <Col
        style={{
          backgroundColor: "#fff",
          width: "33%",
          borderRadius: 100,
          flexDirection: "row",
          position: "absolute",
          left: "5%",
          top: "65%",
          padding: 1,
        }}
      >
        <Text
          style={{
            fontSize: width * 0.04,
            marginLeft: width * 0.014,
            fontFamily: "OpenSans",
          }}
        >
          4
        </Text>
        <Icon1
          name="star"
          color={"#B98D34"}
          style={{ marginTop: 3, marginLeft: 3 }}
        />
        <Text
          style={{
            marginLeft: width * 0.01,
          }}
        >
          |
        </Text>

        <Text
          style={{
            fontSize: width * 0.04,
            fontFamily: "OpenSans",
            marginLeft: width * 0.003,
          }}
        >
          20
        </Text>
      </Col>
      <Col
        style={{
          width: "85%",
          backgroundColor: "#fff",
          alignSelf: "center",
          // alignItems: "center",
          // marginBottom: 10,
          // marginTop: 12,
          // height: height * 0.14,
          // padding: 40,
        }}
      >
        <Col
          style={{
            //   marginLeft: width * 0.08,
            // width: width * 0.82,
            // alignSelf: "center",
            marginTop: 5,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: height * 0.02,

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
              fontSize: height * 0.015,
              marginTop: width * 0.01,
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
          <Icons
            size={20}
            // style={styles.rightHeart}
            style={{ marginLeft: width * 0.08 }}
            name="heart"
            color={"#ccc"}
          />
        </Col>
        <Col
          style={
            {
              // width: width * 0.82,
              // alignSelf: "center",
              //   marginTop: width * 0.005,
            }
          }
        >
          <Text
            style={{
              fontSize: height * 0.013,
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
            // alignSelf: "center",
            // marginTop: width * 0.01,
          }}
        >
          <Text
            style={{
              fontSize: height * 0.013,
              //   marginTop: width * 0.02,
              // marginLeft: width * 0.02,
              // backgroundColor: "#fff",
              // opacity: 0.4,
              //   fontWeight: "bold",
              fontFamily: "OpenSans",
              color: "#757575",
            }}
          >
            Lorem ipsum dolar sit amet
          </Text>
        </Col>
        <Col
          style={{
            //   marginLeft: width * 0.08,
            // width: width * 0.87,
            // alignSelf: "center",
            // marginTop: 5,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: height * 0.017,

              // backgroundColor: "#fff",
              // opacity: 0.4,
              //   fontWeight: "bold",
              fontFamily: "OpenSans",
              color: "#B98D34",
            }}
          >
            RS 500
          </Text>

          <Text
            style={{
              fontSize: height * 0.017,
              // marginTop: width * 0.02,
              marginLeft: width * 0.03,
              // backgroundColor: "#fff",
              // opacity: 0.4,
              //   fontWeight: "bold",
              fontFamily: "OpenSans",
              color: "#BDBDBD",
            }}
          >
            600
          </Text>
          <Text
            style={{
              fontSize: height * 0.017,
              // marginTop: width * 0.02,
              marginLeft: width * 0.03,
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
      </Col>
    </Col>
  )
}
