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
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { getSurveyDetailFromServer } from '~/server-api/surveyApi';
import Colors from '~/styles/colors';

export default function SurveyDetailScreen({ route, navigation }) {
  //const [title, setTitle] = useState(route.params.title);
  return (
    <SurveyDetail title={route.params.title} surveyId={route.params.surveyId} />
  );
}

class SurveyDetail extends React.Component {
  state = {
    title: 'No Title',
  };

  constructor(props) {
    super(props);
  }

  /* TODO: Hooks 적용해서 함수형 컴포넌트화 */
  componentDidMount() {
    getSurveyDetailFromServer(this.props.surveyId).then((detail) => {
      this.setState(detail);
    });
  }

  render() {
    console.log('SurveyDetail');
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>타이틀</Text>
          <Text>{this.state.title ?? this.props.title}</Text>
          <Text>목적</Text>
          <Text>{this.state.purpose ?? this.props.purpose}</Text>
          <Text>목적</Text>
          <Text>{this.state.purpose ?? this.props.purpose}</Text>
          <Text>목적</Text>
          <Text>{this.state.purpose ?? this.props.purpose}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

SurveyDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  footer: {},
});
