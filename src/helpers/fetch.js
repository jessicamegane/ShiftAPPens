exports.fetch = (body, callback, json) => {
  var url = 'http://localhost:8080/api';
  fetch(url, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data_obj)
  })
  .then(res => json ? res.json() : res)
  .then(callback);
}