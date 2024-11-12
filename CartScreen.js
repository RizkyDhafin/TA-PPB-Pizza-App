import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { CartItems, OrderContext } from "../Context"; // Pastikan path sesuai dengan lokasi file Anda
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartItems);
  const { placeOrder } = useContext(OrderContext); // Import placeOrder dari OrderContext

  const total = cart
    .map((item) => Number(item.price * item.quantity))
    .reduce((prev, curr) => prev + curr, 0);

  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      placeOrder(); // Panggil fungsi placeOrder dari OrderContext
      navigation.navigate("Order"); // Arahkan ke layar Order atau OrderHistory
    } else {
      alert("Cart is empty. Please add items before placing an order.");
    }
  };

  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((item, index) => (
            <Pressable
              style={{
                backgroundColor: "#006491",
                padding: 10,
                margin: 10,
                borderRadius: 8,
              }}
              key={item.id || index} // Pastikan setiap item memiliki `key` yang unik
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={{ width: 70, height: 70, borderRadius: 6 }}
                  source={{ uri: item.image }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                  >
                    {item.name}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 6,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 17 }}>
                      {item.size}
                    </Text>
                    <Text style={{ color: "white", fontSize: 15 }}>
                      {" "}
                      | {item.description.substr(0, 25) + "..."}
                    </Text>
                  </View>

                  <Text style={{ color: "white", fontSize: 16 }}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {total === 0 ? (
        <Pressable
          style={{
            marginBottom: "auto",
            marginTop: "auto",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
            Cart is empty!
          </Text>
          <Image
            style={{
              width: 250,
              height: 600,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://pizzaonline.dominos.co.in/static/assets/empty_cart@2x.png",
            }}
          />
        </Pressable>
      ) : (
        <View style={{ height: 200 }}>
          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <Entypo name="location-pin" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Delivering To Home
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  width: 200,
                  marginTop: 3,
                  color: "gray",
                }}
              >
                25/2 Rna Shopping arcade Lucknow complex
              </Text>
            </View>
          </View>

          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome5 name="amazon-pay" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>₹{total}</Text>
              <Text
                style={{
                  fontSize: 16,
                  width: 200,
                  marginTop: 3,
                  color: "gray",
                }}
              >
                Pay Via Cash
              </Text>
            </View>
          </View>
          <Pressable
            onPress={handlePlaceOrder}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "green",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
            >
              Place Order
            </Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
