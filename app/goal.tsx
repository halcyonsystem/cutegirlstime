import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Calendar } from 'react-native-calendars';

export default function Index() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goaldate, setDate] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 250,
          marginBottom: 12,
          paddingHorizontal: 10,
        }}
        placeholder="Goal Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{
          height: 80,
          borderColor: "gray",
          borderWidth: 1,
          width: 250,
          marginBottom: 20,
          paddingHorizontal: 10,
          textAlignVertical: "top",
        }}
        placeholder="Goal Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <Calendar 
        onDayPress={day => {
        setDate(day.dateString);
      }}
      />
      <Button
        onPress={() => {
          console.log("Goal Name:", name);
          console.log("Goal Description:", description);
          console.log("Goal Date:", goaldate);}
        }
        title={'Add Goal'}
      />
    </View>
  );
}