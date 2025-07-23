import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import "../app/globals.css"

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="diamonds" options={{ headerShown: false }} />
      </Stack>
      <StatusBar hidden={true} />
    </>
  )
}
