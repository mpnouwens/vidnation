import React, { FunctionComponent } from "react";
import { TextInput as VTextInput, Platform } from "react-native";

type TextInputProps = {
  placeholder: string;
  onChangeText: any;
  padding: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  secureTextEntry?: boolean;
  onTouchStart?: any;
  backgroundColor: string;
  color: string;
  borderColor: string;
  fontSize?: number;
};

const TextInput: FunctionComponent<TextInputProps> = ({
  placeholder,
  onChangeText,
  padding,
  marginBottom,
  marginRight,
  marginLeft,
  secureTextEntry,
  onTouchStart,
  backgroundColor,
  color,
  borderColor,
  fontSize,
}) => {
  return (
    <VTextInput
      style={{
        backgroundColor: backgroundColor,
        color: color,
        marginBottom: marginBottom,
        borderRadius: 10,
        padding: padding,
        fontSize: fontSize,
        height: 50,
        borderColor: borderColor,
        width: Platform.OS === "web" ? "100%" : "65%",
        marginRight: marginRight,
        marginLeft: marginLeft,
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onTouchStart={onTouchStart}
      placeholderTextColor="gray"
    />
  );
};

export default TextInput;
