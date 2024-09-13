import { TextInput, View, Text } from "react-native";
import { s } from "./Input.style";

export default function Input({ defaultValue }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={3}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
      />
      <Text style={s.unit}>°C</Text>
    </View>
  );
}
