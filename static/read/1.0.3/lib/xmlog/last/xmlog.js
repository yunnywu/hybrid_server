!function(e,t){function r(){return"xm_"+ +new Date+"_"+(+new Date).toString(36)+Math.random().toString(36).substr(2,6)}function o(){return+new Date}function n(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function i(e,t,r){var o={};for(var n in e)e.hasOwnProperty(n)&&(o[n]=e[n]);for(var i in t)t.hasOwnProperty(i)&&("_"!=i[0]||r)&&(o[i]=t[i]);return o}function a(e,t){return Object.prototype.toString.call(e)==="[object "+(t||"Object")+"]"}function s(){var e=window.location.hostname;return/test\.ximalaya\.com$/.test(e)?!0:!!/^\d{0,4}\.\d{0,4}\.\d{0,4}\.\d{0,4}$/.test(e)}function c(e,t){var r=t||window.location.search,o=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=r.substr(1).match(o);return null!=n?decodeURI(n[2]):""}function u(){var e,t,r,o,n,i,a=/(baidu|so|sogou|google|bing|sm)/,s=/(?:^|&)(wd|q|query|keyword|word)=([^&]*)(?:&|$)/,c={refr_source:"other",refr_medium:"",refr_term:"",refr_from:"",referer_url:""},u=document.referrer;e=document.createElement("a"),e.href=u,u&&(c.referer_url=e.href,r=e.hostname,t=e.search.slice(1),o=a.test(r),n=r.match(a),o&&(c.refr_source="search",c.refr_medium=n[1],t&&((i=t.match(s))&&(c.refr_term=decodeURIComponent(i[2])),(i=t.match(/(?:^|&)(from)=([^&]*)(?:&|$)/))&&(c.refr_from=decodeURIComponent(i[2])))));var f=P.env,m=f.os;if("android"==m||"ios"===m)switch(f.browser){case"iting":c.refr_source="internal",c.refr_medium="iting";break;case"weixin":c.refr_source="social",c.refr_medium="weixin";break;case"qq":c.refr_source="social",c.refr_medium="qq";break;case"sinaBlog":c.refr_source="social",c.refr_medium="sinaBlog";break;case"qqBlog":c.refr_source="social",c.refr_medium="qqBlog"}return c}function f(e,t){var r,o;t&&(o=document.createElement("a"),o.href=t,r=o.search);for(var n in e)e[n]=decodeURIComponent(c(n,r));e.utm_from=decodeURIComponent(c("from",r))}function m(){var e,t=document.referrer,r=n(c("utm_source")),o={utm_source:"",utm_medium:"",utm_campaign:"",utm_content:"",utm_term:"",utm_from:""};if(t&&f(o,t),""!=r&&f(o),o.utm_source)for(var i in o)e=o[i]||"",o.hasOwnProperty(i)&&C.cookie.set(i,encodeURIComponent(e||""));C.cookie.set("x_xmly_traffic",encodeURIComponent(d()))}function d(){var e,t=["utm_source","utm_medium","utm_campaign","utm_content","utm_term","utm_from"];for(var r in t){if(e=t[r],val=decodeURIComponent(C.cookie.get(e)||""),0==r&&null==val)return"";t[r]=e+":"+(null==val?"":val)}return t[0]?t.join("&"):""}function p(){var e=C.cookie.get("_xmLog");return e||(e=r(),C.cookie.set("_xmLog",e,{expires:864e5})),e}function l(e,t){var r=t||0;return Array.prototype.slice.call(e,r)}function g(e,t){try{return e.getAttribute(t)}catch(r){return""}}function v(){var e=window.performance;if(!e)return void console.log("你的浏览器不支持 performance 接口");var t=e.timing,r={};return r.loadPage=t.loadEventEnd-t.navigationStart,r.domReady=t.domComplete-t.responseEnd,r.redirect=t.redirectEnd-t.redirectStart,r.lookupDomain=t.domainLookupEnd-t.domainLookupStart,r.ttfb=t.responseStart-t.navigationStart,r.request=t.responseEnd-t.requestStart,r.loadEvent=t.loadEventEnd-t.loadEventStart,r.appcache=t.domainLookupStart-t.fetchStart,r.unloadEvent=t.unloadEventEnd-t.unloadEventStart,r.connect=t.connectEnd-t.connectStart,r}function h(e,t,r){if(e){"string"==typeof e&&(r=t,t=e,e=P);try{if(e===P)return T[t]=T[t]||[],void T[t].unshift(r);e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent&&e.attachEvent("on"+t,r)}catch(o){}}}function w(e,t,r){if(e){"string"==typeof e&&(r=t,t=e,e=P);try{if(e===P){var o=T[t];if(!o)return;for(var n=o.length;n--;)o[n]===r&&o.splice(n,1);return}e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent&&e.detachEvent("on"+t,r)}catch(i){}}}function y(e){var t=T[e];if(t){for(var r=l(arguments,1),o=0,n=t.length;n--;)t[n].apply(this,r)&&o++;return o}}function b(){var t=navigator,r=t.userAgent,o=e.screen,n={os:"",browser:"",ua:r,resolution:(o.width||0)+"x"+(o.height||0),trackType:"ontouchstart"in window?"H5":"web"},i=function(e){return function(){return e.test(r)}},a={isAndroid:i(/android/i),isIOS:i(/(ipad|iphone|ipod)/i),isWindows:i(/window/i),isMac:i(/mac os x/i),isChrome:i(/webkit\W.*(chrome|chromium)\W/i),isFirefox:i(/mozilla.*\Wfirefox\W/i),isGecko:i(/mozilla(?!.*webkit).*\Wgecko\W/i),is360se:i(/360/i),isIE:function(){return"Microsoft Internet Explorer"===navigator.appName?!0:!!i(/\bTrident\b/)()},isOpera:i(/opera.*\Wpresto\W|OPR/i),isSafari:i(/webkit\W(?!.*chrome).*safari\W/i),isMobile:i(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),isWebKit:i(/webkit\W/i),isIting:i(/iting/i),isWeixin:i(/micromessenger/i),isSinaWeibo:i(/weibo/i),isQQ:i(/qq/i),isQQWeibo:i(/tencentmicroblog/i)};return a.isMobile()?(n.device="mobile",a.isAndroid()&&(n.os="android"),a.isIOS()&&(n.os="Ios"),a.isIting()&&(n.browser="iting"),a.isWeixin()&&(n.browser="weixin"),a.isSinaWeibo()&&(n.browser="sinaBlog"),a.isQQ()&&(n.browser="qq"),a.isQQWeibo()&&(n.browser="qqBlog")):(n.device="pc",a.isWindows()&&(n.os="windows"),a.isMac()&&(n.os="mac"),a.isChrome()&&(n.browser="chrome"),a.isFirefox()&&(n.browser="firefox"),a.isIE()&&(n.browser="ie"),a.isOpera()&&(n.browser="opera"),a.isSafari()&&(n.browser="safari"),a.is360se()&&(n.browser="360")),n}function _(e,t,r){var o,n=!1;window.ActiveXObject?(o=new XDomainRequest,n=!0):o=new XMLHttpRequest,o.onreadystatechange=function(){2==o.readyState&&M--,4==o.readyState&&200==o.status&&r&&r(responseText)},o.open("POST",e),o.withCredentials=!0,n?o.contentType="application/json":o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),M++}function x(e,r,o){if(e&&r){if(o)return void _(e,r);var n=t.createElement("img"),i=[];for(var a in r)r[a]&&i.push(a+"="+encodeURIComponent(r[a]));var s="img_"+ +new Date;P[s]=n,n.onload=n.onerror=function(){P[s]=n=n.onload=n.onerror=null,delete P[s]},n.src=e+(e.indexOf("?")<0?"?":"&")+i.join("&")}}function S(e,t){if(!e)return t;var r={};for(var o in t)null!==e[o]&&(r[e[o]||o]=t[o]);return r}function k(e){var t=e.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,9).join("@").replace(/\?[^:]+/gi,""),r=e.toString();return t.indexOf(r)<0&&(t=r+"@"+t),t}function E(e){this.name=e,this.props={_parameterMapping:null,_url:P.url},this.argsList=[],this._xmLog=P}function I(e){if(e=e||"default","*"===e){var t=[];for(var r in j)j.hasOwnProperty(r)&&t.push(j[r]);return t}return j[e]=j[e]||new E(e)}function q(e){if(this.created||/^(on|off|set|get|create)$/.test(e)){var t=E.prototype[e],r=l(arguments,1);"function"==typeof t&&t.apply(this,r)}else this.argsList.push(arguments)}function P(){var e=l(arguments);String(e[0]).replace(/^(?:([\w$_]+)\.)?(\w+)$/,function(t,r,o){e[0]=o,q.apply(P.getTracker(r),e)})}function O(){var e=C.sessionStorage;return info={srcPage:e.get("srcPage")||"",srcPageId:e.get("srcPageId")||"",srcModule:e.get("srcModule")||"",srcPosition:e.get("srcPosition")||""},info}function W(){var e=P.env,t={br_userAgent:e.ua,br_type:e.browser,br_viewSize:e.resolution,page_url:location.href,page_title:document.title,os:e.os,trackType:e.trackType},r=i(u(),t),o=i({x_xmly_traffic:d()},r);return o}function L(e){var t=0,r=C.sessionStorage;D.page&&(r.set("srcPage",D.page||""),r.set("srcPageId",D.pageId||""),r.set("srcModule",D.module||""),r.set("srcPosition",D.postion||""));for(var o in j)if(j.hasOwnProperty(o)){var n=j[o];n.created&&(t+=n.trigger("unload"))}if(t||M>0)for(var i=new Date;new Date-i<300;);}var R=e[e._xmObjName||"xmLog"];if(!R||!R.defined){var T={},j={},D={},M=0,C={sessionStorage:{set:function(e,t){if(window.sessionStorage)try{window.sessionStorage.setItem(e,t)}catch(r){}},get:function(e){return window.sessionStorage?window.sessionStorage.getItem(e):null},remove:function(e){window.sessionStorage&&window.sessionStorage.removeItem(e)}},localStorage:{set:function(e,t){if(window.localStorage)try{window.localStorage.setItem(e,t)}catch(r){}},get:function(e){return window.localStorage?window.localStorage.getItem(e):null},remove:function(e){window.localStorage&&window.localStorage.removeItem(e)}},cookie:{set:function(e,t,r){var o,n=r&&r.domain,i=r&&r.path||"/";return/ximalaya\.com$/.test(window.location.hostname)&&(n=".ximalaya.com"),r&&r.expires&&(o=new Date,o.setTime(o.getTime()+1e3*r.expires)),document.cookie=e+"="+t+(n?"; domain="+n:"")+(i?"; path="+i:"")+(o?"; expires="+o.toGMTString():"")+(r&&r.secure?"; secure":""),document.cookie},get:function(e){return(e=RegExp("(^| )"+e+"=([^;]*)(;|$)").exec(document.cookie))?e[2]:null}},getData:function(e,t){try{return"string"==typeof t?this[t].get(e):this.cookie.get(e)||this.localStorage.get(e)||this.sessionStorage.get(e)}catch(r){}},setData:function(e,t,r){try{var o="string"==typeof r&&r||arguments[3];if(o)return void this[o].set(e,t,r);var n=this.cookie.set(e,t,r);n?this.localStorage.set(e,t):this.sessionStorage.set(e,t)}catch(i){}},clear:function(e,t){try{if(t)return void("cookie"==t?this.cookie.set(e,"",{expires:-1}):this[t].remove(e));this.cookie.set(e,"",{expires:-1}),this.sessionStorage.remove(e),this.localStorage.remove(e)}catch(r){}}},$=e.onerror;if(e.onerror=function(t,r,o,n,i){var s=t;i&&i.stack&&(s=k(i)),a(s,"Event")&&(s+=s.type?"--"+s.type+"--"+(s.target?s.target.tagName+"::"+s.target.src:""):""),$&&$.apply(e,arguments)},E.prototype.create=function(e){if(!this.created){"object"==typeof e&&this.set(e),this.created=new Date,this.trigger("create",this);for(var t;t=this.argsList.shift();)q.apply(this,t)}},E.prototype._assembleData=function(e){var t={events:[]};return t.events.push({props:e,ts:o()}),t},E.prototype.send=function(e,t){var r=this,o=this.props,n=i({uuid:r._xmLog.sid},o);switch(n=i(n,W()),"object"==typeof t&&("event"==e&&(t.srcPage=t.srcPage||o.item,t.srcPageId=t.srcPageId||o.itemId,D.module=t.srcModule||"",D.postion=t.srcPosition||""),n=i(n,t)),e){case"pageview":n=i(O(),n),n.appName="event",n.serviceId="pageview";break;case"event":n.appName="event";break;case"exception":break;case"timing":return void console.log(v());default:return}n=r._assembleData(n),r.trigger("send",n)!==!1&&x(r._xmLog.url,S(r.props.parameterMapping,n),!0)},E.prototype.set=function(e,t){if("string"==typeof e)this.props[e]=t,"item"==e&&(D.page=t),"itemId"==e&&(D.pageId=t);else if("object"==typeof e)for(var r in e)e.hasOwnProperty(r)&&this.set(r,e[r])},E.prototype.get=function(e,t){var r=this.props[e];return"function"==typeof t&&t(r),r},E.prototype.trigger=function(e){var t=l(arguments);return t[0]=this.name+"."+e,y.apply(this,t)},E.prototype.on=function(e,t){P.on(this.name+"."+e,t)},E.prototype.off=function(e,t){P.off(this.name+"."+e,t)},P.name="xmLog",P.sid=p(),P.defined=!0,P.timestamp=o(),P.off=w,P.on=h,P.trigger=y,P.getTracker=I,P.url=location.protocol+"//xdcs-collector."+(s()?"test.":"")+"ximalaya.com/api/v1/statistics",P.env=b(),P.on(document,"click",function(e){for(var e=e||window.event,t=e.target||e.srcElement;t&&"xm"!=g(t,"xmlog-spy");)t=t.parentNode;"xm"==g(t,"xmlog-spy")&&(D.module=g(t,"xmlog-mod")||"",D.postion=g(t,"xmlog-pos")||"")}),C.cookie.set("trackType",P.env.trackType,{path:"/"}),m(),R){var U=R.q||[];R.q=null;for(var N in P)P.hasOwnProperty(N)&&(R[N]=P[N]);R.q={push:function(e){P.apply(P,e)}};for(var Q=0;Q<U.length;Q++)P.apply(P,U[Q])}e[e._xmObjName||"xmLog"]=P,h(e,"unload",L)}}(window,document);
asdasdasdasd
asdasdasdasdsds
sessionStorages
s