function validInput(event:Object) :Object {
    let cleanJSON = {};
    if(event.hasOwnProperty('queryStringParameters')){
        if(event['queryStringParameters'].hasOwnProperty('artist')){
            cleanJSON['status']=200;
            let arrayOfName = ((event['queryStringParameters'].artist).split(' '));
            let artist="";
            for(let i=0;i<arrayOfName.length;i++){
                artist = artist+'+'+arrayOfName[i];
            }
            cleanJSON['artist'] = artist;
            return cleanJSON;
        }
    }
    cleanJSON['status']=404;
    return cleanJSON;
}

module.exports = validInput;