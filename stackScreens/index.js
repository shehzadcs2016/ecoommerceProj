import React from "react"

import MyTabs from "../bottomNavigator/MyTabs"
import Home from "../screens/Home"
import Login from "../screens/Login"
import Register from "../screens/SignUp"
import Welcome from "../screens//Welcome"
import Cart from "../screens/Cart"
import Category from "../screens/Category"
import Checkout from "../screens/Checkout"
import Earnings from "../screens/Earnings"
import MyAccount from "../screens/MyAccount"
import SearchScreen from "../screens/FilterScreen"
import Settings from "../screens/Settings"
import Thanks from "../screens/Thanks"
import SingleProduct from "../screens/SingleProduct"
import Address from "../screens/Address"
import ForgotPassword from "../screens/ForgotPassword"
import ChangePassword from "../screens/ChangePassword"
import SearchByCategory from "../screens/SearchByCategory"

import { createStackNavigator } from "@react-navigation/stack"

export function HomeStackScreen() {
  const HomeStack = createStackNavigator()

  return (
    <HomeStack.Navigator headerMode={"none"}>
      <HomeStack.Screen name="MyTabs" component={MyTabs} />

      <HomeStack.Screen name="Login" component={Login} />

      <HomeStack.Screen name="Welcome" component={Welcome} />

      {/* <HomeStack.Screen name="Home" component={Home} /> */}

      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen name="SingleProduct" component={SingleProduct} />

      <HomeStack.Screen name="Thanks" component={Thanks} />

      <HomeStack.Screen name="Cart" component={Cart} />
      <HomeStack.Screen name="Category" component={Category} />
      <HomeStack.Screen name="Checkout" component={Checkout} />
      <HomeStack.Screen name="Earnings" component={Earnings} />
      <HomeStack.Screen name="Address" component={Address} />
      <HomeStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <HomeStack.Screen name="ChangePassword" component={ChangePassword} />
      <HomeStack.Screen name="SearchByCategory" component={SearchByCategory} />

      {/* <HomeStack.Screen name="MyAccount" component={MyAccount} />
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
      <HomeStack.Screen name="Settings" component={Settings} /> */}
    </HomeStack.Navigator>
  )
}
