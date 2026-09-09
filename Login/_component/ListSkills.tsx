
/////////////////////////////////////////////////////////////////////////////////////////////////////
                                          // SCREEN IMPORTS

import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { styles } from "../_component/style";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";


////////////////////////////////////////////////////////////////////////////////////////////////////
                                              // LIST SCREEN CODE


type TabParamList = {
  ListSkills: undefined;
};

function ListSkills({}: NativeStackScreenProps<TabParamList, "ListSkills">) {
  const [txtSkill, setSkill] = useState("");
  const [Skill, setSkills] = useState<string[]>([]);
  const removeSkillHandler = (index: number) => {
    setSkills((currentSkills) => currentSkills.filter((skill, i) => i !== index));
  }
  const renderSkills = () => {
    const arrOutput = [];
    for (let i = 0; i < Skill.length; i++) {
      arrOutput.push(
        <View key={i} style={styles.inputContainer}>
          <Text  style={styles.SkillText}>
            {Skill[i]}
          </Text>
          <TouchableOpacity onPress={() => removeSkillHandler(i)} style={styles.deleteBtn}>
            <Text style={styles.deleteBtnText}>Remove</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return arrOutput;
  };
  return (
    <View style={styles.appContainer}>
      <ScrollView>
        <View style={styles.Mainpicture}>
          <Image
            style={styles.BannerImage}
            source={require("../_images/Skill_banner.png")}
          />
        </View>
        <Text style={styles.headings}>List your Skills</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your skill"
            onChangeText={setSkill}
            value={txtSkill}
          />
          <Button
            title="Add Skill"
            onPress={() => {
              Skill.push(txtSkill);
              setSkill("");
              console.log(Skill.toString());
            }}
          />
        </View>
        <View style={styles.skillContainer}>{renderSkills()}</View>
      </ScrollView>
    </View>
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
                                           // SCREEN EXPORTS

export default ListSkills