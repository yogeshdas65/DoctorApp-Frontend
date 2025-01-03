import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomText from "@components/Ui/Customtext"; // Adjust the import path as needed.
import { Colors, Fonts } from "@utils/Constants";
import imgparth from "@assets/images/profile.png";
import CustomSafeAreaView from "@components/global/CustomSafeAreaView";

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="more-horiz" size={24} color={Colors.primary} />
        </TouchableOpacity>

        <Image source={imgparth} style={styles.profileImage} />

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications" size={24} color={Colors.primary} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
      </View>

      <CustomSafeAreaView>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View
            style={
              (styles.welcomeTextContainer, [{ width: "60%", margin: 10 }])
            }
          >
            <CustomText
              variant="h1"
              fontFamily={Fonts.Regular}
              style={styles.greeting}
            >
              Welcome
            </CustomText>
            <CustomText
              variant="h1"
              fontFamily={Fonts.Regular}
              style={styles.userName}
            >
              Jovana
            </CustomText>
          </View>
          <View
            style={
              (styles.welcomeTextContainer, [{ width: "15%", margin: 30 }])
            }
          >
            <View style={{ backgroundColor: Colors.background , padding:15 , borderRadius: 25}}>
              <TouchableOpacity>
                <Icon name="calendar-today" size={24} color={Colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomSafeAreaView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_Blue, // Light blue background
    paddingHorizontal: 20,
    paddingTop: 30, // Spacing from the top of the screen
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 15,
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    backgroundColor: "#FF3B30", // Red color for badge
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#FFFFFF", // White border for badge
  },
  welcomeTextContainer: {
    marginTop: 20,
  },
  greeting: {
    color: Colors.primary_light,
    marginBottom: 5,
  },
  userName: {
    color: Colors.primary_light,
  },
});

export default HomeScreen;
