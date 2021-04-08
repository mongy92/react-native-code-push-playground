import React from 'react';
import {Button, ScrollView, StatusBar} from 'react-native';

import spaceQuestions from '../data/space';
import westernsQuestions from '../data/westerns';
import computerQuestions from '../data/computers';

import {RowItem} from '../components/RowItem';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import codePush from 'react-native-code-push';
import {codePushDeploymentKey} from '../..';

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }, [navigation]);
  return (
    <ScrollView>
      <Button
        title={'CHECK FOR UPDATE'}
        onPress={() => {
          codePush.sync({
            deploymentKey: codePushDeploymentKey,
            installMode: codePush.InstallMode.IMMEDIATE,
            updateDialog: true,
          });
        }}
      />
      <RowItem
        name="Space"
        color="#36b1f0"
        onPress={() =>
          navigation.navigate('Quiz', {
            title: 'Space',
            questions: spaceQuestions,
            color: '#36b1f0',
          })
        }
      />
      <RowItem
        name="Westerns"
        color="#799496"
        onPress={() =>
          navigation.navigate('Quiz', {
            title: 'Westerns',
            questions: westernsQuestions,
            color: '#799496',
          })
        }
      />
      <RowItem
        name="Computers"
        color="#49475B"
        onPress={() =>
          navigation.navigate('Quiz', {
            title: 'Computers',
            questions: computerQuestions,
            color: '#49475B',
          })
        }
      />
    </ScrollView>
  );
};
