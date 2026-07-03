import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>

        <View style={styles.logo}>
          <Text style={styles.logoText}>M</Text>
        </View>

        <Text style={styles.title}>
          Merchant App
        </Text>

        <Text style={styles.subtitle}>
          Accept Payments{"\n"}
          Grow your business with secure digital payments.
        </Text>

      </View>

      <View style={styles.bottomContainer}>

        {/* Get Started Button */}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/merchant-type")}
        >
          <Text style={styles.primaryButtonText}>
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Login Button */}

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.secondaryButtonText}>
            Already Registered? Login
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Secure • Fast • Reliable
        </Text>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 50,
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#6C4CF1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 54,
    fontWeight: "bold",
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    marginTop: 18,
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    lineHeight: 28,
    paddingHorizontal: 10,
  },

  bottomContainer: {
    marginBottom: 20,
  },

  primaryButton: {
    backgroundColor: "#6C4CF1",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  secondaryButton: {
    marginTop: 15,
    borderWidth: 2,
    borderColor: "#6C4CF1",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  secondaryButtonText: {
    color: "#6C4CF1",
    fontSize: 17,
    fontWeight: "700",
  },

  footer: {
    marginTop: 20,
    textAlign: "center",
    color: "#999",
    fontSize: 14,
  },

});