import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const WelcomeScreen = () => {
  useEffect(() => {
    // Initialize Firebase
    auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is authenticated:', user);
      } else {
        console.log('User is not authenticated');
      }
    });
  }, []);

  return (
    <View>
      <Text>Welcome to Your App</Text>
    </View>
  );
};

export default WelcomeScreen;
