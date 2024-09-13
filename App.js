import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ImageBackground, Text, View } from "react-native";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import Input from "./components/Input/Input";
import { useEffect, useState } from "react";
import DisplayTemperature from "./components/DisplayTemperature/DisplayTemperature";
import {
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./utils/temperature";
import ButtonConverter from "./components/ButtonConverter/ButtonConverter";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground, updateBackground] = useState(coldBackground);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    updateBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }
  return (
    <ImageBackground style={s.backgroundImage} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              unit={currentUnit}
              onChange={setInputValue}
              defaultValue={0}
            />
            <ButtonConverter
              onPressed={() => {
                setCurrentUnit(oppositeUnit);
              }}
              unit={currentUnit}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
