import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const Fonts = {
    normalTextSize: deviceWidth < 380 ? 28 : 36,
}
export default Fonts;
