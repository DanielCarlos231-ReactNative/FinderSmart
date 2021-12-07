//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import CalculoFii from './Screens/CalculoFii';

//  setTestDeviceIDAsync('EMULATOR');

export default function() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <CalculoFii />
      <AdMobBanner
        bannerSize="smartBannerPortrait"
        adUnitID="ca-app-pub-3565204663695646/5246645212" // Test ID, Replace with your-admob-unit-id
        setTestDeviceIDAsync
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(err) => console.log(err)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
