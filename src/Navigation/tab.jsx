import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from "react-native";

import { HomeScreenNavigator } from "./screen";
import styles from "./styles";
import { ExternalShadow, InternalShadow } from "../Components/BoxShadow";
import { trendyColor, height, width } from "../assets/styles/common.js";
import images from "../assets/images";
const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(230, 231, 238, 0.8)",
          height: height(12),
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ExternalShadow
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                padding={0}
              >
                <View style={styles.wrap}>
                  <Image
                    source={images.iconHome}
                    style={styles.contentImages}
                  />
                </View>
              </ExternalShadow>
            ) : (
              <ExternalShadow>
                <View style={styles.wrap}>
                  <Image source={images.iconHome} style={styles.contentImage} />
                </View>
              </ExternalShadow>
            ),
        }}
        name="Home"
        component={HomeScreenNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <ExternalShadow
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
                padding={0}
              >
                <View style={styles.wrap}>
                  <Image
                    source={images.iconCompass}
                    style={styles.contentImages}
                  />
                </View>
              </ExternalShadow>
            ) : (
              <ExternalShadow>
                <View style={styles.wrap}>
                  <Image
                    source={images.iconCompass}
                    style={styles.contentImage}
                  />
                </View>
              </ExternalShadow>
            ),
        }}
        name="s"
        component={HomeScreenNavigator}
      />
    </Tab.Navigator>
  );
}
