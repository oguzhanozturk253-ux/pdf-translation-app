import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const [fileName, setFileName] = useState('');

  const pickPDF = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf',
      copyToCacheDirectory: true,
    });

    if (!result.canceled) {
      setFileName(result.assets[0].name);
      Alert.alert('PDF seçildi', result.assets[0].name);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PDF Çeviri</Text>

      <TouchableOpacity style={styles.button} onPress={pickPDF}>
        <Text style={styles.buttonText}>PDF Seç</Text>
      </TouchableOpacity>

      {fileName !== '' && (
        <Text style={styles.fileName}>
          Seçilen dosya: {fileName}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fileName: {
    marginTop: 25,
    fontSize: 16,
    textAlign: 'center',
  },
});
