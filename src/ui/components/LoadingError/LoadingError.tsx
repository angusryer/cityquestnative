import React from "react";
import { Text, View } from "react-native";

type ErrorProps = {
	message?: string;
};

export default function LoadingError({ message }: ErrorProps) {
	return (
		<View>
			<Text>{message}</Text>
		</View>
	);
}
