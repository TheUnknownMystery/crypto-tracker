import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomeScreen';
import AssetsScreen from '../screens/AssetsScreen';

const NativeStackNavigator = createNativeStackNavigator();

const StackNavigator = () => (
  <NativeStackNavigator.Navigator>
    <NativeStackNavigator.Screen
      name="HomeScreen"
      component={HomePage}
      options={{ headerShown: false }}
    />
    <NativeStackNavigator.Screen
      name="AssetsScreen"
      component={AssetsScreen}
      options={{
        headerTitle: 'My Assets',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
        },
        headerShadowVisible: false,
        headerBackTitleStyle: {
          backgroundColor: '#fff',
        },
        headerStyle: {
          backgroundColor: '#121212',
        },
      }}
    />
  </NativeStackNavigator.Navigator>
);

export default StackNavigator;
