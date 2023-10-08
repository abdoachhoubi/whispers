import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Splash";
import Welcome from "./screens/Welcome";
import Signin from "./screens/auth/Signin";
import Signup from "./screens/auth/Signup";
import Pass from "./screens/auth/Pass";
import Email from "./screens/auth/Email";
import Home from "./screens/home/Home";
import Comments from "./screens/home/Comments";
import Replies from "./screens/home/Replies";

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
            name="Comments"
            component={Comments}
            options={{ headerShown: false }}
          />
		  
          <Stack.Screen
            name="Replies"
            component={Replies}
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
