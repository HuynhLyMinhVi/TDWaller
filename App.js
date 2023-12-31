import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {BottomNavigation} from './src/Navigation/tab';
// import {PrivacyScreenNavigator} from './src/Navigation/screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToastGlobal from './src/Components/Toast';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false,
                  }}>
                  {/*<Stack.Screen*/}
                  {/*    name="PrivacyNavigation"*/}
                  {/*    component={PrivacyScreenNavigator}*/}
                  {/*/>*/}
                  <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
              </Stack.Navigator>
          </NavigationContainer>
          <ToastGlobal />
      </SafeAreaProvider>
  );
}
