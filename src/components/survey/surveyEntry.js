import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-ionicons';

import Colors from '~/styles/colors';

const SurveyEntry = (props) => {
  return (
    <TouchableOpacity onPress={props.routeToDetail}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

SurveyEntry.defaultProps = {
  title: 'No Title',
};

SurveyEntry.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: Colors.lighter,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default SurveyEntry;
