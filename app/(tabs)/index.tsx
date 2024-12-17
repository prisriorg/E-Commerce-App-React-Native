import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colorScheme, useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// Use imperatively
colorScheme.set("system");
export default function Tab() {
  const { setColorScheme } = useColorScheme();
  const push  = () => router.push('hello');


  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Pressable onPress={push}>
        <Text className="text-red-500 dark:text-white">Tab [Home|Settings]</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
