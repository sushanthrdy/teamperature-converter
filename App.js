import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ImageBackground, Text, View } from "react-native";
import hotBackground from "./assets/hot.png";
import Input from "./components/Input/Input";

export default function App() {
  return (
    <ImageBackground style={s.backgroundImage} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <Text>Temperature</Text>
            <Input defaultValue={0} />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
