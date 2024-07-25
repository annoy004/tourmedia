import { Pressable, SafeAreaView, StyleSheet, Text, View  } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import React from 'react'
import LottieView from 'lottie-react-native';

const BasicInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style= {{flex:1,background: 'white'}}>
      <View style = {{marginTop:80}}>
        <Text style={{fontSize:35, fontWeight:'bold',fontFamily:"GeezaPro-Bold"}}>You're one of a kind</Text>
        <Text style={{fontSize:35, fontWeight:'bold',fontFamily:"GeezaPro-Bold"}}>You're profile should be too.</Text>
      </View>
      <View>
      <LottieView
      
        
        style={{
          width: 300,
          height: 260,
          alignSelf:"center",
          marginTop:40,
          justifyContent:"center",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/love.json')}
        autoPlay
        loop={true}
        speed={0.7}
      />    
      </View>

      <Pressable
      onPress= {() => navigation.navigate("Name")} 
      style={{backgroundColor:"#900C3F" , padding: 15,marginTop: "auto"}}>
        
        <Text style= {{
          textAlign: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize:15,
        }}>Enter basic info</Text>
      </Pressable>
      
    </SafeAreaView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({})