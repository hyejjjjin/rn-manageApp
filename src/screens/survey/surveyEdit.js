/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

import SurveyQuestion from '~/components/survey/surveyQuestion';
import Colors from '~/styles/colors';

export default SurveyEditScreen =()=> {
  const [info, setInfo] =useState( {
      questions: [],
      startDate: new Date(),
      endDate: new Date(),
      selectStartDate: false,
      selectEndDate: false,
    });
  

  const addNewQuestion = () => {
    this.setState({
      questions: [
        ...this.state.questions,
        {
          type: 'subjective',
          question: '=',
          answers: [{ type: 'normal', text: '' }],
        },
      ],
    });
  }

  render() {
    console.log('SurveyEdit');
    console.log(this.state.startDate);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ padding: 5 }}>
          <ScrollView>
            <Text style={styles.text}>타이틀</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.text}>목적</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.text}>설문 기간</Text>
            <View style={styles.period}>
              <TouchableOpacity
                style={styles.input}
                onPress={() => {
                  this.setState({
                    selectStartDate: !this.state.selectStartDate,
                  });
                }}>
                <Text>{this.state.startDate.toDateString()}</Text>
              </TouchableOpacity>
              <Text style={styles.periodSeperator}>~</Text>
              <TouchableOpacity
                style={styles.input}
                onPress={() => {
                  console.log('onPress Text');
                  this.setState({
                    selectStartDate: false,
                    selectEndDate: !this.state.selectEndDate,
                  });
                }}>
                <Text>{this.state.endDate.toDateString()}</Text>
              </TouchableOpacity>
            </View>
            {this.state.selectStartDate && (
              <DateTimePicker
                is24Hour={true}
                value={this.state.startDate}
                onChange={(event, selectedDate) => {
                  if (Platform.OS === 'android') {
                    this.setState({
                      selectStartDate: !this.state.selectStartDate,
                      selectEndDate: false,
                    });
                  }
                  if (selectedDate) {
                    if (selectedDate > this.state.endDate) {
                      alert('시작 날짜가 종료 날짜보다 늦을 수 없습니다.');
                      this.setState({ endDate: selectedDate });
                    }
                    this.setState({ startDate: selectedDate });
                  }
                }}
              />
            )}
            {this.state.selectEndDate && (
              <DateTimePicker
                is24Hour={true}
                value={this.state.endDate}
                onChange={(event, selectedDate) => {
                  if (Platform.OS === 'android') {
                    console.log('android');
                    this.setState({
                      selectEndDate: !this.state.selectEndDate,
                    });
                  }
                  if (selectedDate) {
                    if (selectedDate < this.state.startDate) {
                      alert('종료 날짜가 시작 날짜보다 앞설 수 없습니다.');
                      this.setState({ startDate: selectedDate });
                    }
                    this.setState({ endDate: selectedDate });
                  }
                }}
              />
            )}
            <Text style={styles.text}>결과 공개 범위</Text>
            <TextInput style={styles.input}></TextInput>

            <FlatList
              data={this.state.questions}
              renderItem={({ index, item }) => (
                <>
                  <View style={styles.seperater}>
                    <Text>Q.{index + 1}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          questions: this.state.questions.splice(index, 1),
                        })
                      }
                      style={{ marginLeft: 'auto' }}>
                      <Text>X</Text>
                    </TouchableOpacity>
                  </View>
                  <SurveyQuestion id={index} item={item} />
                </>
              )}></FlatList>
            <Button
              title="질문 추가하기"
              color="#f194ff"
              onPress={() => this.addNewQuestion()}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  footer: {},
  seperater: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    backgroundColor: '#75739C',
  },
  text: { marginVertical: 2 },
  input: {
    alignItems: 'center',
    flex: 1,
    height: 40,
    justifyContent: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 3,
    marginBottom: 20,
  },
  period: {
    flexDirection: 'row',
    width: '100%',
  },
  periodSeperator: {
    height: 40,
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginTop: 3,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
