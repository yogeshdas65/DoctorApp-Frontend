import { View, Text } from "react-native";
import React, { FC } from "react";
import {
  NavigationContainer,
  ParamListBase,
  useLinkBuilder,
  useTheme,
} from "@react-navigation/native";
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "@features/HomeScreen";
import ProfileScreen from "@features/Appointments";
import MyProfile from "@features/MyProfile";
import { PlatformPressable } from "@react-navigation/elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RFValue } from "react-native-responsive-fontsize";
import Appointments from "@features/Appointments";
import MyDocuments from "@features/MyDocuments";

type MyTabBarProps = {
  state: {
    index: number;
    routes: Array<{
      key: string;
      name: string;
      params?: object;
    }>;
  };
  descriptors: {
    [key: string]: {
      options: BottomTabNavigationOptions;
    };
  };
  navigation: BottomTabNavigationProp<ParamListBase>;
};

const Navigation: FC = () => {
  function MyTabBar({ state, descriptors, navigation }: MyTabBarProps) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              key={route.key}
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                <Icon
                  name={label}
                //   color="#006BFF"
                  style={{ margin: 10 }}
                  size={RFValue(30)}
                />
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    );
  }

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          headerShown: false, // Disable the header globally
          // tabBarStyle: { position: 'absolute' },
          // tabBarBackground: () => (),
        }}
      >
        <Tab.Screen name="home-outline" component={HomeScreen} />
        <Tab.Screen name="clock-check-outline" component={Appointments} />
        <Tab.Screen name="file-document-outline" component={MyDocuments} />
        <Tab.Screen name="shield-account-outline" component={MyProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;