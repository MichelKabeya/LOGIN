//////////////////////////////////////////////////////////////////////////////////////////////////////
                                       // SCREEN IMPORTS

import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { styles } from "../_component/style";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";
import { RadioButton } from "react-native-paper";



/////////////////////////////////////////////////////////////////////////////////////////////////////
                                         // VIEW DETAILS CODE

// My tab navigator has these routes, and here's what each route expects as parameters
type TabParamList = {
  ViewDetails: {
    NameSend: string;
    EmailSend: string;
    PassSend: string;
    GenreSend: string;
  };
  ListSkills: undefined;
};

function ViewDetails({
  route,
  navigation,
}: NativeStackScreenProps<TabParamList, "ViewDetails">) {
  const Nameget = route.params?.NameSend;
  const Emailget = route.params?.EmailSend;
  const Passget = route.params?.PassSend;
  const Genreget = route.params?.GenreSend;
  const [SelectValue, setSelectValue] = useState("0");
  const [Blockarray] = useState<ImageSourcePropType[]>([
    undefined,
    require("../_images/HTML.png"),
    require("../_images/CSS.png"),
    require("../_images/JAVA SCRIPT.png"),
  ]);

  const [Iselect, setIselect] = useState(0);
  // const [ImageBlock, setImage] = useState<ImageSourcePropType | undefined>(
  //   undefined,
  // );
  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsText}>
          <Text style={styles.headings}>Name : {Nameget} </Text>
          <Text style={styles.headings}>Email : {Emailget} </Text>
          <Text style={styles.headings}>Password : {Passget} </Text>
          <Text style={styles.headings}>Genre : {Genreget} </Text>
        </View>
        <Text style={styles.headings}>
          Select your favourite programming language:
        </Text>
        <View style={styles.radio}>
          <View style={styles.radioGroup}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="1"
                status={SelectValue === "1" ? "checked" : "unchecked"}
                onPress={() => setSelectValue("1")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>HTML</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="2"
                status={SelectValue === "2" ? "checked" : "unchecked"}
                onPress={() => setSelectValue("2")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>CSS</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="3"
                status={SelectValue === "3" ? "checked" : "unchecked"}
                onPress={() => setSelectValue("3")}
                color="#000101"
              />
              <Text style={styles.radioLabel}>JavaScript</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              flex: 0,
              paddingTop: 20,
              paddingBottom: 8,
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            View your favourite programming language:
          </Text>
          <Button
            title="Process"
            onPress={() => {
              setIselect(Number(SelectValue));
              // switch (SelectValue) {
              //   case "1":
              //     setImage(require("./_images/HTML.png"));
              //     break;
              //   case "2":
              //     setImage(require("./_images/CSS.png"));
              //     break;
              //   case "3":
              //     setImage(require("./_images/JAVA SCRIPT.png"));
              //     break;
              //   default:
              //     setImage(undefined);
              // }
            }}
          />
          <View style={styles.container}>
            <Image
              source={Blockarray[Iselect]}
              style={styles.ViewImage}
            ></Image>
          </View>
          <Button
            title="List skills"
            onPress={() => navigation.navigate("ListSkills")}
          />
        </View>
      </View>
    </ScrollView>
  );
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
                                    // SCREEN EXPORTS
export default ViewDetails