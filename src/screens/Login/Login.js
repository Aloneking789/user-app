


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';

export const Login = () => {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOtp, setIsOtp] = useState(false);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   expoClientId: 'YOUR_EXPO_CLIENT_ID',
  //   iosClientId: 'YOUR_IOS_CLIENT_ID',
  //   androidClientId: 'YOUR_ANDROID_CLIENT_ID',
  // });

  const handleGetCode = () => {
    console.log('Get Verification Code for:', mobile);
  };

  const handleLogin = () => {
    console.log('Login with:', email, password);
  };

  const handleRegister = () => {
    console.log('Register with:', name, mobile, email, password);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await promptAsync();
      if (result?.type === 'success') {
        console.log('Google login successful:', result);
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  // Function to reset all states except the selected one
  const resetStates = (selectedState) => {
    setIsLogin(selectedState === 'login');
    setIsRegister(selectedState === 'register');
    setIsForgotPassword(selectedState === 'forgotPassword');
    setIsOtp(selectedState === 'otp');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../../assets/Charity.png')} style={styles.illustration} />
      <Text style={styles.title}>Ineed Buddy</Text>
      <Text style={styles.subtitle}>Fastest Home Service</Text>
      <Text style={styles.tagline}>Quick - Affordable - Trusted</Text>

      {isLogin && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={() => resetStates('forgotPassword')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => resetStates('register')}>
            <Text style={styles.linkText}>New User? Register Here</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => resetStates('otp')}>
            <Text style={styles.linkText}>Login with OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {isRegister && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => resetStates('login')}>
            <Text style={styles.linkText}>Already have an account? Login Here</Text>
          </TouchableOpacity>
        </>
      )}

      {isForgotPassword && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={() => console.log('Reset Password')}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => resetStates('login')}>
            <Text style={styles.linkText}>Back to Login</Text>
          </TouchableOpacity>
        </>
      )}

      {isOtp && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
          />
          <TouchableOpacity style={styles.button} onPress={handleGetCode}>
            <Text style={styles.buttonText}>Get Verification Code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => resetStates('login')}>
            <Text style={styles.linkText}>Back to Login</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Ionicons name="logo-google" size={24} color="white" />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007bff',
    marginBottom: 15,
  },
  orText: {
    marginVertical: 15,
    color: '#666',
  },
  googleButton: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

// export default LoginScreen;