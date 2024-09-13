import { TextInput, View, Text } from "react-native";
import { s } from "./Input.style";

export default function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={4}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => {
          onChange(text);
        }}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
