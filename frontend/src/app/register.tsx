import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import API from "../services/api";

export default function RegisterScreen() {
  const { merchantType, category } = useLocalSearchParams();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const registerMerchant = async () => {
    if (!fullname || !email || !password) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/register", {
        fullname,
        email,
        password,
        merchant_type: merchantType,
        category,
      });

      setLoading(false);

      Alert.alert("Success", response.data.message);

      router.push("/success");
    } catch (error) {
      setLoading(false);

      if (error.response) {
        Alert.alert("Error", error.response.data.message);
      } else {
        Alert.alert("Error", "Unable to connect to server");
      }
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.heading}>Create Account</Text>

      <Text style={styles.label}>Merchant Type</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {merchantType}
        </Text>
      </View>

      <Text style={styles.label}>Category</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          {category}
        </Text>
      </View>

      <Text style={styles.label}>Full Name</Text>

      <TextInput
        placeholder="Enter Full Name"
        style={styles.input}
        value={fullname}
        onChangeText={setFullname}
      />

      <Text style={styles.label}>Email</Text>

      <TextInput
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>

      <TextInput
        placeholder="Enter Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={registerMerchant}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            Register
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    padding: 20,
    paddingTop: 60,
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 30,
    color: "#222",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
  },

  infoBox: {
    backgroundColor: "#F5F2FF",
    borderColor: "#6C4CF1",
    borderWidth: 1,
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  infoText: {
    color: "#6C4CF1",
    fontWeight: "700",
    fontSize: 16,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 15,
    marginBottom: 18,
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

});