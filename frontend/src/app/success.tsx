import React from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SuccessScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.circle}>
        <Text style={styles.tick}>✓</Text>
      </View>

      <Text style={styles.title}>
        Registration Successful!
      </Text>

      <Text style={styles.subtitle}>
        Your merchant account has been created successfully.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.buttonText}>
          Go to Login
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#22C55E",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  tick: {
    fontSize: 60,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 15,
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 50,
  },

  button: {
    width: "100%",
    backgroundColor: "#6C4CF1",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

});