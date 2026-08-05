import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image,} from 'react-native';
import {useState} from 'react';
import React from 'react';
import { Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function MainScreen() {
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [English, setEnglish] = React.useState(false);

// console.log("App starting up");
  return (
    
      <View style={styles.background}>
        <View style={styles.menubar}>
         <Text style={styles.home}>Home</Text>
         <Image 
         style={styles.menu}
         source={require("./_images/menu.png")}/>
        </View>
        <Image
          style={styles.lockimage}
          source={require("./_images/user.png")}
        />
        <Text style={styles.signup}>LOGIN</Text>
        <View style={styles.inputFlex}>
          <Text style={styles.labels}>Name :</Text>
          <TextInput
            style={styles.inputs}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            inputMode="text"
            placeholder="Enter your name"
            onChangeText={(newText) => setName(newText)}
          />
        </View>
        <View style={styles.inputFlex}>
          <Text style={styles.labels}>Email :</Text>
          <TextInput
            style={styles.inputs}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="example@example.com"
            onChangeText={(newText) => setEmail(newText)}
          />
        </View>
        <View style={styles.inputFlex}>
          <Text style={styles.labels}>Password :</Text>
          <TextInput
            style={styles.inputs}
            secureTextEntry={true}
            placeholder="Enter your password"
            onChangeText={(newText) => setPassword(newText)}
          />
        </View>
        <Text style={styles.forget}>
          Forgot Password?
        </Text>
      
        <Button
          title="LOGIN"
          onPress={() => {
            console.log(
              "Name: " + Name + "Email : " + Email + "Password: " + Password,
            );
          }}
          color="turquoise"
        />

        <View style={styles.languageToggle}>
          <Text style={styles.headings}>Language</Text>
          <Switch
            trackColor={{ false: "#a4a2a434", true: "#a4a2a434" }}
            thumbColor={English ? "#4eb3ce" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setEnglish(previousState => !previousState)}
            value={English}
          />
        </View>

       

        <StatusBar style="auto" />
      </View>
   
    
  );
};

const styles = StyleSheet.create({
  signup: {
    paddingTop : 10,
    marginBottom: 20,
    color: 'turquoise',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menu: {
    width: 30,
    height: 30,
  },
  home: {
    fontSize: 25,
    fontWeight: 'bold',
    width: '90%',
  },
  background: {
    flex: 1,
    backgroundColor: '#f7f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headings: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lockimage: {
    marginTop: 0,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  inputFlex: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-start',
    width: '90%',
    gap: 30,
  },
  labels: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    width: '20%',
  },
  inputs: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: 'black',
    width: '67%',
  },
  forget: {
    marginTop: 20,
    marginBottom: 30,
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  menubar: {
    marginTop: -80,
    marginBottom: 20,
    flexDirection: 'row',
    paddingBottom: 60,
    width: '95%',
  },
  languageToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '60%', // Adjust width as needed
  },
 
},
);