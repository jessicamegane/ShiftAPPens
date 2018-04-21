To send any request to the API send a reques through the `/api` endpoint with the requested object & action name.

```json
{
  "object": "obj_name",
  "action": "add",
  "data": {
    // Good thing here
  }
}
```

Which could look like the following request in React-esque JS:

```js
voluntaryWork() {
  fetch('https://127.0.0.1/api/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'object': 'voluntary_work',
      'action': 'delete',
      data: {
        id: '14483'
    })
  })
}
```

The address `https://127.0.0.1/api/` is always static. So whatever varies in your request should be semantically reflected at the JSON `object` or `action` parameters.