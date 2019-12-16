import * as searched from '../search';

test('If created', async () => {
  const event = 'event';
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("json");
  };
  //await searched.main(event, context, callback);
});