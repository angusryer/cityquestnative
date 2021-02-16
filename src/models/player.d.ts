import type { GameResponse, Coordinates, GameObject } from "./types";

interface Player {
	playerId: string;
	createdAt: number;
	displayName: string;
	changeDisplayName(displayName: string): void;
	signOut(): GameResponse?;
	deleteAccount(): GameResponse?;
}

interface GamePlayer extends Player {
	location: Coordinates;
	tools: Array<GameObject>;
	clues: Array<GameObject>;
	updateLocation(coords: Coordinates): Coordinates;
	addTool(tool: GameObject): GameResponse;
	removeTool(toolId: string): GameResponse;
	addClue(clue: GameObject): GameResponse;
	removeClue(clueId: GameObject): GameResponse;
}
