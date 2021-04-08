import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import codePush from 'react-native-code-push';
import {codePushDeploymentKey} from '../..';
const Updating = () => {
  const [statusText, setstatusText] = useState('Checking for updates');
  const navigation = useNavigation();
  useEffect(() => {
    codePushUpdate();
  }, []);
  const codePushUpdate = () => {
    codePush.sync(
      {
        deploymentKey: codePushDeploymentKey,
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      status => {
        let text = 'Checking for updates';
        let completed = false;
        switch (status) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
          case codePush.SyncStatus.AWAITING_USER_ACTION:
            break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            text = 'Downloading..';
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            text = 'Installing..';
            break;

          default:
            completed = true;
            break;
        }
        if (completed) {
          navigation.goBack();
        } else {
          setstatusText(text);
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
      <Text>{statusText}</Text>
    </View>
  );
};

export default Updating;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
