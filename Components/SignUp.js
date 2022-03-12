import React,{useState} from 'react';
import { View,Text,TextInput,StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SignUp({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const logInButton = ()=>{
    if (userName ==="45" && password ==="45"){
      navigation.navigate('SignUp')
    }
}
  return (
    <View style={styles.container}>

    <View style={styles.textLogoStyle}>
        <View style={styles.imageWrapper}>
            <Image 
                style={styles.image}
                source = {require("../images/Logo.png")}
            />
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>
               Sign Up
            </Text>
        </View>
    </View>

    <View style={styles.inputFeilds}>
        <TextInput
            style={styles.inputEmail}
            placeholder="Enter User Name"
            onChangeText={newText => setUserName(newText)}
            Value={userName}                
        />
        <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={newText => setPassword(newText)}
            Value={password}
        />
            <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={newText => setPassword(newText)}
            Value={password}
        />
            <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={newText => setPassword(newText)}
            Value={password}
        />
    </View>

    <View style={styles.buttonsStyles}>
    
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <View style={styles.buttonPassword}>
                <Text style={styles.btnText}>Sign Up</Text>
            </View>
        </TouchableOpacity>
    </View>

</View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
   },
   textLogoStyle: {
      flex:0.10,
      width:"100%"
   },
   imageWrapper:{
      flex:0.8,
      alignItems: 'center',
      justifyContent:"center"

   },
   image:{
      width:"25%",
      height:100
  },
  textWrapper:{
    
      alignItems: 'center'
  },
  text:{
      marginTop:"15%",
      fontSize:16,
      fontWeight:"bold",
      color:"black"
  },
   
   inputFeilds: {
      flex:0.50,
      width:"100%",
      marginTop:35,
      marginBottom:25
   },
   inputEmail:{
      height: 40,
      margin: 15,
      marginTop:40,
      borderWidth: 2,
      padding: 12,
      borderRadius:15,
      color:"black",
      fontSize:18

   },
   inputPassword: {
      height: 40,
      margin: 15,
      borderWidth: 2,
      padding: 12,
      borderRadius:15,
      color:"black",
      fontSize:18
    },
    buttonsStyles:{
      flex:0.20,
      width:"100%", 

    },
    buttonUsername: {
      alignItems: "center",
      backgroundColor: "green",
      padding: 13,
      marginTop:8,
      width:"70%",
      justifyContent:"center",
      marginLeft:50,
      borderRadius:15
    },
    buttonPassword:{
      alignItems: "center",
      backgroundColor: "blue",
      padding: 13,
      marginTop:8,
      width:"70%",
      justifyContent:"center",
      marginLeft:50,
      marginTop:20,
      borderRadius:15
    },
    btnText:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        
    },

    
 
   
     
});