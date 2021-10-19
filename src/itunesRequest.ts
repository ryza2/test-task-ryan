var http = require('https');

async function itunesRequest(track) {
    return httprequest(track).then((data) => {
        const response = {
            statusCode: 200,
            body: JSON.stringify(data),
        };
        return response;
    });
};
function httprequest(track) {
    return new Promise((resolve, reject) => {
        const options = {
            host: 'itunes.apple.com',
            path: '/search?term='+track+'&entity=musicTrack&attribute=ratingIndex&limit=10',
            port: 443,
            method: 'GET'
        };
        const req = http.request(options, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            var body = [];
            res.on('data', function(chunk) {
                body.push(chunk);
            });
            res.on('end', function() {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        req.on('error', (e) => {
            reject(e.message);
        });
        // send the request
        req.end();
    });
}

module.exports = itunesRequest;