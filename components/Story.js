import React from "react"
import { Image, Text, Dimensions } from "react-native"
import { Col, Row } from "react-native-easy-grid"
const { width, height } = Dimensions.get("window")

class Discount extends React.Component {
  render() {
    const { title, userImage, i, gallery1 } = this.props
    let Image_Http_URL = {
      uri: `https://project3.solutionsplayers.com/uploads/category/${userImage}`,
    }
    return (
      <Row
        onPress={() =>
          this.props.navigation.navigate("SearchByCategory", {
            category_name: title,
          })
        }
        key={i}
        style={{
          // width: width * 0.95,
          // backgroundColor: "red",
          alignSelf: "center",
          //   paddingBottom: height * 0.02,
        }}
      >
        <Col
          style={{
            // backgroundColor: "red",

            marginLeft: width * 0.01,
            alignItems: "center",
          }}
        >
          <Col
            style={{
              width: width * 0.24,
              height: height * 0.115,

              // backgroundColor: "yellow",
              alignItems: "center",
              borderRadius: 40,

              borderWidth: 2,
              borderColor: "#fff",
            }}
          >
            <Image
              style={{
                height: height * 0.1,
                width: width * 0.2,
                borderRadius: 40,
                borderColor: "#fff",
                borderWidth: 2,

                // marginTop: 3,
              }}
              source={userImage ? Image_Http_URL : gallery1}
            />
          </Col>
          <Col style={{ marginTop: -height * 0.01 }}>
            <Text
              style={{
                fontSize: height * 0.02,
                // fontWeight: "900",
                // marginTop: 3,
                fontFamily: "OpenSans",
                color: "#B98D34",
                // backgroundColor: "#F2DAED",
              }}
            >
              {title}
            </Text>
          </Col>
        </Col>
      </Row>
    )
  }
}

export default Discount
