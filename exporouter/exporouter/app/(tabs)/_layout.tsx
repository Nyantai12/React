import { Tabs } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
const BottomRouter = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home page",
          title: "Home",
          tabBarIcon: () => <FontAwesome size={28} name="home" color="blue" />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="user/[id]"
        options={{
          headerTitle: "User page",
          title: "User",
          tabBarIcon: () => <AntDesign size={28} name="user" color="blue" />,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About page",
          title: "About",
          tabBarIcon: () => (
            <AntDesign size={28} name="checkcircle" color="blue" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default BottomRouter;