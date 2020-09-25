/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import SurveyMainScreen from '~/screens/survey/surveyMain';
//import SurveyAddScreen from '~/screens/survey/surveyAdd';
import SurveyEditScreen from '~/screens/survey/surveyEdit';
import SurveyDetailScreen from '~/screens/survey/surveyDetail';
import ReservationMainScreen from '~/screens/reservationMain';

class SurveyStack extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SurveyList"
          component={SurveyMainScreen}
          options={{
            headerShown: false,
            /*
            headerRight: () => {
              return (
                <View style={styles.headerRight}>
                  <TouchableOpacity onPress={() => {}}>
                    <Icon name="add-circle-outline" size={15} color="grey" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginLeft: 5, backgroundColor: 'pink' }}>
                    <Text>Hi</Text>
                  </TouchableOpacity>
                </View>
              );
            },
            */
          }}
        />
        <Stack.Screen
          name="SurveyEdit"
          component={SurveyEditScreen}
          options={({ route }) => ({ title: route.params?.title ?? '새 설문' })}
        />
        <Stack.Screen
          name="SurveyDetail"
          component={SurveyDetailScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    );
  }
}

class ReservationStack extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Reservation"
          component={ReservationMainScreen}
          options={{
            headerRight: () => {
              return <TouchableOpacity onPress={() => {}}></TouchableOpacity>;
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default class App extends React.Component {
  render() {
    console.log('App');
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Survey') {
                  iconName = 'list';
                } else if (route.name === 'Reservation') {
                  iconName = 'settings';
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}>
            <Tab.Screen name="Survey" component={SurveyStack} />
            <Tab.Screen name="Reservation" component={ReservationMainScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    margin: 10,
  },
});
