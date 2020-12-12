import React, { useState } from "react"
import { Row, Grid, Col } from "react-native-easy-grid"
import { Slider } from "react-native-elements"
import { Animated } from "react-native"
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native"
import Icon from "react-native-vector-icons/Feather"

export default function SliderComp() {
  const [value, setValue] = useState(1)
  const handleChange = (value) => {
    setValue(value)
  }
  return (
    <Slider
      value={value}
      maximumTrackTintColor={"#fff"}
      allowTouchTrack={true}
      thumbTintColor={"#fff"}
      thumbStyle={{ height: 10, width: 10 }}
      minimumTrackTintColor={"#fff"}
      onValueChange={handleChange}
    />
  )
}
