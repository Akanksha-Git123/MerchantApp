import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";

import API from "../services/api";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation", "Please enter Email and Password");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email,
        password,
      });

      setLoading(false);

      // Save logged-in user for browser
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      Alert.alert("Success", response.data.message);

      router.replace("/dashboard");
    } catch (error) {
      setLoading(false);

      if (error.response) {
        Alert.alert("Login Failed", error.response.data.message);
      } else {
        Alert.alert(
          "Error",
          "Unable to connect to server"
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