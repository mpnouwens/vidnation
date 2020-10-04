
import React from "react";
import { StatusBar as VStatusBar } from "react-native";
import { useTheme } from "../../theme/hooks";

const StatusBar = () => {
  const { colors } = useTheme();

  return (
    <VStatusBar
      barStyle={colors.barStyle}
    />
  );
};

export default StatusBar;