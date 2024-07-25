import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NewspaperIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightCircleIcon} from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';


const NameScreen = () => {
  const [firstName,setFirstName] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Email");
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ marginTop: 50, textAlign: 'center', color: 'gray' }}>
        NO BACKGROUND CHECKS CONDUCTED
      </Text>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: "black", justifyContent: "center", alignItems: "center" }}>
            <NewspaperIcon size={35} color={"black"} />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              marginTop:10,
            }}>
            What's your name?
          </Text>
          <TextInput 
          autoFocus={true}
          value={firstName}
          onChangeText={text => setFirstName(text)}
          placeholder='first name (required)' placeholderTextColor={"#BEBEBE"} 
          style ={{width:340, marginVertical:10, marginTop:25, borderBottomColor:"black" ,borderBottomWidth:1,paddingBottom:10,
          // fontFamily:""
          fontSize: firstName ? 22:22
          }}/>
      <TextInput
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: firstName ? 22 : 22,
              marginTop: 25,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: 'GeezaPro-Bold',
            }}
            placeholder="Last name"
            placeholderTextColor={'#BEBEBE'}
          />
          <Text  style={{fontSize: 15, color: 'gray', fontWeight: '500'}}>Last name is optional</Text>
        </View>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style= {{marginTop: 30,

        }}>
          <ArrowRightCircleIcon 
           name="arrow-right-circle"
           size={45}
           color="#581845"
           style={{alignSelf: 'center', marginTop: 20}}/>

        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default NameScreen

const styles = StyleSheet.create({})