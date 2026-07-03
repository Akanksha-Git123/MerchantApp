import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      setUser(JSON.parse(data));
    } else {
      router.replace("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("merchantType");
    localStorage.removeItem("category");

    router.replace("/");
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => router.replace("/dashboard")}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#222"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          My Profile
        </Text>

        <View style={{ width: 28 }} />

      </View>

      {/* PROFILE */}

      <View style={styles.profileContainer}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.fullname
              ? user.fullname.charAt(0).toUpperCase()
              : "M"}
          </Text>
        </View>

        <Text style={styles.name}>
          {user?.fullname}
        </Text>

        <Text style={styles.email}>
          {user?.email}
        </Text>

      </View>

      {/* MENU */}

      <View style={styles.menuCard}>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.left}>
            <MaterialIcons
              name="business"
              size={22}
              color="#6C4CF1"
            />

            <Text style={styles.menuText}>
              Business Profile
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.left}>
            <Ionicons
              name="card-outline"
              size={22}
              color="#6C4CF1"
            />

            <Text style={styles.menuText}>
              Bank Accounts
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.left}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color="#6C4CF1"
            />

            <Text style={styles.menuText}>
              KYC Status
            </Text>
          </View>

          <View style={styles.right}>
            <Text style={styles.verified}>
              Verified
            </Text>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.left}>
            <Ionicons
              name="people-outline"
              size={22}
              color="#6C4CF1"
            />

            <Text style={styles.menuText}>
              Manage Users
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.left}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#6C4CF1"
            />

            <Text style={styles.menuText}>
              Security Settings
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.left}>
            <Ionicons
              name="settings-outline"
              size={22}
              color="#6C4CF1"
            />

            <Text style={styles.menuText}>
              App Settings
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#999"
          />
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

      </View>

      <View style={{ height: 40 }} />

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
    paddingHorizontal: 20,
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },

  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6C4CF1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },

  avatarText: {
    fontSize: 40,
    color: "#FFFFFF",
    fontWeight: "700",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },

  email: {
    fontSize: 15,
    color: "#777",
    marginTop: 6,
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    elevation: 3,
    overflow: "hidden",
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
  },

  verified: {
    color: "#22C55E",
    fontWeight: "700",
    marginRight: 8,
  },

  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 22,
    backgroundColor: "#FFF5F5",
  },

  logoutText: {
    marginLeft: 10,
    color: "#EF4444",
    fontWeight: "700",
    fontSize: 18,
  },
});