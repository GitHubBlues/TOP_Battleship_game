import {makeBoard} from "../factories/gameboardFactory.js";

describe('Ship placement', () => {
	test('Added to ship database', () => {
		const board = makeBoard();
		board.placeShip([1,5])
		board.placeShip([11,12,13,14,15])
		board.placeShip([44])
		expect( [ board.dbShips[0].length,  board.dbShips[1].length,  board.dbShips[2].length ]).toEqual( [2,5,1] );
	});

	test('Added to ship gameboard', () => {
		const board = makeBoard();
		board.placeShip([31,32,33,34,35])
		board.placeShip([27,28])
		board.placeShip([17])
		expect( board.gbShips ).toEqual(  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] );
	});
});

describe('Receive attacks', () => {
	test('2 hits - test shipo database', () => {
		const board = makeBoard();
		board .placeShip([1,5])
		board .placeShip([11,12,13,14,15])
        board .receiveAttack(1)
        board .receiveAttack(13)		
		expect( [board.dbShips[0].hitStatus, board.dbShips[1].hitStatus] ).toEqual( [[true, false], [false, false, true, false, false]] );
	});
	test('2 missess - test ship database', () => {
		const board = makeBoard();
		board .placeShip([1,5])
		board .placeShip([11,12,13,14,15])
		board .receiveAttack(91)
        board .receiveAttack(53)
		expect( [board.dbShips[0].hitStatus, board.dbShips[1].hitStatus] ).toEqual( [[false, false], [false, false, false, false, false]] );
	});
	test('test Progress board', () => {
		const board = makeBoard();
		board .placeShip([1,5])
		board .placeShip([11,12,13,14,15])
		board .receiveAttack(1)
        board .receiveAttack(95)
		board .receiveAttack(2)
		board .receiveAttack(15)
		expect( board.gbProgress ).toEqual( [0,1000,-99,0,0,0,0,0,0,0,0,0,0,0,0,1000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-99,0,0,0,0] );
	});
});


describe('Sunk ships', () => {
	test('sunk one ship', () => {
		const board = makeBoard();
		board .placeShip([1,5])
		board .placeShip([11,12,13,14,15])
        board .receiveAttack(1)
        board .receiveAttack(33)	
		board .receiveAttack(5)	
		expect( board.allSunk( board.dbShips ) ).toBe( false );
	});
	test("sunk all", () => {
		const board = makeBoard();
		board.placeShip([1,5])
		board.placeShip([11,12,13,14,15])
        board.receiveAttack(1)
        board.receiveAttack(33)	
		board.receiveAttack(5)	
		board.receiveAttack(11)	
		board.receiveAttack(12)	
		board.receiveAttack(13)	
		board.receiveAttack(14)	
		board.receiveAttack(15)			
		expect( board.allSunk( board.dbShips) ).toBe( true );
	});
});