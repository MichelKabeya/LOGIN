
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                // PROJECT IMPORTS

import { StatusBar } from "expo-status-bar";
import { Switch } from "react-native";
import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FadeinView from "../_component/animation"
import React, { useState } from "react";
import {styles} from "../_component/style"
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RadioButton } from "react-native-paper";


//////////////////////////////////////////////////////////////////////////////////////////////////////
                                             //MAIN SCREEN CODE

type TabParamList = {
  Home: undefined;
   ViewDetails: {
    NameSend: string;
    EmailSend: string;
    PassSend: string;
    GenreSend: string;
  };
};
function MainScreen({
  navigation,
}: NativeStackScreenProps<TabParamList, "Home">) {
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [English, setEnglish] = React.useState(false);
  const [isDark, setIsDark] = useState(false);
  const [SelectRole, setSelectRole] = useState("0");
  const [Error, setError] = useState("");

  // console.log("App starting up");
  return (
    <View
      style={[
        styles.background,
        { backgroundColor: isDark ? "#121212" : "#FFFFFF" },
      ]}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            style={styles.lockimage}
            source={require("../_images/user.png")}
          />
          <Text style={styles.signup}>LOGIN</Text>
          <FadeinView>
            <Text style={styles.error}>{Error}</Text>
            <View style={styles.inputFlex}>
              <Text
                style={[
                  styles.labels,
                  { color: isDark ? "#FFFFFF" : "#121212" },
                ]}
              >
                Name :
              </Text>
              <TextInput
                style={[
                  styles.inputs,
                  {
                    color: isDark ? "#FFFFFF" : "#121212",
                    borderColor: isDark ? "#FFFFFF" : "#121212",
                  },
                ]}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                inputMode="text"
                placeholder="Enter your name"
                onChangeText={(newText) => setName(newText)}
              />
            </View>
            <View style={styles.inputFlex}>
              <Text
                style={[
                  styles.labels,
                  {
                    color: isDark ? "#FFFFFF" : "#121212",
                    borderColor: isDark ? "#FFFFFF" : "#121212",
                  },
                ]}
              >
                Email :
              </Text>
              <TextInput
                style={[
                  styles.inputs,
                  {
                    color: isDark ? "#FFFFFF" : "#121212",
                    borderColor: isDark ? "#FFFFFF" : "#121212",
                  },
                ]}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="example@example.com"
                onChangeText={(newText) => setEmail(newText)}
              />
            </View>
            <View style={styles.inputFlex}>
              <Text
                style={[
                  styles.labels,
                  { color: isDark ? "#FFFFFF" : "#121212" },
                ]}
              >
                Password :
              </Text>
              <TextInput
                style={[
                  styles.inputs,
                  {
                    color: isDark ? "#FFFFFF" : "#121212",
                    borderColor: isDark ? "#FFFFFF" : "#121212",
                  },
                ]}
                secureTextEntry={true}
                placeholder="Enter your password"
                onChangeText={(newText) => setPassword(newText)}
              />
            </View>
            <Text style={styles.forget}>Forgot Password?</Text>
            <Text style={styles.headings}>Genre:</Text>

            <View style={styles.radioGroupGenre}>
              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="1"
                  status={SelectRole === "1" ? "checked" : "unchecked"}
                  onPress={() => setSelectRole("1")}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>Male</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="2"
                  status={SelectRole === "2" ? "checked" : "unchecked"}
                  onPress={() => setSelectRole("2")}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>Female</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="3"
                  status={SelectRole === "3" ? "checked" : "unchecked"}
                  onPress={() => setSelectRole("3")}
                  color="#000101"
                />
                <Text style={styles.radioLabel}>Unknown</Text>
              </View>
            </View>

            <Button
              title="LOGIN"
              onPress={() => {
                const selectedGenre =
                  SelectRole === "1"
                    ? "Male"
                    : SelectRole === "2"
                      ? "Female"
                      : SelectRole === "3"
                        ? "Unknown"
                        : "";
                if (
                  isEmpty(Name) == false &&
                  isEmpty(Email) == false &&
                  isEmpty(Password) == false
                ) {
                  navigation.navigate("ViewDetails", {
                    NameSend: Name,
                    EmailSend: Email,
                    PassSend: Password,
                    GenreSend: selectedGenre,
                  });
                  // console.log(
                  //   "Name: " +
                  //     Name +
                  //     "Email : " +
                  //     Email +
                  //     "Password: " +
                  //     Password,
                  // );
                  setError("");
                } else {
                  setError("Please add all the field");
                }
              }}
              color="turquoise"
            />
          </FadeinView>

          <View style={styles.languageToggle}>
            <Text
              style={[
                styles.headings,
                { color: isDark ? "#FFFFFF" : "#121212" },
              ]}
            >
              Change color
            </Text>
            <Switch
              trackColor={{ false: "#a4a2a434", true: "#7c907f34" }}
              thumbColor={English ? "#2bda22" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setIsDark}
              value={isDark}
            />
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
                                       // FUNCTION HANDLING  INPUTS

function isEmpty(value: unknown): boolean {
  if (value == null) {
    return true;
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
                                         //PROJECT EXPORTS

export default MainScreen