import { icons } from "@/constants/icons"
import { Tabs } from "expo-router"
import { Image, ImageSourcePropType, View } from "react-native"

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean
  icon: ImageSourcePropType
  title: string
}) => {
  return (
    <View className="size-full justify-center items-center">
      <Image source={icon} tintColor={focused ? "#1A5BBF" : "#A2A7B9"} className="size-6" />
    </View>
  )
}

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#222433",
          borderColor: "transparent",
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Markets",
          headerShown: false,
          tabBarIcon: (focused) => (
            <TabIcon focused={focused.focused} icon={icons.markets} title="Markets" />
          ),
        }}
      />

      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          headerShown: false,
          tabBarIcon: (focused) => (
            <TabIcon focused={focused.focused} icon={icons.news} title="News" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: (focused) => (
            <TabIcon focused={focused.focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          headerShown: false,
          tabBarIcon: (focused) => (
            <TabIcon focused={focused.focused} icon={icons.portfolio} title="Portfolio" />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          headerShown: false,
          tabBarIcon: (focused) => (
            <TabIcon focused={focused.focused} icon={icons.community} title="Community" />
          ),
        }}
      />
    </Tabs>
  )
}
