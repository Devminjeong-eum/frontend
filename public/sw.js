if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8741ae14867907bc9768e42f00440b46"},{url:"/_next/static/X5dfPJm6ccrL6fw5DjQuE/_buildManifest.js",revision:"5f3f84163534db550b7978e42cdf4aec"},{url:"/_next/static/X5dfPJm6ccrL6fw5DjQuE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/169-4683787a3ca9c25f.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/197-9998166125ff2d26.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/23-ea8b1e77a092f7b4.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/231-af6468c9d3ea1aa9.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/336-c7dc71670120668f.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/374-2e3b1b5a23e99ab2.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/517-c3c01d769db7f654.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/659-f5a1c28958bbecc8.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/719.0654cec680b7ab1a.js",revision:"0654cec680b7ab1a"},{url:"/_next/static/chunks/843-fb0f287c060330a6.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/875-2237f211e46fdfbc.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/_not-found/page-9745cedbe2697011.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/error-88f243252c1dd2ac.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/home/page-c6ee78dc9940e41a.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/layout-bd9749cab570f9b6.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/loading-22048615d2b7a026.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/not-found-95aa1b92f921f2ad.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/page-4004b6f4db9d7d8c.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/profile/delete/page-8eaa6474b7d727bd.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/profile/page-0024bee1848611fb.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/quiz/page-bb641e6dc82d30d8.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/quiz/result/%5BquizResultId%5D/@modal/(.)share/page-008fec9e902c5976.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/quiz/result/%5BquizResultId%5D/@modal/default-ddf9010ff5009556.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/quiz/result/%5BquizResultId%5D/@modal/page-d16017910a0fd060.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/quiz/result/%5BquizResultId%5D/layout-2877ab2ed854166b.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/quiz/result/%5BquizResultId%5D/page-55e01d09e6ac61a5.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/quiz/result/%5BquizResultId%5D/share/page-1ba2366c0d2da49c.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/user/wordbook/page-24eb30ff97b8b990.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/word/search/page-87c1c85fd873f826.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/words/%5BwordName%5D/loading-41aa9b74b3e9c264.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/app/words/%5BwordName%5D/page-e73cb21df34d0ae9.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/fd9d1056-833b7b19952d094d.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/main-96a22997134cca33.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/main-app-8d79589017d7ab7c.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-61bc4fb916bb6020.js",revision:"X5dfPJm6ccrL6fw5DjQuE"},{url:"/_next/static/css/a3ffa6add98ce429.css",revision:"a3ffa6add98ce429"},{url:"/_next/static/media/119cf01b445a4dc3-s.p.woff2",revision:"76a1283c27610a9ad7d6940b9b174e46"},{url:"/_next/static/media/12f0acdcae926a24-s.p.woff2",revision:"65d0a735617322a4fe0bcc5350642159"},{url:"/_next/static/media/133c2158630b4a93-s.p.woff2",revision:"0abf4fa7d922d9d2319999c3b994565e"},{url:"/_next/static/media/4aeaaf124a5054bc-s.p.woff2",revision:"2af430c08505f68fe8ccbd974e4c85f1"},{url:"/_next/static/media/b6885b7a9c09d162-s.p.woff2",revision:"e54830d29ec09047650dbb81e9a2f3bd"},{url:"/_next/static/media/cfa29e4f0aabf12a-s.p.woff2",revision:"d3b288a528801dae385d6f104693e022"},{url:"/_next/static/media/dd3e76c51ce1a360-s.p.woff2",revision:"4e75935a8e92c6b078d8e1bafd81cb42"},{url:"/_next/static/media/e00e15f44d7b58c0-s.p.woff2",revision:"33860c9446a2671456e4619020774137"},{url:"/_next/static/media/e725ed3d1f6bc360-s.p.woff2",revision:"6e125543eff1bb5e7dde302f1f50a7b0"},{url:"/_next/static/media/fc2b22d5c5b14cbb-s.p.woff2",revision:"120b8200ef02c54246f59471bf4dfcdd"},{url:"/icon-16x16.ico",revision:"672e8b1ceed8b01f337532039b74d769"},{url:"/icon-192x192.png",revision:"ace018af023120b845c9b6ceddbed094"},{url:"/icon-256x256.png",revision:"7faefa5e89d99529e6cb746fd8d42ebc"},{url:"/icon-384x384.png",revision:"d413de32b2d3307e23c25f42fc494cb7"},{url:"/icon-512x512.png",revision:"5dcb4276321f19d7d4a5861c505f53dc"},{url:"/icon_144x144.png",revision:"db83bcaac3ba0ad95f4b8c8844d50fd6"},{url:"/icon_48x48.png",revision:"fa8267329a666e8f6ff2b4fc75149370"},{url:"/icon_96x96.png",revision:"9bedb33981661e31de158173809e74dd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
