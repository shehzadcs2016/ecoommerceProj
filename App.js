import React from "react"
import { AppLoading } from "expo"
import * as Font from "expo-font"
// import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import { NavigationContainer } from "@react-navigation/native"
import MyDrawer from "./MyDrawer/myDrawer"
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Montserrat: require("./assets/fonts/Montserrat-Medium.ttf"),
      MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),

      OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
      SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
      OpensansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "OpenSans-Regular": {
        uri: require("./assets/fonts/OpenSans-Regular.ttf"),
      },
      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      "Montserrat-Medium": {
        uri: require("./assets/fonts/Montserrat-Medium.ttf"),
      },
    })

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>

      // <View style={styles.container}>
      //   <View style={styles.container}></View>
      //   <SignUp />
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
})
