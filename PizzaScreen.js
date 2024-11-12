import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PizzaComponent from "../components/PizzaComponent";
import { CartItems } from "../Context";

const PizzaScreen = () => {
  const [data, setData] = useState([]); // State untuk data pizza
  const [loading, setLoading] = useState(true); // State untuk loading
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartItems);

  // useEffect untuk mengambil data dari API jsonbin.io
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/6730b7c3ad19ca34f8c78050', {
      headers: {
        'X-Master-Key': 'YOUR_API_KEY', // Ganti dengan API key Anda
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log data untuk memastikan struktur data benar
        setData(data.record.pizzaMania); // Sesuaikan jika struktur data JSON Anda berbeda
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching pizza data:', error);
        setLoading(false);
      });
  }, []);

  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);

  console.log(cart, "cart items added");
  console.log(total, "total price");

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={24}
        color="black"
      />
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <PizzaComponent pizza={item} />}
      />
      {total === 0 ? null : (
        <Pressable
          onPress={() => navigation.navigate("Cart")}
          style={{
            backgroundColor: "green",
            padding: 10,
            position: "absolute",
            bottom: 100,
            left: 150,
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Go to Cart
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

export default PizzaScreen;

const styles = StyleSheet.create({});
