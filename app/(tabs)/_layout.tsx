import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Pressable } from "react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,

        tabBarHideOnKeyboard: true,
        // popToTopOnBlur: true,
        tabBarStyle: {
          height: 60,
          marginHorizontal: 10,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          borderRadius: 20,
          shadowColor: "#000",
          shadowRadius: 4,
          elevation: 5,
          marginBottom: 10,
        },
        tabBarIconStyle: {
          margin: 0,
        },
        tabBarItemStyle: {
          justifyContent: "center", // Ensures items align centrally
          alignItems: "center",

          borderRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarButton: (props) => (
          <Pressable
            {...props}
            style={({ pressed }) => [
              props.style,
              {
                opacity: pressed ? 1 : 1, // Ensures no feedback on press
              },
            ]}
            android_ripple={{ color: "transparent" }} // Removes ripple effect on Android
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="people" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
