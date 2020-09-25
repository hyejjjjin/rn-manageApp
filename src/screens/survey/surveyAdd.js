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
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import SurveyQuestion from '~/components/survey/surveyQuestion';
import Colors from '~/styles/colors';

export default SurveyAddScreen = (props) => {
  const [questions, setQuestion] = useState([]);
  const addNewQuestion = () => {
    setQuestion([
      ...questions,
      {
        type: 'subjective',
        question: '=',
        answers: [{ type: 'normal', text: '' }],
      },
    ]);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ padding: 5 }}>
        <ScrollView>
          <Text style={styles.text}>타이틀</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.text}>목적</Text>
          <TextInput style={styles.textInput}></TextInput>
          <FlatList
            data={questions}
            renderItem={({ index, item }) => (
              <>
                <View style={styles.seperater}>
                  <Text>Q.{index + 1}</Text>
                  <TouchableOpacity
                    onPress={() => setQuestion(questions.splice(index, 1))}
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
            onPress={() => addNewQuestion}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
  textInput: { backgroundColor: 'white', marginVertical: 3 },
});
