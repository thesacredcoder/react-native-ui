import React from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Text,
} from "react-native";

import styled from "styled-components";

const Input = ({ icon, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputField}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#BCE0FD"
          style={styles.inputText}
          secureTextEntry={secureTextEntry ? true : false}
        ></TextInput>
      </View>
    </View>
  );
};

const SocialAppIcon = ({ icon }) => {
  return (
    <TouchableOpacity style={styles.appIconView}>
      <Image source={{ uri: icon }} style={styles.icon} />
    </TouchableOpacity>
  );
};

function index() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.signUpView}>
        <Input
          icon="https://musicoding.com/content/images/apps/user_icon.png"
          placeholder="Full Name"
        />
        <Input
          icon="https://musicoding.com/content/images/apps/mail_icon.png"
          placeholder="Email"
        />
        <Input
          icon="https://musicoding.com/content/images/apps/lock_icon.png"
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.buttonComponent}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
        <View style={styles.appGroup}>
          <SocialAppIcon icon="https://musicoding.com/content/images/apps/facebook_icon.png" />
          <SocialAppIcon icon="https://musicoding.com/content/images/apps/twitter_icon.png" />
          <SocialAppIcon icon="https://musicoding.com/content/images/apps/google_icon.png" />
        </View>
        <HaveAccountText>Already have an account?</HaveAccountText>
      </View>
    </View>
  );
}

const HaveAccountText = styled.Text`
  margin: 63px 60px 0px;
  font-size: 16px;
  line-height: 20px;
  color: #2966fb;
  text-align: center;
`;

const styles = StyleSheet.create({
  appGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 64,
    marginRight: 64,
    marginTop: 56,
  },
  appIconView: {
    alignItems: "center",
    borderColor: "#bce0fd",
    borderRadius: 56,
    borderWidth: 1,
    height: 56,
    justifyContent: "center",
    width: 56,
  },
  buttonComponent: {
    alignItems: "center",
    backgroundColor: "#2699fb",
    borderRadius: 4,
    height: 48,
    justifyContent: "center",
    marginLeft: 24,
    marginRight: 24,
    marginTop: 42,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    height: 16,
    width: 16,
  },
  inputField: {
    height: 48,
    marginVertical: 8,
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: "#bce0fd",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  inputText: {
    marginLeft: 20,
    color: "#2699fb",
    fontSize: 14,
    lineHeight: 16,
  },
  signUpView: {
    height: 439,
    marginHorizontal: 24,
    marginTop: 136,
    backgroundColor: "#fff",
  },
});

export default index;
