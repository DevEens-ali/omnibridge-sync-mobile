import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native'; // CommonActions import kiya

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 🟢 CORRECT WAY: Yeh app ki history ko clear karke Onboarding par le jayega taake user back na sake
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Onboarding' }],
        })
      );
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Simple Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>∞</Text>
        </View>

        {/* App Name */}
        <Text style={styles.title}>
          OmniBridge <Text style={styles.highlight}>Sync</Text>
        </Text>

        {/* Tagline */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Better Conversations</Text>
          <Text style={styles.subtitle}>Smarter Requirements</Text>
          <Text style={styles.subtitle}>Faster Development</Text>
        </View>
      </View>

      {/* Simple Decorative Waves */}
      <View style={styles.waveContainer}>
        <View style={styles.waveOne} />
        <View style={styles.waveTwo} />
      </View>

      {/* Loading Text */}
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041719',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  logoContainer: {
    width: 110,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  logo: {
    fontSize: 95,
    color: '#00FFB3',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 35,
  },
  highlight: {
    color: '#00FFB3',
    fontWeight: 'normal',
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A3B8CC',
    marginBottom: 10,
  },
  waveContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  waveOne: {
    width: '100%',
    height: 2,
    backgroundColor: '#008F85',
    marginBottom: 12,
  },
  waveTwo: {
    width: '75%',
    height: 2,
    backgroundColor: '#087BA5',
  },
  loadingText: {
    color: '#00FFB3',
    fontSize: 14,
  },
});

export default SplashScreen;
