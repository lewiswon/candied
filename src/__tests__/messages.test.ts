import Dbc from '../dbc/dbc';
import { MessageDoesNotExist } from '../dbc/errors';

test('DBC_template.dbc: Correct Message Count', () => {
  const dbc = new Dbc();
  dbc.load('src/__tests__/testFiles/DBC_template.dbc').then((data) => {
    expect(data.messages.size).toBe(2);
  });
});

test('SimpleDBC.dbc: Correct Message Count', () => {
  const dbc = new Dbc();
  dbc.load('src/__tests__/testFiles/SimpleDBC.dbc').then((data) => {
    expect(data.messages.size).toBe(2);
  });
});

test('tesla_can.dbc: Correct Message Count', () => {
  const dbc = new Dbc();
  dbc.load('src/__tests__/testFiles/tesla_can.dbc').then((data) => {
    expect(data.messages.size).toBe(42);
  });
});

test('DBC_template.dbc: Correct Message Names', () => {
  const dbc = new Dbc();
  dbc.load('src/__tests__/testFiles/DBC_template.dbc').then((data) => {
    expect(Array.from(data.messages.keys()).sort()).toEqual(['CANMessage', 'CANMultiplexed'].sort());
  });
});

test('DBC_template.dbc: Get Message By ID', () => {
  const dbc = new Dbc();
  dbc.load('src/__tests__/testFiles/DBC_template.dbc').then((data) => {
    const msg = dbc.data.messages.get('CANMessage');
    expect(dbc.getMessageById(1234)).toEqual(msg);
  });
});

/*
test('DBC_template.dbc: Get Message By ID Error', () => {
  const dbc = new Dbc();
  dbc.load('src/__tests__/testFiles/DBC_template.dbc').then((data) => {
    const msg = dbc.data.messages.get('CANMessage');
    expect(dbc.getMessageById(1000)).toThrowError();
  });
});
*/
