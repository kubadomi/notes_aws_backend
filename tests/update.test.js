import * as updated from '../update';

test('Is updated', async () => {
  const event = 'event';
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
  };
  //await updated.main(event, context, callback);
});