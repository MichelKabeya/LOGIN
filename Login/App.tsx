import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView} from 'react-native';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Switch } from 'react-native';
import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';

type RootStackParamList = {
  Home: undefined;
  ViewDetails: {
    NameSend: string;
    EmailSend: string;
    PassSend: string;
  };
};

type FadeinViewProps = PropsWithChildren<{
  style?: object;
}>;

const FadeinView = ({ children, style }: FadeinViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {toValue: 1,
        duration: 3000,
        useNativeDriver: false
      }
    ).start();
  }, [fadeAnim]);
  return (
    <Animated.View style={{ ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function isEmpty(value: unknown): boolean {
  if (value == null) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}
function MainScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [English, setEnglish] = React.useState(false);
  const [Error, setError] = useState('')

// console.log("App starting up"); 
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            style={styles.lockimage}
            source={require("./_images/user.png")}
          />
          <Text style={styles.signup}>LOGIN</Text>
          <FadeinView>
            <Text style = {styles.error}>{Error}</Text>
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
          <Text style={styles.forget}>Forgot Password?</Text>

          <Button
            title="LOGIN"
            onPress={() => {
              if ((isEmpty(Name)== false) && (isEmpty(Email)== false) && (isEmpty(Password)== false)){
              navigation.navigate("ViewDetails", {
                NameSend: Name,
                EmailSend: Email,
                PassSend: Password,
              });
              console.log(
                "Name: " + Name + "Email : " + Email + "Password: " + Password,
              );
              setError("")
            }
            else 
            {
              setError("Please add all the field")
            }
            }}
            color="turquoise"
          />
          </FadeinView>

          <View style={styles.languageToggle}>
            <Text style={styles.headings}>Language</Text>
            <Switch
              trackColor={{ false: "#a4a2a434", true: "#7c907f34" }}
              thumbColor={English ? "#2bda22" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setEnglish((previousState) => !previousState)
              }
              value={English}
            />
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
function ViewDetails({ route }: NativeStackScreenProps<RootStackParamList, 'ViewDetails'>) {
  const Nameget = route.params.NameSend;
  const Emailget = route.params.EmailSend;
  const Passget = route.params.PassSend;
  const [SelectValue, setSelectValue] = useState ('0')
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsText}>
        <Text style={styles.headings}>Name : {Nameget} </Text>
        <Text style={styles.headings}>Email : {Emailget} </Text>
        <Text style={styles.headings}>Password : {Passget} </Text>
      </View>
      <Text>Please select your favourite programming language:</Text>
      <View style={styles.radio}>
        <View style={styles.radioGroup}>
          <View style={styles.radioButton}>
            <RadioButton.Android
              value="1"
              status={SelectValue === '1' ? 'checked' : 'unchecked'}
              onPress={() => setSelectValue('1')}
              color="#007BFF"
            />
            <Text style={styles.radioLabel}>HTML</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton.Android
              value="2"
              status={SelectValue === '2' ? 'checked' : 'unchecked'}
              onPress={() => setSelectValue('2')}
              color="#007BFF"
            />
            <Text style={styles.radioLabel}>CSS</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton.Android
              value="3"
              status={SelectValue === '3' ? 'checked' : 'unchecked'}
              onPress={() => setSelectValue('3')}
              color="#007BFF"
            />
            <Text style={styles.radioLabel}>JavaScript</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 24,
    gap: 20,
  },
  detailsText: {
    gap: 10,
  },
  signup: {
    paddingTop : 10,
    marginBottom: 20,
    color: 'turquoise',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  radio: {
    flex:0,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioGroup: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333'
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  background: {
    flex: 1,
    backgroundColor: '#f7f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
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