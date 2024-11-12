import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { OrderContext } from '../Context';

const OrderHistoryScreen = () => {
  const { orders } = useContext(OrderContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      {orders.length === 0 ? (
        <Text style={styles.noOrders}>No orders yet.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.orderItem}>
              <View style={styles.orderDetails}>
                <Text style={styles.orderNumber}>Order: {item.orderNumber}</Text>
                <Text style={styles.date}>Date: {item.date}</Text>
                <Text style={styles.status}>Status: {item.status}</Text>
              </View>
              <View style={styles.totalContainer}>
                <Text style={styles.total}>Total: {item.total}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noOrders: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  orderItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  orderDetails: {
    flex: 1,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  totalContainer: {
    marginLeft: 15,
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default OrderHistoryScreen;
