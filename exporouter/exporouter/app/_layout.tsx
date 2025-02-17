import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="+not-found.tsx" />
      <Stack.Screen name="aboutus" />
    </Stack>
  );
};
export default MainLayout;