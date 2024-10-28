import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
	return (
    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary items-center flex flex-row space-x-4">
      <TextInput
        className="mt-0.5 text-white flex-1 font-pregular text-base h-full"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        autoCapitalize="none"
        onChangeText={handleChangeText}
        autoCorrect={false}
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode='contain'
        />
      </TouchableOpacity>
			</View>
	);
};

export default SearchInput;
