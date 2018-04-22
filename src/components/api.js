exports.fetch_api = (json, body, callback) => {
    fetch("http://dca6dff1.ngrok.io/api",
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