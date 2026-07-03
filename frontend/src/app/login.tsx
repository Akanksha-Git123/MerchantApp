import React, { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";

import API from "../services/api";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Validation", "Please enter Email and Password");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      });

      console.log("Login Response:", response.data);

      // Save token
      if (Platform.OS === "web") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      } else {
        await AsyncStorage.setItem(
          "token",
          response.data.token
        );

        await AsyncStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      setLoading(false);

      Alert.alert("Success", "Login Successful");

      router.replace("/dashboard");
    } catch (error) {
      setLoading(false);

      console.log("Login Error:", error);

      if (error.response) {
        Alert.alert(
          "Login Failed",
          error.response.data.message
        );
      } else if (error.request) {
        Alert.alert(
          "Network Error",
          "Unable to connect to server."
        );
      } else {
        Alert.alert(
          "Error",
          error.message
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Merchant Login
      </Text>

      <Text style={styles.subHeading}>
        Login to your account
      </Text>

      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>
        Password
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            Login
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace("/register")}
      >
        <Text style={styles.registerText}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    padding: 20,
    paddingTop: 70,
  },

  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#222",
  },

  subHeading: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
    marginBottom: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#6C4CF1",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  registerText: {
    marginTop: 30,
    textAlign: "center",
    color: "#6C4CF1",
    fontSize: 16,
    fontWeight: "600",
  },
});