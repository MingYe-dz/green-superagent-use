import _superagent from 'superagent';
import assign from 'object-assign';

function getBasicHttpMethods() {
  return [
    'get',
    'post',
    'put',
    'head',
    'del',
    'delete',
    'options',
    'trace',
    'copy',
    'lock',
    'mkcol',
    'move',
    'purge',
    'propfind',
    'proppatch',
    'unlock',
    'report',
    'mkactivity',
    'checkout',
    'merge',
    'm-search',
    'notify',
    'subscribe',
    'unsubscribe',
    'patch',
    'search',
    'connect',
  ];
}
const uses = [];

const superagent = assign({}, _superagent);

superagent.use = (fn) => {
  uses.push(fn);
  return this;
};
const methods = getBasicHttpMethods();

methods.forEach((method) => {
  superagent[method] = (...args) => {
    let request = _superagent[method].apply(superagent, args);
    uses.forEach((use) => {
      request = request.use(use);
    });
    return request;
  };
});

module.exports = superagent;
