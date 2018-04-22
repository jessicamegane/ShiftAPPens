exports.fetch_api = (json, body, callback) => {
    fetch("http://63a6ae4a.ngrok.io",
    {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => json ? res.json() : res)
    .then(callback);
}