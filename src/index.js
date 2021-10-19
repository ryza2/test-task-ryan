//const validInput = require('./validInput'); //needed on web ide for AWS Lambda as I didn't want to waste time trying to get IDE and AWS configured
//const itunesRequest = require('./itunesRequest')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.handler = (event) => __awaiter(this, void 0, void 0, function* () {
    //for GET query = artist=""
    let inputJSON = validInput(event);
    //inputJSON has artist name
    //make a basic request:
    if (inputJSON['status'] === 200) {
        inputJSON['trackData'] = yield itunesRequest(inputJSON['track']);
    }
    //let thisEvent={}
    //thisEvent['path'] = event.path;
    //for POST
    /* if(event.body){
         thisEvent['body'] = event.body;
         if(event.body.artist){
             thisEvent['artist'] = event.body.artist;
         } else {
             thisEvent['artist'] = "";

         }
     } */
    const response = {
        statusCode: 200,
        body: JSON.stringify(inputJSON),
    };
    return response;
});
//# sourceMappingURL=index.js.map