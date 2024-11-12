import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  Animated,
} from "react-native";
import React, { useContext, useRef, useEffect, useState } from "react";
import MenuComponent from "../components/MenuComponent";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../Context";

const HomeScreen = () => {
  const data = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXFw-gp5lJmaaKXC6oZR73xg117_ois-X9A&s",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
    },
    {
      id: "2",
      image:
        "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEcz7DVk3uBX_33FZVdPjiCvgpKsmx_9eSh7x4GrTyeMsQixOTd7SHXByKmdibQSQF94&usqp=CAU",
    },
    {
      id: "4",
      image:
        "https://t3.ftcdn.net/jpg/04/29/26/28/360_F_429262810_ds7iEZW4tpfG5eiWYBSQbTGvM8JEawy3.jpg",
    },
    {
      id: "5",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-loyalty-card-template-design-1260a2e5c8d49278e57494ecc24348f8_screen.jpg?ts=1566573366",
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000); // ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 150 }}>
          <FlatList
            data={data}
            ref={flatListRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
            )}
          />
        </View>

        <MenuComponent />

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 7 }}
            source={{
              uri: "https://api.dominos.co.in/prod-olo-api/images/flashBanner/Dominos_Howzzat_IPL-2021_Menu.jpg",
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 7 }}
            source={{
              uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel9.png",
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 120, borderRadius: 7 }}
            source={{
              uri: "https://www.dominos.co.in/theme2/front/images/voucherimages/carousel13.png",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: "hidden",
    width: 220, // Lebar card
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default HomeScreen;
