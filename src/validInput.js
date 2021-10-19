function validInput(event) {
    let cleanJSON = {};
    if (event.hasOwnProperty('queryStringParameters')) {
        if (event['queryStringParameters'].hasOwnProperty('artist')) {
            cleanJSON['status'] = 200;
            cleanJSON['artist'] = event['queryStringParameters'].artist;
            return cleanJSON;
        }
    }
    cleanJSON['status'] = 404;
    return cleanJSON;
}
module.exports = validInput;
//# sourceMappingURL=validInput.js.map