"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","445f56ed60e70ea92e3d871c19a21eea"],["static/css/app.b39077a46aaef84dd04645bad60c5d94.css","a1e9d7ebe7c19628ae214d459cc3a5b0"],["static/css/app.css","db4334e61e755384b98d9c5c07346c21"],["static/js/app.7dc117a546784a637c82.js","7b6ba318bafb1130964956aea94e4cba"],["static/js/manifest.307443bc6a8b808a94c0.js","303c2466adc0174671c4368615ac454c"],["static/js/vendor.eacc6ad2c7156258c7fa.js","22d6512b1169dbe324292d45b180c6c3"],["static/lib/bootstrap-select/bootstrap-select.min.css","1dde27fd625567362692b22765e51596"],["static/lib/bootstrap-select/bootstrap-select.min.js","b11855265dbb69e2fa25eead0ccec00b"],["static/lib/bootstrap/css/bootstrap-theme.css","5e55d993120696109783de9ffc5dec48"],["static/lib/bootstrap/css/bootstrap-theme.min.css","9f0b6c56b43e75b28733a94b2d1eb302"],["static/lib/bootstrap/css/bootstrap.css","794f8177af9645a4f4e2d74fa0c1cc73"],["static/lib/bootstrap/css/bootstrap.min.css","5057f321f0dc85cd8da94a0c5f67a8f4"],["static/lib/bootstrap/js/bootstrap.js","24276f268f56771dc4141e6b3d93a2aa"],["static/lib/bootstrap/js/bootstrap.min.js","04c84852e9937b142ac73c285b895b85"],["static/lib/bootstrap/js/npm.js","9ec191bedba9f5132306169274b67e05"],["static/lib/font-awesome-4.7.0/css/font-awesome.css","4bb3dd721c4652feee0953261d329710"],["static/lib/font-awesome-4.7.0/css/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["static/lib/jquery/jquery.min.js","473957cfb255a781b42cb2af51d54a3b"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var s=new URL(e);return"/"===s.pathname.slice(-1)&&(s.pathname+=t),s.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,s,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(s)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var s=new URL(t).pathname;return e.some(function(e){return s.match(e)})},stripIgnoredUrlParameters=function(e,t){var s=new URL(e);return s.hash="",s.search=s.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),s.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],s=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,s,!1);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(s){if(!t.has(s)){var a=new Request(s,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+s+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(s,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(s){return Promise.all(s.map(function(s){if(!t.has(s.url))return e.delete(s)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,s=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(s))||(s=addDirectoryIndex(s,"index.html"),t=urlsToCacheKeys.has(s));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(s)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});