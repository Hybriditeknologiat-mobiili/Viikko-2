import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("Show Modal Message");

  const showModal = () => {
    setModalVisible(true);
    setModalText("This is modal...");
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalText("Show Modal Message");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={modalVisible ? hideModal : showModal}>
        <Text style={styles.modalTrigger}>{modalText}</Text>
      </Pressable>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContent}>
          {modalText === "This is modal" && (
            <Text>{modalText}</Text>
          )}
          <View style={styles.closeButtonContainer}>
            <Pressable onPress={hideModal}>
              <View style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTrigger: {
    fontSize: 18,
    marginBottom: 20,  
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonContainer: {
    marginTop: 20,  
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});