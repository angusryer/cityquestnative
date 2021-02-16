import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import { Coordinates, GameObject } from "../../models/types";
import { Player } from "../../models/player";

export const guestPlayer: Player = {
	playerId: "0110011101110101011001010111001101110100",
	createdAt: 0,
	displayName: "Guest Player",
	changeDisplayName: function (nameValue) {
		this.displayName = nameValue;
	},
	signOut: () => {
		return null;
	},
	deleteAccount: () => {
		return null;
	}
};

// Set up Action Types
type Action = ReturnType<
	| typeof signOutAction
	| typeof deleteAccountAction
	| typeof changeDisplayNameAction
	| typeof updateLocationAction
	| typeof addGameObjectAction
	| typeof removeGameObjectAction
>;

// Set up Actions
const SIGN_OUT = "sign_out";
const DELETE_ACCOUNT = "delete_account";
const CHANGE_DISPLAY_NAME = "change_display_name";
const UPDATE_LOCATION = "update_location";
const ADD_GAME_OBJECT = "add_game_object";
const REMOVE_GAME_OBJECT = "remove_game_object";

export function signOutAction() {
	return <const>{
		type: SIGN_OUT
	};
}

export function deleteAccountAction() {
	return <const>{
		type: DELETE_ACCOUNT
	};
}

export function changeDisplayNameAction(displayName: string) {
	return <const>{
		type: CHANGE_DISPLAY_NAME,
		payload: displayName
	};
}

export function updateLocationAction(locationXYArray: Coordinates) {
	return <const>{
		type: UPDATE_LOCATION,
		payload: locationXYArray
	};
}

export function addGameObjectAction(gameObject: GameObject) {
	return <const>{
		type: ADD_GAME_OBJECT,
		payload: gameObject
	};
}

export function removeGameObjectAction(gameObjectId: string) {
	return <const>{
		type: REMOVE_GAME_OBJECT,
		payload: gameObjectId
	};
}

export function playerReducer(player: Player, action: Action) {
	switch (action.type) {
		case "update_player":
			return { ...action.payload }; // TODO update a player to cache and db
		case "delete_player":
			return guestPlayer; // TODO also remove existing player using action.payload (playerId)
		case "load_player":
			return { ...player, playerId: action.payload }; // TODO load player from cache or db
		case "new_player":
			return {
				playerId: uuid(),
				playerName: action.payload,
				createdAt: Date.now(),
				isActive: true
			};
		default:
			return player;
	}
}

export default function usePlayer(player = guestPlayer) {
	return useReducer(playerReducer, player);
}
