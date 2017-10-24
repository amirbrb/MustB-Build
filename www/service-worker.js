"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","cc9b29ce1166311b4731619550664b8d"],["service-worker.js","2348cc984d8790e60faf1f57323e1081"],["static/css/app.aabf7972df18d0255a7600a12928d4c8.css","24c90da74fc3d9d8a7f6c50e1dae7c5a"],["static/css/app.css","86eca7a5f451c250c3ed1adcc9451793"],["static/js/app.8ea19083a25a2c628c0a.js","95def2329f34180831a9a0507b2eb2c2"],["static/js/manifest.66244318407a77e97645.js","48e3c05068cf94bc360a061f20709ca5"],["static/js/vendor.620157bee18c656d5942.js","b58c4fbce14165eefda840d808455149"],["static/lib/bootstrap/css/bootstrap-theme.css","b9b46bcc4dad6cc90fc4f95073c50735"],["static/lib/bootstrap/css/bootstrap-theme.min.css","ab6b02efeaf178e0247b9504051472fb"],["static/lib/bootstrap/css/bootstrap.css","2a31dca112f26923b51676cb764c58d5"],["static/lib/bootstrap/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["static/lib/bootstrap/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["static/lib/bootstrap/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["static/lib/bootstrap/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["static/lib/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["static/lib/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["static/lib/jquery/jquery-ui.min.js","04e1ef8f7cfddeafa34d3a66fe98ef7f"],["static/lib/jquery/jquery.min.js","d4a20d75db01a33e2d65e303ce5c34f3"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,!1);return[s.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});