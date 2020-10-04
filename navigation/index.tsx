import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { MasterDetail } from "../screens";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "../theme/hooks";

const Stack = createStackNavigator();

function RoutesNavigator(navigation: any) {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerBackTitle: "Back",
        headerTintColor: "#EE1E53",
        headerTitleStyle: {
          color: colors.navTextColour,
          fontSize: 25,
        },
        headerBackTitleStyle: {
          color: "#EE1E53",
        },
        headerStyle: {
          backgroundColor: colors.navBackground,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}
    >
      <>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            title: (
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            ),
          }}
        />
        <Stack.Screen
          name="MasterDetail"
          component={MasterDetail}
          options={({ route }) => ({ title: route.params.myTitle || " Hello" })}
        />
      </>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 40,
  },
});

export default RoutesNavigator;
