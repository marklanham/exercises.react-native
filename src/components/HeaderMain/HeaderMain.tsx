import React from 'react';
import { StyleProp, Text, View } from 'react-native';
import { styles } from './HeaderMain.styles';

interface IHeaderMain {
  headerTitle: (title: string) => JSX.Element;
}

export const HeaderMain: IHeaderMain = {
  headerTitle: (title: string) => <Text style={styles.title}>{title}</Text>
};