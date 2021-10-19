const validInput = require('./validInput')

test('valid input', ()=>{
    let testJSON = {
        queryStringParameters: {
            artist: " the mars volta"
        }
    }
    expect(validInput(testJSON)).toHaveProperty('status', 200);
});