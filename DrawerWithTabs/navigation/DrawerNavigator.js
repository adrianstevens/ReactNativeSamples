import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";

import Community1 from "../screens/Community1";
import Community2 from "../screens/Community2";

import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Community1" component={Community1} />
      <Drawer.Screen name="Community2" component={Community2} />  
      <Drawer.Screen name="Home" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;