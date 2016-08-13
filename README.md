# green-superagent-use

A global plugin support for SuperAgent(ES6). Can use for node, react-native, web.
There are two Items SuperagentUse and SuperagentGlobal. The common is they are all global to use.
The diff is SuperagentUse assigned the superagent, so you need import it anyWhere you want the plugins Effective,
SuperagentGlobal , you just do 'SuperagentGlobal.use' like  SuperagentUse. but no need to import it anyWhere.
just import the orginal superagent package.

(forked to koenpunt/superagent-use.)

## Summary

Instead of manually calling `use()` for every request, `use()` is called automatically for every request.

## Example

```js


import { SuperagentUse as request } from 'green-superagent-use';
import prefix from 'superagent-prefix';

request.use(prefix('https://api.example.com'));

request
  .post('/auth')
  .send({user: 'foo', pass: 'bar123'})
  .on('request', function(req) {
    console.log(req.url); // => https://api.example.com/auth
  })
  .end(function(err, res) {
    //
  });


import { SuperagentGlobal } from 'green-superagent-use';
import { request } from 'superagent';

function errorInterceptor(req) {
      req.on('response', (res) => {
        switch (res.status) {
          case 401:
            // to login
            break;
          default:
            break;
        }
      });

SuperagentGlobal.use(errorInterceptor);

request
  .post('/auth')
  .send({user: 'foo', pass: 'bar123'})
  .on('request', function(req) {
    console.log(req.url); // => https://api.example.com/auth
  })
  .end(function(err, res) {
    //
  });


    }
