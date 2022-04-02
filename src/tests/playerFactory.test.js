import {makeShip} from "../factories/shipFactory.js";
import {makeBoard} from "../factories/gameboardFactory.js";
import {makePlayer} from "../factories/playerFactory.js";

describe('Make random move', () => {
	test('No previous attack', () => {
		const board = makeBoard()
		board.placeShip([1,5])
		board.placeShip([11,12,13,14,15])
		const player = makePlayer()
		const rd = player.randomAttack(board.gbProgress)
		board.receiveAttack( rd )
		const sum = board.gbProgress.reduce((partialSum, element) => partialSum + element, 0) 
		let result = false
		if ((sum == -99) || (sum == 1000)) {
			result = true
		}
		expect( result ).toBe( true );
	});
	test('Two previous attacks', () => {
		const board = makeBoard()
		board.placeShip([1,5])
		board.placeShip([11,12,13,14,15])
		board.receiveAttack(15)
		board.receiveAttack(2)
		const player = makePlayer()
		const rd = player.randomAttack(board.gbProgress)
		board.receiveAttack( rd )
		const sum = board.gbProgress.reduce((partialSum, element) => partialSum + element, 0) 
		let result = false
		if ((sum == 802) || (sum == 1901)) {
			result = true
		}
		expect( result ).toBe( true );
	});
});

