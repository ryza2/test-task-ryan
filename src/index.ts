//const validInput = require('./validInput'); //needed on web ide for AWS Lambda as I didn't want to waste time trying to get IDE and AWS configured
//const itunesRequest = require('./itunesRequest')


exports.handler = async (event) => {
    //for GET query = artist=""
    let inputJSON = validInput(event);
    //inputJSON has artist name

    //make a basic request:
    if(inputJSON['status']===200){
        inputJSON['trackData'] = await itunesRequest(inputJSON['track']);
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
};
