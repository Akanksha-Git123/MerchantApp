import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      setUser(JSON.parse(data));
    } else {
      router.replace("/login");
    }
  }, []);

  const logout = () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("merchantType");
    localStorage.removeItem("category");

    console.log("Logged out successfully");

    router.replace("/login");
  } catch (error) {
    console.log(error);
  }
};

  const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 🌤️";
    return "Good Evening 🌙";
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}

      <View style={styles.header}>

        <View>
          <Text style={styles.greeting}>
            {greeting()}
          </Text>

          <Text style={styles.name}>
            {user?.fullname} 👋
          </Text>
        </View>

        <TouchableOpacity
          style={styles.notification}
          onPress={() =>
            Alert.alert("Notifications", "No new notifications")
          }
        >
          <Ionicons
            name="notifications-outline"
            size={26}
            color="#6C4CF1"
          />
        </TouchableOpacity>

      </View>

      {/* BALANCE CARD */}

      <View style={styles.balanceCard}>

        <Text style={styles.balanceLabel}>
          Current Balance
        </Text>

        <Text style={styles.balance}>
          ₹ 8,45,750.00
        </Text>

        <Text style={styles.balanceTime}>
          Updated Just Now
        </Text>

      </View>

      {/* QUICK ACTIONS */}

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <View style={styles.grid}>

        <TouchableOpacity style={styles.gridItem}>
          <Ionicons
            name="card-outline"
            size={30}
            color="#6C4CF1"
          />
          <Text style={styles.gridText}>
            Payments
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Ionicons
            name="wallet-outline"
            size={30}
            color="#6C4CF1"
          />
          <Text style={styles.gridText}>
            Settlement
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Ionicons
            name="refresh-outline"
            size={30}
            color="#6C4CF1"
          />
          <Text style={styles.gridText}>
            Refunds
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gridItem}>
          <Ionicons
            name="bar-chart-outline"
            size={30}
            color="#6C4CF1"
          />
          <Text style={styles.gridText}>
            Reports
          </Text>
        </TouchableOpacity>

      </View>

      {/* TODAY SUMMARY */}

      <Text style={styles.sectionTitle}>
        Today's Summary
      </Text>

      <View style={styles.summaryCard}>

        <View style={styles.row}>
          <Text>Total Transactions</Text>
          <Text style={styles.bold}>₹2,45,300</Text>
        </View>

        <View style={styles.row}>
          <Text>Successful</Text>
          <Text style={styles.green}>₹2,30,100</Text>
        </View>

        <View style={styles.row}>
          <Text>Refunds</Text>
          <Text style={styles.red}>₹25,200</Text>
        </View>
                <TouchableOpacity
          style={styles.insightButton}
        >
          <Text style={styles.insightText}>
            View All Insights →
          </Text>
        </TouchableOpacity>

      </View>

      {/* MERCHANT DETAILS */}

      <Text style={styles.sectionTitle}>
        Merchant Information
      </Text>

      <View style={styles.profileCard}>

        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>
            Merchant Name
          </Text>

          <Text style={styles.profileValue}>
            {user?.fullname}
          </Text>
        </View>

        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>
            Email
          </Text>

          <Text style={styles.profileValue}>
            {user?.email}
          </Text>
        </View>

        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>
            Merchant Type
          </Text>

          <Text style={styles.profileValue}>
            {user?.merchant_type}
          </Text>
        </View>

        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>
            Category
          </Text>

          <Text style={styles.profileValue}>
            {user?.category}
          </Text>
        </View>

      </View>

      {/* BUTTONS */}

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => router.push("/profile")}
      >
        <Ionicons
          name="person-circle-outline"
          size={22}
          color="#fff"
        />

        <Text style={styles.profileButtonText}>
          View Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.logoutButton}
  onPress={logout}
>
  <Ionicons
    name="log-out-outline"
    size={22}
    color="#EF4444"
  />

  <Text style={styles.logoutText}>
    Logout
  </Text>
</TouchableOpacity>

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  greeting: {
    fontSize: 18,
    color: "#777",
  },

  name: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginTop: 5,
  },

  notification: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  balanceCard: {
    backgroundColor: "#6C4CF1",
    borderRadius: 22,
    padding: 22,
    marginBottom: 25,
  },

  balanceLabel: {
    color: "#EDE9FF",
    fontSize: 15,
  },

  balance: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "700",
    marginVertical: 12,
  },

  balanceTime: {
    color: "#EDE9FF",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 15,
    marginTop: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  gridItem: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 15,
    elevation: 2,
  },

  gridText: {
    marginTop: 12,
    fontWeight: "600",
    color: "#444",
  },

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  bold: {
    fontWeight: "700",
    color: "#222",
  },

  green: {
    color: "#16A34A",
    fontWeight: "700",
  },

  red: {
    color: "#DC2626",
    fontWeight: "700",
  },

  insightButton: {
    marginTop: 10,
  },

  insightText: {
    color: "#6C4CF1",
    fontWeight: "700",
    fontSize: 16,
  },

  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginTop: 5,
    elevation: 2,
  },

  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  profileLabel: {
    color: "#666",
    fontSize: 15,
  },

  profileValue: {
    fontWeight: "700",
    color: "#222",
  },

  profileButton: {
    marginTop: 25,
    backgroundColor: "#6C4CF1",
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  profileButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 10,
  },

  logoutButton: {
    marginTop: 15,
    backgroundColor: "#EF4444",
    padding: 18,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 10,
  },

});