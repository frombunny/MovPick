// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Test from './pages/TestingPage';
import RecommendMain from './pages/RecommendMain';
import EmotionRecommendMain from './pages/EmotionRecommendMain';
import SituationRecommendMain from './pages/SituationRecommendMain';
import SituationSelectPage from './pages/SituationSelectPage';
import Login from './pages/Login'
import Main from './pages/Main';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="RecommendMain" component={RecommendMain} />
          <Stack.Screen name="EmotionRecommendMain" component={EmotionRecommendMain} />
          <Stack.Screen name="SituationRecommendMain" component={SituationRecommendMain}/>
          <Stack.Screen name="SituationSelectPage" component={SituationSelectPage} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
