const itunesRequest = require('./itunesRequest')

test('itunes request input', async function(){
    expect(await itunesRequest("shine+on+you+crazy+diamond")).toHaveProperty('body');
});