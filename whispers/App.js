import React, { createContext } from "react";
import Splash from "./screens/Splash";
import Welcome from "./screens/Welcome";
import Signin from "./screens/auth/Signin";
import Signup from "./screens/auth/Signup";
import Pass from "./screens/auth/Pass";
import Email from "./screens/auth/Email";
import Home from "./screens/home/Home";
import Comments from "./screens/home/Comments";

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
      {/* <Splash /> */}
	  {/* <Welcome /> */}
	  {/* <Signin /> */}
	  {/* <Signup /> */}
	  {/* <Pass /> */}
	  {/* <Email /> */}
	  {/* <Home /> */}
	  <Comments />
    </FontContext.Provider>
  );
}
