import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './pages/home/index.jsx'
import introduce from './pages/introduce/index.jsx'
//引入navigationContainer
import { NavigationContainer } from '@react-navigation/native'
//引入stack
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function Root () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="introduce" component={introduce} />
    </Drawer.Navigator>
  )
}


export default function App () {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app</Text>
    //   <StatusBar style="auto" />
    //   <Block_0 />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="introduce" component={introduce} options={{ title: 'introduce' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
