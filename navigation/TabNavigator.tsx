import * as React from "react";
import {
    FontAwesome,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Movies, Series } from "../screens";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";

enableScreens();
const Tab = createBottomTabNavigator();

const MovieStack = createStackNavigator();
const MovieStackScreen = () => {
    return (
        <MovieStack.Navigator>
            <MovieStack.Screen
                name="Movies"
                component={Movies}
                options={{
                    title: <Image source={require("../assets/logo.png")} style={styles.logo} />,
                }}
            />
        </MovieStack.Navigator>
    );
};

const SeriesStack = createStackNavigator();
const SeriesStackScreen = () => {
    return (
        <SeriesStack.Navigator>
            <SeriesStack.Screen
                name="Series"
                component={Series}
                options={{ title: <Image source={require("../assets/logo.png")} style={styles.logo} /> }}
            />
        </SeriesStack.Navigator>
    );
};

function MyTabs() {
    //   const { colors } = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Discover"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: "#84B5F7",
                inactiveTintColor: "#CDCDCD",
                // style: {
                //   backgroundColor: colors.keyBoardAvoidingViewColor,
                // },
            }}
        >
            <Tab.Screen
                name="Search"
                component={MovieStackScreen}
                options={{
                    tabBarLabel: "Discover",
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="movie-roll"
                            size={30}
                            color={focused ? "#EE1E53" : "#CDCDCD"}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Series"
                component={SeriesStackScreen}
                options={{
                    tabBarLabel: "Series",
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons
                            name="television-box"
                            size={29}
                            color={focused ? "#EE1E53" : "#CDCDCD"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 40,
    }
})


export default MyTabs;