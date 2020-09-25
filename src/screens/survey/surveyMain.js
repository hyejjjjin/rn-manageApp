/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-ionicons';

import Colors from '~/styles/colors';
import { getSurveyListFromServer } from '~/server-api/surveyApi';
import SurveyEntry from '~/components/survey/surveyEntry';

export default class SurveyMainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      surveyList: [],
      loadingExtraData: false,
    };
  }
  componentDidMount() {
    this.getSurveyList();
  }
  async getSurveyList(page, results) {
    const surveyList = await getSurveyListFromServer();
    this.setState({ surveyList });
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.searchBox}>
              <TextInput
                multiline={false}
                placeholder="검색어를 입력해주세요"
                onChangeText={(text) => {
                  console.log(text);
                }}></TextInput>
              <Icon name="search" size={30}></Icon>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SurveyEdit');
              }}>
              <Text style={styles.addButton}>추가하기</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            renderItem={({ item }) => (
              <SurveyEntry
                title={item.title}
                routeToDetail={() => {
                  this.props.navigation.navigate('SurveyDetail', {
                    surveyId: item.id,
                    title: item.title,
                  });
                }}
              />
            )}
            data={this.state.surveyList}
            style={styles.flatList}></FlatList>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: 'lightgrey',
  },
  header: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footer: {
    width: '100%',
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    lineHeight: 20,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'skyblue',
    marginLeft: 10,
  },
});
