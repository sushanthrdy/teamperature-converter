import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./ButtonConverter.style";

export default function ButtonConverter({ unit, onPressed }) {
  return (
    <TouchableOpacity onPress={onPressed} style={s.button}>
      <Text style={s.buttonTxt}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
