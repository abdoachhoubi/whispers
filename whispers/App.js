import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";

import Signin from "./screens/auth/Signin";
import Signup from "./screens/auth/Signup";
import Pass from "./screens/auth/Pass";
import Email from "./screens/auth/Email";

import Comments from "./screens/feed/Comments";
import Replies from "./screens/feed/Replies";
import Report from "./screens/feed/Report";
import Post from "./screens/feed/Post";

import Chat from "./screens/chat/Chat";

import Account from "./screens/settings/Account";
import Notifications from "./screens/settings/Notifications";
import Bug from "./screens/settings/Bug";
import Contact from "./screens/settings/Contact";
import DeleteAcc from "./screens/settings/DeleteAcc";
import RestorPass from "./screens/settings/RestorPass";

import {
  useFonts,
  IBMPlexMono_100Thin,
  IBMPlexMono_200ExtraLight,
  IBMPlexMono_300Light,
  IBMPlexMono_400Regular,
  IBMPlexMono_500Medium,
  IBMPlexMono_600SemiBold,
  IBMPlexMono_700Bold,
} from "@expo-google-fonts/ibm-plex-mono";

export const FontContext = createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    IBMPlexMono_100Thin,
    IBMPlexMono_200ExtraLight,
    IBMPlexMono_300Light,
    IBMPlexMono_400Regular,
    IBMPlexMono_500Medium,
    IBMPlexMono_600SemiBold,
    IBMPlexMono_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const fonts = {
    thin: "IBMPlexMono_100Thin",
    extraLight: "IBMPlexMono_200ExtraLight",
    light: "IBMPlexMono_300Light",
    regular: "IBMPlexMono_400Regular",
    medium: "IBMPlexMono_500Medium",
    semiBold: "IBMPlexMono_600SemiBold",
    bold: "IBMPlexMono_700Bold",
  };

  return (
    <FontContext.Provider value={fonts}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Pass"
            component={Pass}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Email"
            component={Email}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Post"
            component={Post}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Comments"
            component={Comments}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Replies"
            component={Replies}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Report"
            component={Report}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Bug"
            component={Bug}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="DeleteAcc"
            component={DeleteAcc}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="RestorPass"
            component={RestorPass}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontContext.Provider>
  );
}

/*
<Stack.Screen
  name="Splash"
  component={Splash}
  options={{ headerShown: false }}
/>
*/
