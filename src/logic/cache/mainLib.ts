export async function loadPlayerFromStorage(
	playerId: string
): Promise<Player | string> {
	return new Promise((resolve, _reject) => {
		setTimeout(() => {
			resolve(<Player>{
				playerId: playerId,
				playerName: "Test",
				createdAt: 123456,
				isActive: true
			});
		}, 3000);
	});
}
