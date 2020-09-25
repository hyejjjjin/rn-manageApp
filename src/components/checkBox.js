import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-ionicons';

import Colors from '~/styles/colors';

const CheckBox = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>질문을 입력해주세요.</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.text}>설문 종류를 선택해주세요.</Text>
      <RNPickerSelect
        //onValueChange={(value) => this.setState({ surveyType: value })}
        items={[
          { label: 'Subjective', value: 'subjective' },
          { label: 'Objective', value: 'objective' },
        ]}
        style={styles.picker}
      />
      {props.surveyType == 'subjective' ? (
        <>
          <Text style={styles.text}>답변 종류를 선택해주세요.</Text>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Normal', value: 'normal' },
              { label: 'Etc', value: 'etc' },
              { label: 'Essential', value: 'essential' },
            ]}
          />
        </>
      ) : (
        <TextInput
          placeholder="답변을 입력해주세요."
          style={styles.textInput}></TextInput>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  seperater: { flexDirection: 'row', padding: 5, backgroundColor: '#75739C' },
  container: {
    paddingVertical: 10,
    backgroundColor: Colors.lighter,
  },
  text: { marginVertical: 2 },
  textInput: { backgroundColor: 'white', marginVertical: 3 },
  picker: {},
});

export default CheckBox;
