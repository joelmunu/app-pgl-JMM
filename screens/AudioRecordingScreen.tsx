import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { AVPlaybackStatusSuccess, Audio } from 'expo-av';
import appColors from '../assets/styles/appColors';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  type Record = {
    sound: Audio.Sound;
    duration: string;
    file: string | null;
  };

  useEffect(() => {
    loadData();
  }, []);
  

  const [recording, setRecording] = useState<Audio.Recording | undefined>();
  const [recordings, setRecordings] = useState<Array<Record>>([]);
  const [message, setMessage] = useState<string>("");
  const STORAGE_KEY = 'recordingsKey';
  

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        Alert.alert('❌ Error en la grabación', 'Por favor, permite el acceso al micrófono para grabar audio');
      };
    } catch (err) {
      console.error('Failed to start recording', err);
    };
  };

  async function stopRecording() {
    if (recording) {
      setRecording(undefined);
      await recording.stopAndUnloadAsync();

      try {
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        const sucessStatus = status as AVPlaybackStatusSuccess;
        const durationMillis = sucessStatus.durationMillis ? sucessStatus.durationMillis : 0;
        const updatedRecordings = [
          ...recordings,
          {
            sound: sound,
            duration: getDurationFormatted(durationMillis),
            file: recording.getURI()
          }
        ];
        setRecordings(updatedRecordings);
        saveRecording()
      } catch (error) {
        console.error('Failed to create loaded sound', error);
      };
    };
  };

  function getDurationFormatted(millis: number): string {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  };

  const saveRecording = async () => {
    try {
      const jsonValue = JSON.stringify(recordings);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error('Failed saving: ' + e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue) {
        const parsedValue = JSON.parse(jsonValue);
        setRecordings(parsedValue);
      }
    } catch (e) {
      console.error('Error reading value: ', e);
    }
  };

  const deleteRecording = (index: number) => {
    const updatedRecordings = [...recordings];
    const deletedRecording = updatedRecordings.splice(index, 1)[0];
    deletedRecording.sound.unloadAsync();
    setRecordings(updatedRecordings);
    saveRecording();
  };

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => (
      <View key={index} style={styles.row}>
        <Text style={styles.fill}>Grabación {index + 1} {recordingLine.duration}</Text>
        <Pressable style={styles.recordPressable} onPress={() => recordingLine.sound.replayAsync()}>
          <Text style={styles.buttonText}>Reproducir ▶️</Text>
        </Pressable>
        <Pressable style={{...styles.recordPressable, ...styles.deletePressable}} onPress={() => deleteRecording(index)}>
          <Text style={styles.buttonText}>Eliminar 🗑️</Text>
        </Pressable>
      </View>
    ));
  }


  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <View style={styles.recordingHeader}>
        <Pressable
          onPress={recording ? stopRecording : startRecording}
          style={styles.pressable}
        >
          <Text style={styles.buttonText}>
            {recording ? 'Detener grabación' : 'Iniciar grabación'}
          </Text>
        </Pressable>
        <Text style={styles.icon}>{recording ? '⏹🎙️' : '🗣️🎙️'}</Text>
      </View>
      <ScrollView style={styles.recordingsList}>
        {getRecordingLines()}
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
  },
  recordingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginTop: 20,
    marginBottom: 35,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  pressable: {
    backgroundColor: appColors.accentColor,
    borderRadius: 10,
    width: '50%',
    padding: 18,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: appColors.secondary,
    alignSelf: 'center'
  },
  deletePressable: {
    backgroundColor: appColors.errorColor
  },
  icon: {
    marginLeft: 18,
    fontSize: 24
  },
  recordPressable: {
    backgroundColor: appColors.accentColor,
    borderRadius: 10,
    alignSelf: 'center',
    width: '33%',
    padding: 10,
    marginLeft: 10
  },
  recordingsList: {
    width: '98%',
    height: '80%'
  }
});
