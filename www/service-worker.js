"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","1440854fe571a04d1581c271d82d2131"],["service-worker.js","8f918ef995a9881cf7500f10cc7bb2eb"],["static/css/app.51d385f49b666d4334b5839670db07ec.css","6ab94dff6fa8e58f8ad4ea64fc9a8e4e"],["static/css/app.css","3c504a9d2ef01b1c733b4c5372879f1c"],["static/js/app.af6973bfe931805729e0.js","ee3d62510e55fb655e463e92b41883b9"],["static/js/manifest.9accb5d2e01bf4cf2ac8.js","dc928adf0b2f20539d4b6614c421414c"],["static/js/vendor.5cd0fece3bf2addbe305.js","6c386015e2583498c74278fa0a7d8a1a"],["static/lib/bootstrap-select/bootstrap-select.min.css","1dde27fd625567362692b22765e51596"],["static/lib/bootstrap-select/bootstrap-select.min.js","08c22600590b700e7d2a6b417c958c19"],["static/lib/bootstrap/css/bootstrap-theme.css","b9b46bcc4dad6cc90fc4f95073c50735"],["static/lib/bootstrap/css/bootstrap-theme.min.css","ab6b02efeaf178e0247b9504051472fb"],["static/lib/bootstrap/css/bootstrap.css","2a31dca112f26923b51676cb764c58d5"],["static/lib/bootstrap/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["static/lib/bootstrap/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["static/lib/bootstrap/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["static/lib/bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["static/lib/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["static/lib/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["static/lib/jquery/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=t),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,s,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var s=new URL(t).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,t){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],s=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,s,!1);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!t.has(s)){var a=new Request(s,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+s+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(s,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!t.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),t=urlsToCacheKeys.has(s));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});