import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./Splash.styles";
import { useContext } from "react";
import { PlayerContext } from "../../../context/playerContext";

export default function Splash() {
	// const { playerName, dispatch } = useContext(PlayerContext);
	// const createNewPlayer = () => {
	// 	console.log(playerName);
	// 	dispatch({ type: "new_player", payload: "BOB" })
	// };
	// const deletePlayer = () => {
	// 	dispatch({ type: "delete_player", payload: "BOB" })
	// };

	return (
		<View style={styles.container}>
			<Text>Test</Text>
			{/* <Button title='New Player' onPress={createNewPlayer}>
				New player!
			</Button>
			<Button title='Delete Player' onPress={deletePlayer}>
				Delete player!
			</Button> */}
		</View>
	);
}
