import {makeShip} from "../factories/shipFactory.js";

describe('Hit ship', () => {
	test('one hit', () => {
		const ship = makeShip( [4,5,6,7] );
		ship.hit(2);
		expect( ship.hitStatus ).toEqual( [false,false,true,false] );
	});
	test('two hits', () => {
		const ship = makeShip( [11,12,13,14,15,16,17,18] );
		ship.hit(0);
		ship.hit(7);
		expect( ship.hitStatus ).toEqual( [true, false, false, false, false, false, false, true] );
	});
});

describe('Sinked ship', () => {
	test('isSunk true', () => {
		const ship = makeShip( [24,25,26] );
		ship.hit(0);
		ship.hit(1);
		ship.hit(2);
		expect( ship.isSunk() ).toBe( true );
	});
	test('isSunk false', () => {
		const ship = makeShip( [24,25,26,27,28] );
		ship.hit(0);
		ship.hit(1);
		ship.hit(2);
		ship.hit(4);
		expect( ship.isSunk() ).toBe( false );
	});
});

describe('Coordinates ship', () => {
	test('check 1', () => {
		const ship = makeShip( [24,25,26] );
		expect( ship.coord ).toEqual( [24,25,26] );
	});
	test('check 2', () => {
		const ship = makeShip( [24,25,26] );
		expect( ship.coord.findIndex( (element) => element==25 )).toBe( 1 );
	});
});