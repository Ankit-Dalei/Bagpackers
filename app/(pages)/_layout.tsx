import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

// Define the tab configuration
const tabConfig = [
  {
    name: "home",
    title: "",
    icon: "home",
  },
  {
    name: "chat",
    title: "",
    icon: "comment",
  },
  {
    name: "enquiry",
    title: "",
    icon: "plus", // Central tab with unique styling
    isCenter: true,
  },
  {
    name: "visitingPlace",
    title: "",
    icon: "globe",
  },
  {
    name: "profile",
    title: "",
    icon: "user",
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 45,
          backgroundColor: 'white',
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveTintColor: 'blue',
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabConfig.map(({ name, title, icon, isCenter }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color }) =>
              isCenter ? (
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: 'white',
                    borderRadius: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -30, // To create the floating effect
                    elevation: 3, // Shadow for Android
                    shadowColor: '#000', // Shadow for iOS
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                  }}
                >
                  <FontAwesome size={30} name={icon} color={color} />
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome size={23} name={icon} color={color} />
                </View>
              ),
          }}
        />
      ))}
    </Tabs>
  );
}
