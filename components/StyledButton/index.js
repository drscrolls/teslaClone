import React from 'react'
import {View, Text, Pressable } from 'react-native';
import styles from './styles';


const StyledButton = ({type, content, onPress}) => {

  // console.log("type", type);
  const bgColor = type == "primary" ? "#171A20CC" : "#FFFFFFE9";
  const textColor = type == "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
       <Pressable 
        style={[styles.button,{backgroundColor: bgColor}]} 
        onPress={()=>onPress()}>
         <Text style={[styles.text, {color: textColor}]}>{content}</Text>
       </Pressable>
    </View>
  )
}

export default StyledButton
