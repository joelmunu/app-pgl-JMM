import { StyleSheet, Text, View } from 'react-native';
import Description from '../components/Description';
import HobbiesList from '../components/HobbiesList';

const UserInfoScreen = () => {
  return (
    <>
      <Description></Description>
      <HobbiesList></HobbiesList>
    </>
  )
}

export default UserInfoScreen;

const styles = StyleSheet.create({});