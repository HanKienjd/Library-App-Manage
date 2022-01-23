import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootStackNavigation from 'src/navigators';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootStackNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
