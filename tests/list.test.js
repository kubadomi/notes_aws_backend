import * as listed from '../list';

test('Is listed', async () => {
  const event = 'event';
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };
});