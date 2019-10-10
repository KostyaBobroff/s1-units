import {getDate} from './getDate';

describe('getDate', ()=> {
  it('empty param', ()=> {
    const date = 0
    const result = getDate(date);
    expect(result).toBe("1 января, чт, 1970 год");
  });
});