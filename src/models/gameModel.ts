import { GamePlayer } from "./player";

export default interface Game {
	gameId: string;
	createdAt: number;
	currentRunTime: number;
	isPaused: boolean;
	isActive: boolean;
	player: GamePlayer;
}
