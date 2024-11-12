import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Modal, TextInput, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('Heri K.');
  const [phone, setPhone] = useState('0895345747135');

  const handleSave = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.phone}>{phone}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.editButton}>
              <Ionicons name="pencil-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Accounts</Text>
          <MenuItem icon="receipt-outline" title="Order history" />
          <MenuItem icon="location-outline" title="Delivery address" />
          <MenuItem icon="pricetags-outline" title="Use coupon code" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <MenuItem icon="globe-outline" title="Language" />
          <MenuItem icon="newspaper-outline" title="News and updates" />
          <MenuItem icon="shield-checkmark-outline" title="Privacy policy" />
          <MenuItem icon="document-text-outline" title="Terms of service" />
          <MenuItem icon="chatbubble-ellipses-outline" title="Contact us" />
          <MenuItem icon="close-circle-outline" title="Delete Account" />
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon} size={24} color="black" style={styles.menuIcon} />
    <Text style={styles.menuText}>{title}</Text>
    <Ionicons name="chevron-forward-outline" size={20} color="black" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: '#007bff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60, // Menambahkan padding atas agar tidak nabrak
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  editButton: {
    padding: 8,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default SettingScreen;
