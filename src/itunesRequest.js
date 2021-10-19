var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var http = require('https');
function itunesRequest(track) {
    return __awaiter(this, void 0, void 0, function* () {
        return httprequest(track).then((data) => {
            const response = {
                statusCode: 200,
                body: JSON.stringify(data),
            };
            return response;
        });
    });
}
;
function httprequest(track) {
    return new Promise((resolve, reject) => {
        const options = {
            host: 'itunes.apple.com',
            path: '/search?term=' + track + '&entity=musicTrack&attribute=ratingIndex&limit=10',
            port: 443,
            method: 'GET'
        };
        const req = http.request(options, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            var body = [];
            res.on('data', function (chunk) {
                body.push(chunk);
            });
            res.on('end', function () {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                }
                catch (e) {
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
//# sourceMappingURL=itunesRequest.js.map