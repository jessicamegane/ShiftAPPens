exports.request = (object, action, verb, data_obj) => {
  var url = 'http://localhost:8080/api';
  fetch(url, {
    method: verb,
    action: action,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      'object': object,
      'action': action,
      data: data_obj
    }
  });
}