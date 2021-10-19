const itunesRequest = require('./itunesRequest')

test('itunes request input', async function(){
    expect(await itunesRequest("jack johnson")).toHaveProperty('body');
});