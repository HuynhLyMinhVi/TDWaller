import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';

import {
  HomeScreenNavigator,
} from './screen';
import styles from './styles';
import {ExternalShadow, InternalShadow} from '../Components/BoxShadow';
import {trendyColor, height, width} from '../assets/styles/common.js';
import {iconHome} from '../assets/images';
const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(230, 231, 238, 0.9)',
          height: height(9),
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <ExternalShadow
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                padding={0}>
                <InternalShadow style={styles.innnerShadow}>
                  <Image source={iconHome} style={styles.contentImage} />
                </InternalShadow>
              </ExternalShadow>
            ) : (
              <ExternalShadow>
                <View style={styles.wrap}>
                    <Image source={iconHome} style={styles.contentImage} />
                </View>
              </ExternalShadow>
            ),
        }}
        name="Home"
        component={HomeScreenNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <ExternalShadow
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                padding={0}>
                <InternalShadow style={styles.innnerShadow}>
                    <Image source={iconHome} style={styles.contentImage} />
                </InternalShadow>
              </ExternalShadow>
            ) : (
              <ExternalShadow>
                <View style={styles.wrap}>
                    <Image source={iconHome} style={styles.contentImage} />
                </View>
              </ExternalShadow>
            ),
        }}
        name="WalletDetail"
        component={HomeScreenNavigator}
      />
    </Tab.Navigator>
  );
}
