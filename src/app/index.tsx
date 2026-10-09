import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="">Edit src/app/index.tsx to edit this screen.</Text>
      <Link href="/OnBoarding">OnBoarding page</Link>
    </View>
  );
}
