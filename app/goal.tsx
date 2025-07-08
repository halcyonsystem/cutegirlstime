import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Calendar } from 'react-native-calendars';

export default function Index() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
      />
      <Button
        onPress={() => {
          // You can use 'name' and 'description' here
        }}
        title={'Add Goal'}
      />
    </View>
  );
}