import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      let data = null;

      if (Platform.OS === "web") {
        data = localStorage.getItem("user");
      } else {
        data = await AsyncStorage.getItem("user");
      }

      if (data) {
        setUser(JSON.parse(data));
      } else {
        router.replace("/login");
      }
    } catch (error) {
      console.log(error);
      router.replace("/login");
    }
  };

  const logout = async () => {
    try {
      if (Platform.OS === "web") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("merchantType");
        localStorage.removeItem("category");
      } else {
        await AsyncStorage.multiRemove([
          "token",
          "user",
          "merchantType",
          "category",
        ]);
      }

      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#222"
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Profile
        </Text>

        <View style={{ width: 30 }} />

      </View>

      {/* Profile */}

      <View style={styles.profileContainer}>

        <View style={styles.avatar}>

          <Text style={styles.avatarText}>
            {user?.fullname
              ? user.fullname.charAt(0).toUpperCase()
              : "M"}
          </Text>

        </View>

        <Text style={styles.name}>
          {user?.fullname || "Merchant"}
        </Text>

        <Text style={styles.email}>
          {user?.email}
        </Text>

      </View>

      {/* Menu */}

      <View style={styles.card}>

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

      </View>

      {/* Logout */}

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
    backgroundColor: "#F7F8FC",
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
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#6C4CF1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 6,
  },

  avatarText: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "700",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginBottom: 5,
  },

  email: {
    fontSize: 15,
    color: "#777",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 4,
    marginBottom: 25,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
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
    fontSize: 14,
  },

  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF0F0",
    paddingVertical: 18,
    borderRadius: 18,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#FFD5D5",
  },

  logoutText: {
    marginLeft: 10,
    color: "#EF4444",
    fontSize: 18,
    fontWeight: "700",
  },
});