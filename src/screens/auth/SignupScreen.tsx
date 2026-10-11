import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('developer');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    Alert.alert(
      'Sign Up',
      'Your form is ready! Backend registration is not connected yet.'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>∞</Text>
          <Text style={styles.logoText}>
            OmniBridge <Text style={styles.logoHighlight}>Sync</Text>
          </Text>
        </View>

        {/* Heading */}
        <View style={styles.header}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Start your journey with OmniBridge Sync.
          </Text>
        </View>

        {/* Full Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#4A5568"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#4A5568"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Create a password"
              placeholderTextColor="#4A5568"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.showPasswordText}>
                {showPassword ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Role Selection */}
        <Text style={styles.roleTitle}>I am a:</Text>
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              role === 'developer' && styles.activeRole,
            ]}
            onPress={() => setRole('developer')}
          >
            <Text
              style={[
                styles.roleText,
                role === 'developer' && styles.activeRoleText,
              ]}
            >
              Developer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              role === 'client' && styles.activeRole,
            ]}
            onPress={() => setRole('client')}
          >
            <Text
              style={[
                styles.roleText,
                role === 'client' && styles.activeRoleText,
              ]}
            >
              Client
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button (Updated text to match image layout) */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
          activeOpacity={0.8}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          {/* 🟢 navigation.goBack() safe option hai agar stack check na ho */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020B11',
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 35,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 65,
    color: '#00F5C4',
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logoHighlight: {
    color: '#A0AEC0',
    fontWeight: 'normal',
  },
  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 9,
  },
  input: {
    height: 52,
    backgroundColor: '#091A24',
    borderWidth: 1,
    borderColor: '#102A3A',
    borderRadius: 12,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#091A24',
    borderWidth: 1,
    borderColor: '#102A3A',
    borderRadius: 12,
    paddingRight: 14,
  },
  passwordInput: {
    flex: 1,
    height: 52,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    fontSize: 15,
  },
  showPasswordText: {
    color: '#00F5C4',
    fontWeight: '600',
  },
  roleTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 12,
  },
  roleContainer: {
    flexDirection: 'row',
    backgroundColor: '#091A24',
    borderWidth: 1,
    borderColor: '#102A3A',
    borderRadius: 12,
    padding: 4,
    marginBottom: 25,
  },
  roleButton: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  activeRole: {
    backgroundColor: '#0C2E3A',
    borderWidth: 1,
    borderColor: '#00F5C4',
  },
  roleText: {
    color: '#718096',
    fontSize: 14,
    fontWeight: '600',
  },
  activeRoleText: {
    color: '#FFFFFF',
  },
  signUpButton: {
    height: 54,
    backgroundColor: '#00F5C4',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  signUpButtonText: {
    color: '#020B11',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  footerText: {
    color: '#718096',
    fontSize: 14,
  },
  loginText: {
    color: '#00F5C4',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
