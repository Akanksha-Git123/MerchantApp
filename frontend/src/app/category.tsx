import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function CategoryScreen() {
  const [selected, setSelected] = useState("");

  // Receive Merchant Type from previous screen
  const { merchantType } = useLocalSearchParams();

  const categories = [
    "Retail",
    "Restaurant",
    "Healthcare",
    "Education",
    "Beauty",
    "Travel",
    "E-Commerce",
    "Other",
  ];

  const handleContinue = () => {
    if (!selected) {
      alert("Please select Category");
      return;
    }

    router.push({
      pathname: "/register",
      params: {
        merchantType,
        category: selected,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Select Business Category
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.card,
              selected === item && styles.selectedCard,
            ]}
            onPress={() => setSelected(item)}
          >
            <Text
              style={[
                styles.cardText,
                selected === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.button,
          !selected && { opacity: 0.5 },
        ]}
        disabled={!selected}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>
          Continue
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
    paddingTop: 60,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 25,
    color: "#222",
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  selectedCard: {
    backgroundColor: "#F2EEFF",
    borderColor: "#6C4CF1",
  },

  cardText: {
    fontSize: 18,
    color: "#333",
  },

  selectedText: {
    color: "#6C4CF1",
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#6C4CF1",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});