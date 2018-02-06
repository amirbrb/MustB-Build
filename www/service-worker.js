"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","fb009707552941311e1444db6ab7023f"],["service-worker.js","ffa6b6d75a962eff25d2f343e87bdbba"],["static/css/app.82dce95eb0f783a28ea85b738f45d55e.css","dd8ad2fab225898fc97e85a7ecc2bae7"],["static/css/app.css","f19baee3abbe57e7db7a3b6108b37c3f"],["static/js/app.0857ba054104d323f730.js","ad14d992fad07ff6e404d1e396862cb4"],["static/js/manifest.e92b60d73bb778ce5a7b.js","2190b6a4f5e3c734da7661c67e00ff1a"],["static/js/vendor.e5d772e302f0ed082822.js","12ffcffac14a0119f285bcaadcb8eaaa"],["static/lib/bootstrap-select/bootstrap-select.min.css","1dde27fd625567362692b22765e51596"],["static/lib/bootstrap-select/bootstrap-select.min.js","b11855265dbb69e2fa25eead0ccec00b"],["static/lib/bootstrap/css/bootstrap-theme.css","5e55d993120696109783de9ffc5dec48"],["static/lib/bootstrap/css/bootstrap-theme.min.css","9f0b6c56b43e75b28733a94b2d1eb302"],["static/lib/bootstrap/css/bootstrap.css","794f8177af9645a4f4e2d74fa0c1cc73"],["static/lib/bootstrap/css/bootstrap.min.css","5057f321f0dc85cd8da94a0c5f67a8f4"],["static/lib/bootstrap/js/bootstrap.js","24276f268f56771dc4141e6b3d93a2aa"],["static/lib/bootstrap/js/bootstrap.min.js","04c84852e9937b142ac73c285b895b85"],["static/lib/bootstrap/js/npm.js","9ec191bedba9f5132306169274b67e05"],["static/lib/font-awesome-4.7.0/css/font-awesome.css","4bb3dd721c4652feee0953261d329710"],["static/lib/font-awesome-4.7.0/css/font-awesome.min.css","a0e784c4ca94c271b0338dfb02055be6"],["static/lib/jquery/jquery.min.js","473957cfb255a781b42cb2af51d54a3b"]],cacheName="sw-precache-v3-my-vue-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,!1);return[s.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});