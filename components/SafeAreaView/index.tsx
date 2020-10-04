import React from "react";
import { SafeAreaView as VSafeAreaView } from "react-native";
import { useTheme } from "../../theme/hooks";

const SafeAreaView = ({ children }) => {
  const { colors } = useTheme();

  return (
    <VSafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColour,
        justifyContent: "center",
      }}
    >
      {children}
    </VSafeAreaView>
  );
};

export default SafeAreaView;
