import {makeShip} from "../factories/shipFactory.js";

describe('Hit ship', () => {
	test('one hit', () => {
		const ship = makeShip(4);
		ship.hit(2);
		expect( ship.status() ).toEqual( [false,false,true,false] );
	});
	test('two hits', () => {
		const ship = makeShip(8);
		ship.hit(0);
		ship.hit(7);
		expect( ship.status() ).toEqual( [true, false, false, false, false, false, false, true] );
	});
});

describe('Sinked ship', () => {
	test('isSunk true', () => {
		const ship = makeShip(3);
		ship.hit(0);
		ship.hit(1);
		ship.hit(2);
		expect( ship.isSunk() ).toBe( true );
	});
	test('isSunk false', () => {
		const ship = makeShip(5);
		ship.hit(0);
		ship.hit(1);
		ship.hit(2);
		ship.hit(4);
		expect( ship.isSunk() ).toBe( false );
	});
});