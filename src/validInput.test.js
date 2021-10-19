const validInput = require('./validInput')

test('valid input', ()=>{
    let testJSON = {
        queryStringParameters: {
            track: "shine"
        }
    }
    expect(validInput(testJSON)).toHaveProperty('status', 200);
});