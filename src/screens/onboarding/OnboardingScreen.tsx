import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          activeOpacity={0.7}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Simple Illustration Placeholder */}
        <View style={styles.imageWrapper}>
          <View style={styles.circle}>
            <Text style={styles.logo}>∞</Text>
          </View>

          <View style={styles.smallCircle}>
            <Text style={styles.smallText}>Ideas</Text>
          </View>

          <View style={styles.smallCircleTwo}>
            <Text style={styles.smallText}>Code</Text>
          </View>
        </View>

        {/* 🟢 Refined Continuous Heading (Exact layout match) */}
        <Text style={styles.title}>
          Bridge the Gap{'\n'}Between <Text style={styles.titleHighlight}>Ideas & Code</Text>
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          OmniBridge Sync helps developers and clients
          communicate better, understand requirements
          clearly, and visualize ideas — all in one platform.
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('SignUp')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Get Started {' →'}
          </Text>
        </TouchableOpacity>

        {/* 🟢 Temporarily safely mapped to SignUp until Login screen is ready */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('SignUp')}
          activeOpacity={0.7}
        >
          <Text style={styles.loginText}>
            I already have an account
          </Text>
        </TouchableOpacity>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          <View style={styles.activeDot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  topHeader: {
    alignItems: 'flex-end',
    padding: 24,
  },
  skipText: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: '500',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  imageWrapper: {
    height: 220,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#D1FAE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 90,
    color: '#059669',
  },
  smallCircle: {
    position: 'absolute',
    top: 25,
    left: 10,
    backgroundColor: '#DBEAFE',
    padding: 12,
    borderRadius: 20,
  },
  smallCircleTwo: {
    position: 'absolute',
    bottom: 25,
    right: 10,
    backgroundColor: '#D1FAE5',
    padding: 12,
    borderRadius: 20,
  },
  smallText: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 16,
  },
  titleHighlight: {
    color: '#059669', // Emerald Green color
  },
  description: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 25,
    alignItems: 'center',
  },
  primaryButton: {
    width: '100%',
    height: 55,
    borderRadius: 28,
    backgroundColor: '#031E33',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  secondaryButton: {
    marginBottom: 28,
  },
  loginText: {
    fontSize: 15,
    color: '#334155',
    fontWeight: '500',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CBD5E1',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 10, // Image ke mutabiq circle matching active dot
    height: 10,
    borderRadius: 5,
    backgroundColor: '#059669',
    marginHorizontal: 4,
  },
});

export default OnboardingScreen;
