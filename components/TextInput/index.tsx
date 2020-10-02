import React, { FunctionComponent } from "react";
import { TextInput as VTextInput } from "react-native";

type TextInputProps = {
  placeholder: string;
  onChangeText: any;
  padding: number;
  marginBottom?: number;
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
        height: 60,
        borderColor: borderColor,
        width: "100%"
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onTouchStart={onTouchStart}
    />
  );
};

export default TextInput;