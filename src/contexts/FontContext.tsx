import { useFonts } from "expo-font";
import { createContext, ReactNode } from "react";

export const FontContext = createContext<{} | null>(null);

export default function FontProvider({ children }: { children: ReactNode }) {
  const [isFontLoaded] = useFonts({
    ArFont: require(""), // TBS
    EnFont: require(""), // TBS
  });

  if (!isFontLoaded) {
    return null;
  }

  return <FontContext.Provider value={{}}>{children}</FontContext.Provider>;
}
