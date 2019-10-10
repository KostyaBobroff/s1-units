import React from 'react'
import {sortByItemCount, sortByDate, sortOrders, sortByItemNames} from './sortOrders';
import {fakeOrders} from '../mock/fakeOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});
	//my test
	it('empty params', ()=> {
		const result = sortByItemCount();
		expect(result).toBe(0);
	});

	it('one param', ()=> {
		const order1 = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemCount(order1);
		expect(result).toBe(0);
	});
	it('wrong key', ()=> {
		const order1 = {
			itemList: ['item1', 'item2'],
		};
		const order2 = {
			items: ['1', '2'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toBe(0);
	});
	it('first list length > second list length', ()=> {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};
		const order2 = {
			items: ['1', '2'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toBe(1);
	});
	it('first list length < second list length', ()=> {
		const order1 = {
			items: ['item1', 'item2'],
		};
		const order2 = {
			items: ['1', '2', '3'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toBe(-1);
	});
});

describe('sortOrders function', () => {
	it('empty params', () => {
		const result = sortOrders();
		expect(result).toBe(undefined);
	});
	it('has one param', () => {
		const result = sortOrders(fakeOrders);
		expect(result).toBeUndefined()
	});
	it('has one param', () => {
		
		const result = sortOrders(fakeOrders, '1');
		expect(result).toBeUndefined()
	});
});

describe('sortByItemNames funtion', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});
	it('empty params', ()=> {
		const result = sortByItemNames();
		expect(result).toBe(0);
	});
	it('one param', ()=> {
		const order1 = {
			items: ['1', '2']
		};
		const result = sortByItemCount(order1);
		expect(result).toBe(0);
	}); 
	it('first list > second list', ()=> {
		const order1 = {
			items: ['5', '6'],
		};

		const order2 = {
			items: ['1','2']
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});
	it('first list < second list', ()=> {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = {
			items: ['5','6']
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});
});

describe('sortByDate function', ()=> {
	it('first object date > second object date', ()=> {
		const order1 = {date: 12222};
		const order2 = {date: 12};

		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
	});
	it('first object date < second object date', ()=> {
		const order1 = {date: 12222};
		const order2 = {date: 1233333};

		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	});
	it('first object date === second object date', ()=> {
		const order1 = {date: 12222};
		const order2 = {date: 12222};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});
});
