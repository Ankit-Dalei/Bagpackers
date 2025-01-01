import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed with:', email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://cdn.prod.website-files.com/63c69048f4f6d54bbb4da610/64745d3996040b5fe4e8f22f_Freelance%20Graphic%20Designer%20Business%20Plan%20Example-p-1080.png' }} // Replace with your logo URL
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to BagPackers</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="abc@gmail.com"
          keyboardType="email-address" // Optimized for email input
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none" // Prevents capitalization
        />
        <Text style={styles.inputIcon}>✉️</Text>
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.inputIcon}>🔒</Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}><Link href='/(pages)/home'>Login</Link></Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <Text style={styles.forgotPassword}>I forgot my password!</Text>

      {/* Footer */}
      <Text style={styles.footer}>
       Create Your First Account?{' '}
        <Text style={styles.link} onPress={() => console.log('Sign up clicked')}>
          Click Here
        </Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  inputIcon: {
    fontSize: 18,
    color: '#888',
  },
  loginButton: {
    backgroundColor: '#8b4fe4',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 80,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#888',
    marginBottom: 40,
    textDecorationLine: 'underline',
  },
  footer: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
  },
  link: {
    color: '#8b4fe4',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
