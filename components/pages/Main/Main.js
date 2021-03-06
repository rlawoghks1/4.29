import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./../../../recoil/Global";
import { View, FlatList, Text, Button, StyleSheet,Image, SafeAreaView, TextInput } from "react-native";
import api from "./../../../config/Api";
import { EvilIcons } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  alignItems: center;
`;

const HeadLine = styled(Container)`
  width: 100%;
  height: 20%;
  flex-direction: row;
  margin: 5% 0;
  alignItems: center;
`;

const SeachText = styled.Text`
  font-size: 12px;
  color: gray;
`;

const CenterRowText = styled.Text`
  font-size: 12px;
  color: black;
  margin: 3px 40px 3px 40px;
`;

const Box = styled.View`
  margin: 10% 10% 10% 10%;
  flex-direction: row;
  padding: 20px;
  background-color: #e5e5e5;
  border-radius: 20px;
`;

const SliderButton = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;
  alignItems: center;
  `

const Tab = createBottomTabNavigator();

// const TextBoxSample = () => {
//   const [text, onChnageText] =Teact.useState("Useless Text")
//   const [number, onChangeNumber] = React.useState(null);

//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });



const Inputbox = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const Main = ({ navigation, route }) => {
  const [loginState, setLoginState] = useRecoilState(isLoggedInState);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getData() {
    setIsLoading(true);
    try {
      const { data, status } = await api.getUserAll("");
      if (status == "200") {
        setData(data);
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.warn(e);
    }
  }

  const BackImageView = styled.ImageBackground`
  width: 299px;
  height: 200px;
  flex-direction: column;
`;

  return (
    <Container>
      <HeadLine>
      <Box>
        <CenterRowText allowFontScaling={false}>???????????????????? ??????</CenterRowText>
      </Box>
      <EvilIcons name="gear" size={24} color="black"/>
      </HeadLine>
      <SliderButton></SliderButton>
      <BackImageView source={require("./../../../assets/medienglogo.png")} />
    </Container>

  );
};


export default Main;
