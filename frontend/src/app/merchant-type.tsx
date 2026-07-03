import React, { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function MerchantTypeScreen() {
  const [selected, setSelected] = useState("");

  const merchantTypes = [
    {
      title: "Individual",
      subtitle: "Freelancer / Sole Proprietor",
      icon: "👤",
    },
    {
      title: "Company",
      subtitle: "Private Ltd / LLP",
      icon: "🏢",
    },
    {
      title: "NGO / Trust",
      subtitle: "Non Profit Organization",
      icon: "❤️",
    },
  ];

  const handleContinue = () => {
    if (!selected) {
      alert("Please select Merchant Type");
      return;
    }

    router.push({
      pathname: "/category",
      params: {
        merchantType: selected,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.heading}>
        Select Merchant Type
      </Text>

      <Text style={styles.subHeading}>
        Choose your business type
      </Text>

      {merchantTypes.map((item) => (
        <TouchableOpacity
          key={item.title}
          style={[
            styles.card,
            selected === item.title && styles.selectedCard,
          ]}
          onPress={() => setSelected(item.title)}
        >
          <Text style={styles.icon}>{item.icon}</Text>

          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.cardSubtitle}>
              {item.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
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
    color: "#222",
  },

  subHeading: {
    marginTop: 10,
    marginBottom: 30,
    color: "#666",
    fontSize: 17,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  selectedCard: {
    borderColor: "#6C4CF1",
    backgroundColor: "#F5F2FF",
  },

  icon: {
    fontSize: 34,
    marginRight: 18,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  cardSubtitle: {
    marginTop: 5,
    color: "#777",
    fontSize: 14,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#6C4CF1",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

});