function validInput(event) {
    let cleanJSON = {};
    if (event.hasOwnProperty('queryStringParameters')) {
        if (event['queryStringParameters'].hasOwnProperty('track')) {
            cleanJSON['status'] = 200;
            let arrayOfName = ((event['queryStringParameters'].track).split(' '));
            let track = "";
            for (let i = 0; i < arrayOfName.length; i++) {
                track = track + '+' + arrayOfName[i];
            }
            cleanJSON['track'] = track;
            return cleanJSON;
        }
    }
    cleanJSON['status'] = 404;
    return cleanJSON;
}
module.exports = validInput;
//# sourceMappingURL=validInput.js.map