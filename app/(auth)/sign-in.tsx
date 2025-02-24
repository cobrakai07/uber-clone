import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import Oauth from "@/components/Oauth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className=" z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome
          </Text>
        </View>
        <View className="p-5">
          {/* <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          /> */}

          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter your Password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Sign Up"
            onPress={onSignInPress}
            className="mt-6"
          />
          {/* Oauth */}
          <Oauth/>
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account?{" "}</Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
        {/* verification model */}
      </View>
    </ScrollView>
  );
};

export default SignIn;




{/* <View className='bg-[#1B85F3] h-screen'>
<Image source={require("../../assets/images/hero.png")} className='w-[100%] h-[500px]'/>
<Text className='text-center text-white font-bold text-[40px] my-5'>User App</Text>
<Text className='text-white text-center my-3'>
  This is the perfect place to keep track of your hobbies and practice the sports you like !
</Text>
<TouchableOpacity className='bg-white m-5 p-5 rounded-xl mt-28'>
  <Text className='text-blue-500 text-center text-lg font-semibold'>
    Login Now
  </Text>
</TouchableOpacity>
</View> */}