function ajax(url, data, callback) {
    var req = false;
    req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            callback(req);
        }
    }
    req.send(data);
}

function feelings() {
    twitter();
    bing();
    ajax('/feelings', document.search.query.value, function (req) {
        var obj = JSON.parse(req.responseText);
        console.log(obj);
        document.getElementById('firstEmotion').innerHTML = obj['emotion'];
        document.getElementById('firstObject').innerHTML = obj['focus'];
    });
}
function twitter() {    
    ajax('/twitter', document.search.query.value, function (req) {
        var obj = JSON.parse(req.responseText);
        console.log(obj);
        document.getElementById('twitterEmotion').innerHTML = obj['emotion'];
    });
}
function bing() {    
    ajax('/bing', document.search.query.value, function (req) {
        var obj = JSON.parse(req.responseText);
        console.log(obj);
        document.getElementById('bingEmotion').innerHTML = req.responseText;
    });
}